using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Planet.Dashboard.GitHubEventProcessor
{
	class CommitStats
	{
		public int additions { get; set; }
		public int deletions { get; set; }
		public int total { get; set; }
	}

	class CommitDetails
	{
		public CommitStats stats { get; set; }
	}
}
