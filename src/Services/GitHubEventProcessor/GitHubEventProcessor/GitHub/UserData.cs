using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace GitHubTypes
{
	class UserData
	{
		public IList<Event> Events { get; set; }

		public int GetCount(EventType eventType)
		{
			return Events.Count(e => e.type == eventType);
		}

		public IList<Event> GetEventsOfType(EventType eventType)
		{
			return Events.Where(e => e.type == eventType).ToList();
		}
	}
}
