namespace Planet.Dashboard.Rewards.Services.ApiController
{
    using Microsoft.OData.Core;
    using Planet.Dashboard.Rewards.Core.Entities;
    using System;
    using System.Linq;
    using System.Net;
    using System.Threading.Tasks;
    using System.Web.Http;
    using System.Web.OData;
    using System.Web.OData.Query;

    public class UsersController : BaseController<User>
    {
        [EnableQuery]
        public async Task<IQueryable<Organization>> GetAffiliations([FromODataUri] string key)
        {
            PagedResult<AffiliationUserOrganization> result = await DBClient.ListAsync<AffiliationUserOrganization>(
                item =>
                    item.SourceId == key &&
                    item.PartitionId == key &&
                    item.SourceType == EntityType.User &&
                    item.LinkType == LinkType.Affiliation_UserOrganization,
                string.Empty);

            throw new NotImplementedException();
	    }

        private static ODataValidationSettings _validationSettings = new ODataValidationSettings();        

        // GET: api/<version>/Users(5)
        public async Task<IHttpActionResult> GetUser([FromODataUri] string key, ODataQueryOptions<User> queryOptions)
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

            User result = await DBClient.GetAsync<User>(key, key);
               
            if (result == null)
            {
                return this.NotFound();
            }
            
            return this.Ok<User>(result);
        }

        // POST: api/<version>/Users
        public async Task<IHttpActionResult> Post(User user)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            User newUser = await BaseController<User>.DBClient.Create<User>(user);
            // TODO: Add create logic here.

            // return Created(user);
            return this.Created<User>(newUser);
        }

        // PATCH: api/<version>/Users(5)
        [AcceptVerbs("PATCH", "MERGE")]
        public async Task<IHttpActionResult> Patch([FromODataUri] string key, Delta<User> delta)
        {
            Validate(delta.GetEntity());

            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            User read = await DBClient.GetAsync<User>(key, key);

            delta.Patch(read);

            await DBClient.Update<User>(read);            

            return this.Updated<User>(read);
        }

        // DELETE: api/<version>/Users('5')
        public async Task<IHttpActionResult> Delete([FromODataUri] string key)
        {
            await DBClient.Delete(key, key);

            return StatusCode(HttpStatusCode.NoContent);            
        }
    }
}
