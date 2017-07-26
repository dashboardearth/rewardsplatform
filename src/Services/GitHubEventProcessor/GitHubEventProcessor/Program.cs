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
	}

	class Program
	{
		class JsonMessagePayload
		{
			public string gitHubUserName { get; set; }
		}

		public static async Task<string> RetrieveUserDataAsync(string gitHubUserName)
		{
			string jsonString = await HttpRequestHelper.DoRequestAsync(gitHubUserName);

			GitHubUserData userData = new GitHubUserData();
			userData.Events = JsonConvert.DeserializeObject<IList<Event>>(jsonString);

			return jsonString;
		}

		public static async void ProcessQueueMessage([QueueTrigger("giteventprocessorqueue")] string jsonMessagePayloadString,
			[Blob("containername/blobname")]TextWriter writer)
		{
			JsonMessagePayload messagePayload = JsonConvert.DeserializeObject<JsonMessagePayload>(jsonMessagePayloadString);

			Console.WriteLine("ProcessQueueMessage - Retrieving data for gitHubUserName: " + messagePayload.gitHubUserName);
		
			string jsonString = await RetrieveUserDataAsync(messagePayload.gitHubUserName);

			writer.WriteLine(jsonString);
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
					string jsonString = RetrieveUserDataAsync(gitHubUserName).Result;
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
				JobHost host = new JobHost();
				host.RunAndBlock();

				return 0;
			}
		}
	}
}
