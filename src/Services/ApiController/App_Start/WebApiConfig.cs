namespace Planet.Dashboard.Rewards.Services.ApiController
{
    using Core = Planet.Dashboard.Rewards.Core;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Web.Http;
    using System.Web.OData.Builder;
    using System.Web.OData.Extensions;
    using Microsoft.OData.Edm;
    using System.Web.OData.Routing.Conventions;
    using System.Web.OData.Routing;

    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services
            ODataConventionModelBuilder builder = new ODataConventionModelBuilder();            
            builder.EnableLowerCamelCase();            
            builder.EntitySet<Core.Entities.User>("Users");
            EntityTypeConfiguration<Core.Entities.Organization> organization = builder.EntitySet<Core.Entities.Organization>("Organizations").EntityType;
            builder.EntitySet<Core.Entities.Affiliation>("Affiliations");
            builder.AddEntityType(typeof(Core.Entities.Affiliation));
            builder.EntitySet<Core.Entities.Action>("Actions");
            builder.EntitySet<Core.Entities.Beacon>("Beacons");
            builder.EntitySet<Core.Entities.Event>("Events");
            organization.Function("GetAffiliations").ReturnsCollection<Core.Entities.Affiliation>();
            organization.Action("AddAffiliation").Parameter<Core.Entities.Affiliation>("affiliation");
            organization.Action("RemoveAffiliation").Parameter<Core.Entities.Affiliation>("affiliation");

            IEdmModel model = builder.GetEdmModel();
            config.MapODataServiceRoute("odata", "api/beta", model);
            config.SetSerializeNullDynamicProperty(true);
        }
    }
}
