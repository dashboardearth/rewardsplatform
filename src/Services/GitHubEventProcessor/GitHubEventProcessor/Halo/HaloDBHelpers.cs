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
		public static User ConvertGitHubUserDataToHaloUser(GitHubUserData userData)
		{
			// $todo
			return new User();
		}

		public static async Task WriteUserToEntityDBAsync(User user, IEntityDBClient dbClient)
		{
			await dbClient.Update<User>(user);
			return;
		}
	}

	class HaloDBClientWrapper
	{
		IEntityDBClient CreateDBClient()
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
