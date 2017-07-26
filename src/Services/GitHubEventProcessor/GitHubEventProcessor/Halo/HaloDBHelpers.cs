using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Planet.Dashboard.Rewards.Core;
using Planet.Dashboard.Rewards.Core.Entities;

namespace Planet.Dashboard.GitHubEventProcessor
{
	static class HaloDBHelpers
	{
		public static void ConvertGitHubUserDataToHaloUserAsync(GitHubUserData userData, ref User user)
		{
			user.CountPushEvents = userData.GetPushEventCount();
		}

		public static async Task UpdateUserAsync(GitHubUserData userData, IEntityDBClient dbClient)
		{
			try
			{
				User user = await dbClient.GetUserByUsernameAsync(userData.UserName);
				ConvertGitHubUserDataToHaloUserAsync(userData, ref user);

				await dbClient.Update<User>(user);
				
				user = await dbClient.GetUserByUsernameAsync(userData.UserName);

				return;
			}
			catch (Exception e)
			{
				Console.WriteLine("Exception caught: " + e.ToString());
			}
		}

		public static IEntityDBClient CreateDBClient()
		{
			Uri endpoint = new Uri(ConfigurationManager.AppSettings["EntityDBServiceEndpoint"]);
			string authKey = ConfigurationManager.AppSettings["EntityDBAuthKey"];
			const string DatabaseName = "entities";
			const string CollectionName = "entities";

			IEntityDBClient client = new EntityDBClient(endpoint, authKey, DatabaseName, CollectionName);
			return client;
		}
	}
}
