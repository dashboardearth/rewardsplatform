using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Planet.Dashboard.GitHubEventProcessor
{
	public class Repository
	{
		public int id { get; set; }
		public string name { get; set; }
		public string url { get; set; }
	}
}
