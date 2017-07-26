namespace Planet.Dashboard.Rewards.Services.ApiController
{
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
        public override async Task<IHttpActionResult> Get([FromODataUri] string key, ODataQueryOptions<User> queryOptions)
        {

            Guid id;
            if (Guid.TryParse(key, out id))
            {
                return await base.Get(key, queryOptions);
            }

            User read = await DBClient.GetUserByUsernameAsync(key);

            if(read == null)
            {
                return this.NotFound();
            }

            return this.Ok(read);
        }


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
    }
}
