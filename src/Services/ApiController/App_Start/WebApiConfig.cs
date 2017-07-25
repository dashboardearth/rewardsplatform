﻿namespace Planet.Dashboard.Rewards.Services.ApiController
{
    using Core = Planet.Dashboard.Rewards.Core;
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
            builder.EntitySet<Core.Entities.User>("Users");
            builder.EntitySet<Core.Entities.Organization>("Organizations");
            builder.EntitySet<Core.Entities.Action>("Actions");
            builder.EntitySet<Core.Entities.Beacon>("Beacons");
            builder.EntitySet<Core.Entities.Event>("Events");
            config.MapODataServiceRoute("odata", "api/beta", builder.GetEdmModel());
        }
    }
}
