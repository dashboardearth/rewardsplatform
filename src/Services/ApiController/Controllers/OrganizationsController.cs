﻿using System;
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
using Microsoft.Azure.Documents.Client;
using System.Threading.Tasks;

namespace Planet.Dashboard.Rewards.Services.ApiController.Controllers
{
    public class OrganizationsController : BaseController<Organization>
    {
        //[ODataRoute("Organizations('{key}')/Default.GetAffiliations")]
        //[HttpGet]
        [EnableQuery]
        public async Task<IQueryable<Affiliation>> GetAffiliations([FromODataUri] string key)
        {
            PagedResult<AffiliationOrganizationUser> response = await DBClient.ListAsync<AffiliationOrganizationUser>(
                item =>
                    item.SourceId == key &&
                    item.PartitionId == key &&
                    item.SourceType == EntityType.Organization &&
                    item.LinkType == LinkType.Affiliation_OrganizationUser,
                string.Empty);

            IQueryable<Affiliation> result = response.Result.SelectMany(item => item.TargetEntities).AsQueryable();
            return result;
        }

        [HttpPost]
        public async Task<IHttpActionResult> AddAffiliation([FromODataUri] string key, ODataActionParameters parameters)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Affiliation affiliation = parameters["affiliation"] as Affiliation;

            await DBClient.AddLinks<Affiliation>(key, EntityType.Organization, LinkType.Affiliation_OrganizationUser, key, new Affiliation[] { affiliation });
            return this.StatusCode(HttpStatusCode.Created);
        }

        [HttpPost]
        public async Task<IHttpActionResult> RemoveAffiliation([FromODataUri] string key, ODataActionParameters parameters)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            Affiliation affiliation = parameters["affiliation"] as Affiliation;

            await DBClient.RemoveLink<Affiliation>(key, EntityType.Organization, LinkType.Affiliation_OrganizationUser, key, affiliation);
            return this.StatusCode(HttpStatusCode.Created);
        }
    }
}
