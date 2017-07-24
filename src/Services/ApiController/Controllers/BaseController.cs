namespace Planet.Dashboard.Rewards.Services.ApiController
{
    using System;
    using System.Collections.Generic;
    using System.Data;
    using System.Linq;
    using System.Net;
    using System.Net.Http;
    using System.Web.Http;
    using System.Web.ModelBinding;
    using System.Web.OData;
    using System.Web.OData.Query;
    using System.Web.OData.Routing;
    using Planet.Dashboard.Rewards.Core.Entities;
    using Microsoft.OData.Core;
    using Microsoft.Azure.Documents.Client;
    using Core;
    using System.Configuration;

    public abstract class BaseController : ODataController
    {
        private readonly static Lazy<IEntityDBClient> dbClient = new Lazy<IEntityDBClient>(() => BaseController.CreateDBClient());

        public static IEntityDBClient DBClient
        {
            get
            {
                return BaseController.dbClient.Value;
            }
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
    }
}
