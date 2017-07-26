using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Planet.Dashboard.GitHubEventProcessor
{
	class Organization
	{
		public int id { get; set; }
		public string login { get; set; }
		public string display_login { get; set; }
		public string gravatar_id { get; set; }
		public string url { get; set; }
		public string avatar_url { get; set; }
	}
}
