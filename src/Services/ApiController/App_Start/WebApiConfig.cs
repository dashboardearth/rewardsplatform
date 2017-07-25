namespace Planet.Dashboard.Rewards.Services.ApiController
{
    using Planet.Dashboard.Rewards.Core.Entities;
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Web.Http;
    using System.Web.OData.Builder;
    using System.Web.OData.Extensions;

    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services
            ODataConventionModelBuilder builder = new ODataConventionModelBuilder();
            builder.EnableLowerCamelCase();
            builder.EntitySet<User>("Users");
            builder.EntitySet<Organization>("Organizations");
            config.MapODataServiceRoute("odata", "api/beta", builder.GetEdmModel());
        }
    }
}
