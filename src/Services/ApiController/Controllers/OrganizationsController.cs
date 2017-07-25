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
    public class OrganizationsController : BaseController
    {
        private static ODataValidationSettings _validationSettings = new ODataValidationSettings();

        // GET: 
        public async Task<IHttpActionResult> GetOrg([FromODataUri] string key, ODataQueryOptions<Organization> queryOptions)
        {
            // Validate query
            try {
                queryOptions.Validate(_validationSettings);
            } catch (ODataException ex)
            {
                return BadRequest(ex.Message);
            }

            Organization result = await DBClient.GetAsync<Organization>(key, key);

            if (result == null)
            {
                return this.NotFound();
            }
            return this.Ok<Organization>(result);
        }

        // POST: 
        public async Task<IHttpActionResult> Post(Organization org)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Organization newOrg = await BaseController.DBClient.Create<Organization>(org);

            return this.Created<Organization>(newOrg);
        }

        // PATCH: 
        [AcceptVerbs("PATCH", "MERGE")]
        public  async Task<IHttpActionResult> Patch([FromODataUri] string key, Delta<Organization> delta)
        {
            Validate(delta.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Organization read = await DBClient.GetAsync<Organization>(key, key);

            delta.Patch(read);

            await DBClient.Update<Organization>(read);

            return this.Updated<Organization>(read);
        }

        // DELETE: 
        public async Task<IHttpActionResult> Delete([FromODataUri] string key)
        {
            await DBClient.Delete(key, key);

            return StatusCode(HttpStatusCode.NoContent);
        }
    }
}
