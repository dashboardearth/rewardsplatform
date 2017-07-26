using Microsoft.Azure.WebJobs;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Planet.Dashboard.Rewards.Core;
using System.Configuration;

namespace Planet.Dashboard.GitHubEventProcessor
{
	static class HttpRequestHelper
	{
		public static async Task<string> DoRequestAsync(string gitHubUserName)
		{
			string result = string.Empty;

			using (var client = new HttpClient(new HttpClientHandler { AutomaticDecompression = DecompressionMethods.GZip | DecompressionMethods.Deflate }))
			{
				client.BaseAddress = new Uri(@"https://api.github.com");
				client.DefaultRequestHeaders.Add("User-Agent",
												 "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; WOW64; Trident / 6.0)");

				string Url = @"/users/" + gitHubUserName + @"/events";
				HttpResponseMessage response = await client.GetAsync(Url);

				response.EnsureSuccessStatusCode();
				result = await response.Content.ReadAsStringAsync();

				Console.WriteLine("Result: " + result);
			}

			return result;
		}

		public static async Task<string> DoRequestCommitDetailsAsync(string gitHubUserName, string repository, string sha)
		{
			string result = string.Empty;

			using (var client = new HttpClient(new HttpClientHandler { AutomaticDecompression = DecompressionMethods.GZip | DecompressionMethods.Deflate }))
			{
				client.BaseAddress = new Uri(@"https://api.github.com");
				client.DefaultRequestHeaders.Add("User-Agent",
												 "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; WOW64; Trident / 6.0)");

				string Url = @"/repos/" + gitHubUserName + @"/" + repository + @"/commits/" + sha;

				try
				{
					HttpResponseMessage response = await client.GetAsync(Url);

					response.EnsureSuccessStatusCode();
					result = await response.Content.ReadAsStringAsync();

					Console.WriteLine("Result: " + result);
				}
				catch (Exception e)
				{
					// $todo Understand why we are getting a 404. I think it's because of this topic
					// https://developer.github.com/v3/troubleshooting/#why-am-i-getting-a-404-error-on-a-repository-that-exists
					// Console.WriteLine("Exception caught: " + e.ToString());
				}
			}

			return result;
		}
	}

	public class Program
	{
		class JsonMessagePayload
		{
			public string gitHubUserName { get; set; }
		}
		public static void HandleDeserializationError(object sender, Newtonsoft.Json.Serialization.ErrorEventArgs errorArgs)
		{
			var currentError = errorArgs.ErrorContext.Error.Message;
			errorArgs.ErrorContext.Handled = true;
		}

		public static async Task<GitHubUserData> RetrieveUserDataAsync(string gitHubUserName)
		{
			string jsonString = await HttpRequestHelper.DoRequestAsync(gitHubUserName);
			Console.WriteLine(jsonString);

			GitHubUserData userData = new GitHubUserData();
			userData.UserName = gitHubUserName;
			userData.Events = JsonConvert.DeserializeObject<IList<Event>>(jsonString, new JsonSerializerSettings
			{
				Error = Program.HandleDeserializationError
			});
<<<<<<< HEAD

			// $todo We'll hit rate-limits for non-authenticated callers of the GitHub APIs! We'll
			// need to support authenticated calls to GitHub before we uncomment the below.
			// Details on the rate limiting here: https://developer.github.com/v3/#rate-limiting
			
			// await GetCommitDetailsForPushEvents(userData);
=======
>>>>>>> origin/master

			return userData;
		}

		public static async Task GetCommitDetailsForPushEvents(GitHubUserData userData)
		{
			foreach (Event evt in userData.GetEventsOfType(EventType.PushEvent).Where(e => e.isPublic))
			{
				PushEventPayload payload = evt.payload as PushEventPayload;
				foreach (Commit commit in payload.Commits)
				{
					string jsonString = await HttpRequestHelper.DoRequestCommitDetailsAsync(userData.UserName, evt.repository.name, commit.sha);
					commit.details = JsonConvert.DeserializeObject<CommitDetails>(jsonString, new JsonSerializerSettings
					{
						Error = Program.HandleDeserializationError
					});
				}
			}
		}

		public static async void ProcessQueueMessage(
            [QueueTrigger("giteventprocessorqueue")] string jsonMessagePayloadString,
			[Blob("containername/blobname")]TextWriter writer)
		{
			JsonMessagePayload messagePayload = JsonConvert.DeserializeObject<JsonMessagePayload>(jsonMessagePayloadString);

            if(messagePayload == null ||
               string.IsNullOrWhiteSpace(messagePayload.gitHubUserName))
            {
                return;
            }

			Console.WriteLine("ProcessQueueMessage - Retrieving data for gitHubUserName: " + messagePayload.gitHubUserName);

			GitHubUserData userData = await RetrieveUserDataAsync(messagePayload.gitHubUserName);

			await HaloDBHelpers.UpdateUserAsync(userData, DBClientSingleton.Instance.Get());
			return;
		}

		public static void ProcessGitHubWebHook([WebHookTrigger] string body, TextWriter log)
		{
			// $todo Entry point when we start using GitHub WebHooks??
		}

		static int Main(string[] args)
		{
			if(args.Count() > 0)
			{
				string gitHubUserName = args[0];

				try
				{
					GitHubUserData userData = RetrieveUserDataAsync(gitHubUserName).Result;
					HaloDBHelpers.UpdateUserAsync(userData, DBClientSingleton.Instance.Get()).Wait();

					return 0;
				}
				catch (Exception e)
				{
					Console.WriteLine("Exception caught: " + e.ToString());
					return -1;
				}
			}
			else
			{
                JobHostConfiguration config = new JobHostConfiguration();
                config.StorageConnectionString = ConfigurationManager.AppSettings["WebJobStorage"];
                config.DashboardConnectionString = null;
                config.Queues.BatchSize = 1;
                config.UseCore();
                JobHost host = new JobHost(config);
				host.RunAndBlock();

				return 0;
			}
		}
	}
}
