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
    public class ActionController : BaseController<Core.Entities.Action>
    {
        private static ODataValidationSettings _validationSettings = new ODataValidationSettings();

        // GET: api/
        public async Task<IHttpActionResult> GetAction([FromODataUri] string key, ODataQueryOptions<Core.Entities.Action> queryOptions)
        {
            // Validate the query.
            try
            {
                queryOptions.Validate(_validationSettings);
            } catch (ODataException ex)
            {
                return BadRequest(ex.Message);
            }

            Core.Entities.Action result = await DBClient.GetAsync<Core.Entities.Action>(key, key);

            if (result == null)
            {
                return this.NotFound();
            }

            return this.Ok<Core.Entities.Action>(result);
        }

        // POST: api/
        public async Task<IHttpActionResult> Post(Core.Entities.Action action)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Core.Entities.Action newAction = await BaseController<Core.Entities.Action>.DBClient.Create<Core.Entities.Action>(action);

            return this.Created<Core.Entities.Action>(newAction);
        }

        // PATCH: api/
        [AcceptVerbs("PATCH", "MERGE")]
        public async Task<IHttpActionResult> Patch([FromODataUri] string key, Delta<Core.Entities.Action> delta)
        {
            Validate(delta.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Core.Entities.Action read = await DBClient.GetAsync<Core.Entities.Action>(key, key);

            delta.Patch(read);

            await DBClient.Update<Core.Entities.Action>(read);

            return this.Updated<Core.Entities.Action>(read);
        }

        // DELETE: api/
        public async Task<IHttpActionResult> Delete([FromODataUri] string key)
        {
            await DBClient.Delete(key, key);

            return StatusCode(HttpStatusCode.NoContent);
        }
    }
}
