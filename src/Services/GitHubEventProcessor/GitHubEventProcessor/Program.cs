using Newtonsoft.Json;
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

namespace githubpulluserevents
{
	static class HttpRequestHelper
	{
		public static async Task<string> DoRequestAsync()
		{
			string result = string.Empty;
			string url = @"https://api.github.com/users/un1crom/events";

			using (var client = new HttpClient(new HttpClientHandler { AutomaticDecompression = DecompressionMethods.GZip | DecompressionMethods.Deflate }))
			{
				client.BaseAddress = new Uri(@"https://api.github.com");
				client.DefaultRequestHeaders.Add("User-Agent",
												 "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2; WOW64; Trident / 6.0)");

				// $todo Pass in GitHub user into this function and build Uri from that
				HttpResponseMessage response = await client.GetAsync(@"/users/oneCodeSlinger/events");

				response.EnsureSuccessStatusCode();
				result = await response.Content.ReadAsStringAsync();

				Console.WriteLine("Result: " + result);
			}

			return result;
		}
	}

	class Program
	{
		static int Main(string[] args)
		{
			// $todo Pass in GitHub user into this console app and parse here

			try
			{
				// $todo Pass in GitHub user into this function
				string jsonString = HttpRequestHelper.DoRequestAsync().Result;

				UserData userData = new UserData();
				userData.Events = JsonConvert.DeserializeObject<IList<Event>>(jsonString);

				return 0;
			}
			catch (Exception e)
			{
				Console.WriteLine("Exception caught: " + e.ToString());
				return -1;
			}
		}
	}
}
