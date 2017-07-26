using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Planet.Dashboard.GitHubEventProcessor
{
	class Commit
	{
		public string sha { get; set; }
		public Author author { get; set; }
		public string message { get; set; }
		public bool distinct { get; set; }
		public string url { get; set; }
	}
}
