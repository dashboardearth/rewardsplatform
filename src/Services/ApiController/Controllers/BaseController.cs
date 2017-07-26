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
    using Microsoft.Azure.Documents.Client;
    using Core;
    using System.Configuration;
    using System.Threading.Tasks;
    using Microsoft.OData;

    public abstract class BaseController<T> : ODataController where T : PartitionedEntry
    {
        private readonly static Lazy<IEntityDBClient> dbClient = new Lazy<IEntityDBClient>(() => BaseController<T>.CreateDBClient());
        private static ODataValidationSettings _validationSettings = new ODataValidationSettings();

        public static IEntityDBClient DBClient
        {
            get
            {
                return BaseController<T>.dbClient.Value;
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

        // GET: api/<version>/EntitySet(5)
        public virtual async Task<IHttpActionResult> Get([FromODataUri] string key, ODataQueryOptions<User> queryOptions)
        {
            // validate the query.
            try
            {
                queryOptions.Validate(_validationSettings);
            }
            catch (ODataException ex)
            {
                return BadRequest(ex.Message);
            }

            T result = await DBClient.GetAsync<T>(key, key);

            if (result == null)
            {
                return this.NotFound();
            }

            return this.Ok<T>(result);
        }

        // POST: api/<version>/EntitySet
        public virtual async Task<IHttpActionResult> Post(T entity)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            entity.id = Guid.NewGuid().ToString();
            T created = await DBClient.Create<T>(entity);

            return Created(created);
        }

        // PATCH: api/<version>/EntitySet(5)
        [AcceptVerbs("PATCH")]
        public virtual async Task<IHttpActionResult> Patch([FromODataUri] string key, Delta<T> delta)
        {
            Validate(delta);

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            T read = await DBClient.GetAsync<T>(key, key);

            delta.Patch(read);

            await DBClient.Update<T>(read);

            return Updated(read);
        }

        // DELETE: api/<version>/EntitySet('5')
        public virtual async Task<IHttpActionResult> Delete([FromODataUri] string key)
        {
            await DBClient.Delete(key, key);

            return StatusCode(HttpStatusCode.NoContent);
        }
    }
}
