using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Planet.Dashboard.GitHubEventProcessor
{	enum EventType
	{
		CreateEvent,
		ForkEvent,
		IssueCommentEvent,
		PushEvent,
		PullRequestEvent,
	}

	class Event
	{
		public string id { get; set; }
		public EventType type { get; set; }
		public Organization actor { get; set; }
		[JsonProperty(PropertyName = "repro")]
		public Repository repository { get; set; }
		[JsonConverter(typeof(EventPayloadConverter))]
		public IEventPayload payload { get; set; }
		[JsonProperty(PropertyName = "public")]
		public bool isPublic { get; set; }
		public DateTime created_at { get; set; }
		[JsonProperty(PropertyName = "org")]
		public Organization organization { get; set; }
	}
}
