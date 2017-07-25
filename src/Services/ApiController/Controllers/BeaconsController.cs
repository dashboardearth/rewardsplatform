using System;
using System.Collections.Generic;
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
using System.Threading.Tasks;

namespace Planet.Dashboard.Rewards.Services.ApiController.Controllers
{
    public class BeaconsController : BaseController<Beacon>
    {
        private static ODataValidationSettings _validationSettings = new ODataValidationSettings();

        // GET: api/
        public async Task<IHttpActionResult> GetBeacon([FromODataUri] string key, ODataQueryOptions<Beacon> queryOptions)
        {
            // Validate query
            try
            {
                queryOptions.Validate(_validationSettings);
            }
            catch (ODataException ex)
            {
                return BadRequest(ex.Message);
            }

            Beacon result = await DBClient.GetAsync<Beacon>(key, key);

            if (result == null)
            {
                return this.NotFound();
            }

            return this.Ok<Beacon>(result);
        }

        // POST: api/Beacon
        public async Task<IHttpActionResult> Post (Beacon beacon)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Beacon newBeacon = await DBClient.Create<Beacon>(beacon);

            return this.Created<Beacon>(newBeacon);
        }

        // PATCH: api/
        [AcceptVerbs("PATCH", "MERGE")]
        public async Task<IHttpActionResult> Patch([FromODataUri] string key, Delta<Beacon> delta)
        {
            Validate(delta.GetEntity());

            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Beacon read = await DBClient.GetAsync<Beacon>(key, key);

            delta.Patch(read);

            await DBClient.Update<Beacon>(read);

            return this.Updated<Beacon>(read);
        }

        // DELETE: api/
        public async Task<IHttpActionResult> Delete([FromODataUri] string key)
        {
            await DBClient.Delete(key, key);

            return StatusCode(HttpStatusCode.NoContent);
        }
    }
}
