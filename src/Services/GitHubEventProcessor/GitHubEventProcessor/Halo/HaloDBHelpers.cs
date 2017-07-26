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
		static double Normalize(double value)
		{
			if(value >= 100)
			{
				return 1.0;
			}

			if(value < 0)
			{
				return 0.0;
			}

			return value / 100.0;
		}

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

			user.Size = Normalize(userData.GetDaysActive());
			user.Speed = Normalize(userData.GetVelocity());
			user.Brightness = Normalize(userData.GetPullConversionRate());
			user.Complexity = Normalize(userData.GetPullConversionRate()); // $todo
			user.Color = Normalize(userData.GetCreateEventCount());
<<<<<<< HEAD
			user.Wobble = Normalize(userData.GetNumberOfCommits()); // $todo GetTotalLinesOfCode broken because of private repos not reporting data
=======
			user.Wobble = Normalize(userData.GetNumberOfCommits());
>>>>>>> origin/master
			user.ColorCenter= Normalize(userData.GetPushEventCount());
			user.ColorCenterRatio = Normalize(userData.GetPullRequestEventCount());
			user.WaveCount = userData.GetEventFrequency();
			user.HighlightRing = Normalize(userData.GetCreateEventCount() + userData.GetPushEventCount()); // $todo
		}

		public static async Task UpdateUserAsync(GitHubUserData userData, IEntityDBClient dbClient)
		{
			try
			{
				User user = await dbClient.GetUserByUsernameAsync(userData.UserName);
				ConvertGitHubUserDataToHaloUserAsync(userData, ref user);

				await dbClient.Update<User>(user);
				
				//user = await dbClient.GetUserByUsernameAsync(userData.UserName);

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
