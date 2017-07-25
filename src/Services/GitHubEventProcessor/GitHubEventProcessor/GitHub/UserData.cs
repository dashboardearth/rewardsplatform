using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace githubpulluserevents
{
	class UserData
	{
		public IList<Event> Events { get; set; }

		public int GetCount(EventType eventType)
		{
			return Events.Count(e => e.type == eventType);
		}
	}
}
