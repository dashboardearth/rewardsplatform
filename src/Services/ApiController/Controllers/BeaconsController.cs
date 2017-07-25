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
    public class BeaconsController : BaseController<Beacon>
    {
    }
}
