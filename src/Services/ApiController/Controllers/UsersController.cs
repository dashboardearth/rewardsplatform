namespace Planet.Dashboard.Rewards.Services.ApiController
{
    using Planet.Dashboard.Rewards.Core.Entities;
    using System;
    using System.Linq;
    using System.Threading.Tasks;
    using System.Web.OData;

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
    }
}
