using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Planet.Dashboard.GitHubEventProcessor
{
	enum State
	{
		open,
		opened,
		closed,
		all
	}

	class PullRequestEventPayload : IEventPayload
	{
		public State action { get; set; }
	}
}
