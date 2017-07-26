using Planet.Dashboard.Rewards.Core;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Planet.Dashboard.GitHubEventProcessor
{
	public sealed class DBClientSingleton
	{
		private static volatile DBClientSingleton instance;
		private static object syncRoot = new Object();

		private IEntityDBClient dbClient;

		private DBClientSingleton()
		{
			dbClient = CreateDBClient();
		}

		public IEntityDBClient Get()
		{
			return Instance.dbClient;
		}

		private static IEntityDBClient CreateDBClient()
		{
			Uri endpoint = new Uri(ConfigurationManager.AppSettings["EntityDBServiceEndpoint"]);
			string authKey = ConfigurationManager.AppSettings["EntityDBAuthKey"];
			const string DatabaseName = "entities";
			const string CollectionName = "entities";

			IEntityDBClient client = new EntityDBClient(endpoint, authKey, DatabaseName, CollectionName);
			return client;
		}

		public static DBClientSingleton Instance
		{
			get
			{
				if (instance == null)
				{
					lock (syncRoot)
					{
						if (instance == null)
						{
							instance = new DBClientSingleton();
						}

					}
				}

				return instance;
			}
		}
	}
}
