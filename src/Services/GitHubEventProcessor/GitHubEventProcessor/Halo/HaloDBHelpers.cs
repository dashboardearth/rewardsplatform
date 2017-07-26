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
			//DaysActive => 'size':       (float),
			//Velocity => 'speed':      (float),
			//PullConversionRate => 'brightness': (float),
			//Complexity(inverse) =>       'complexity': (float),
			//CreateEventCount => 'color':      (float),
			//Total Code Line Count =>       'wobble':     (float),
			//PushEventCount => 'colorCenter': (float),
			//PullEventCount => 'colorCenterRatio': (float),
			//EventFrequencyCount    'waveCount':  (int),
			//OverallContributorRanking => 'highlightRing': (float)
			// that last one is... by adding up all the other ones, sort all users by total, then rank order

			user.Size = userData.GetDaysActive();
			user.Speed = userData.GetVelocity();
			user.Brightness = userData.GetPullConversionRate();
			user.Complexity = userData.GetPullConversionRate(); // $todo
			user.Color = userData.GetCreateEventCount();
			user.Wobble = userData.GetPullConversionRate(); // $todo
			user.ColorCenter= userData.GetPushEventCount();
			user.ColorCenterRatio = userData.GetPullRequestEventCount();
			user.WaveCount = userData.GetDaysActive(); // $todo;
			user.HighlightRing = userData.GetCreateEventCount() + userData.GetPushEventCount(); // $todo
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
