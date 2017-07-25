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
    public class EventController : BaseController
    {
        private static ODataValidationSettings _validationSettings = new ODataValidationSettings();

        // GET: 
        public async Task<IHttpActionResult> GetEvent([FromODataUri] string key, ODataQueryOptions<Event> queryOptions)
        {
            // Validate the query
            try
            {
                queryOptions.Validate(_validationSettings);
            } catch (ODataException ex)
            {
                return BadRequest(ex.Message);
            }

            Event result = await DBClient.GetAsync<Event>(key, key);

            if (result == null)
            {
                return this.NotFound();
            }

            return this.Ok<Event>(result);
        }

        // POST: api/
        public async Task<IHttpActionResult> Post(Event currentEvent)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Event newEvent = await BaseController.DBClient.Create<Event>(currentEvent);

            return this.Created<Event>(newEvent);
        }

        // PATCH: api/
        [AcceptVerbs("PATCH", "MERGE")] 
        public async Task<IHttpActionResult> Patch([FromODataUri] string key, Delta<Event> delta)
        {
            Validate(delta.GetEntity());

            if(!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Event read = await DBClient.GetAsync<Event>(key, key);

            delta.Patch(read);

            await DBClient.Update<Event>(read);

            return this.Updated<Event>(read);
        }

        // DELETE: api/Event/5
        public async Task<IHttpActionResult> Delete([FromODataUri] string key)
        {
            await DBClient.Delete(key, key);

            return StatusCode(HttpStatusCode.NoContent);
        }
    }
}
