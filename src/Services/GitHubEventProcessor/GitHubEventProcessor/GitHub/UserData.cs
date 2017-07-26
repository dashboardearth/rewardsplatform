using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Planet.Dashboard.GitHubEventProcessor
{
	class GitHubUserData
	{
		public string UserName { get; set; }
		public IList<Event> Events { get; set; }
		/// <summary>
		/// Returns the number of creation events
		/// </summary>
		/// <returns></returns>
		public int GetCreateEventCount()
		{
			return GetCount(EventType.CreateEvent);
		}
		/// <summary>
		/// Returns the number of push events (commits)
		/// </summary>
		/// <returns></returns>
		public int GetPushEventCount()
		{
			return GetCount(EventType.PushEvent);
		}
		/// <summary>
		/// Returns the number of commits
		/// </summary>
		/// <returns></returns>
		public int GetNumberOfCommits()
		{
			int count = 0;
			foreach(Event e in GetEventsOfType(EventType.PushEvent))
			{
				count += (e.payload as PushEventPayload).size;
			}
			return count;
		}
		/// <summary>
		/// Returns the number of pull request events
		/// </summary>
		/// <returns></returns>
		public int GetPullRequestEventCount()
		{
			return GetCount(EventType.PullRequestEvent);
		}

		/// <summary>
		/// Returns numbers of days of active engagement
		/// </summary>
		/// <returns></returns>
		public int GetDaysActive()
		{
			return GetEventsGroupedByDate().Count();
		}

		/// <summary>
		/// Returns event frequency as a single number
		/// </summary>
		/// <returns></returns>
		public int GetEventFrequency()
		{
			// $todo come up with a better heuristic than this

			int eventFrequency = 0;
			for(int i = 0; i < (int)EventType.Max; ++i)
			{
				eventFrequency += GetCount((EventType)i);
			}

			return eventFrequency;
		}

		/// <summary>
		/// Returns number of commits per day
		/// </summary>
		/// <returns></returns>
		public double GetVelocity()
		{		
			double velocity = 0;
			double numDays = 0;

			foreach (IGrouping<string, Event> group in GetEventsOfTypeGroupedByDate(EventType.PushEvent))
			{
				++numDays;
				velocity += group.Count();
			}

			return velocity / numDays;
		}
		
		/// <summary>
		/// Returns the ratio of closed pull requests to total
		/// </summary>
		public double GetPullConversionRate()
		{
			int totalRequests = GetPullRequestEventCount();
			int closedRequests = GetEventsOfType(EventType.PullRequestEvent).Where(e => (e.payload as PullRequestEventPayload).action == State.closed).Count();

			return (double)closedRequests / (double)totalRequests;
		}

		/// <summary>
		/// Returns total lines of code contributed
		/// </summary>
		/// <returns></returns>
		public int GetTotalLinesOfCode()
		{
			// $todo
			return 0;
		}

		private int GetCount(EventType eventType)
		{
			return Events.Count(e => e.type == eventType);
		}
		private IList<Event> GetEventsOfType(EventType eventType)
		{
			return Events.Where(e => e.type == eventType).ToList();
		}
		private IEnumerable<IGrouping<string, Event>> GetEventsGroupedByDate()
		{
			return Events.GroupBy(e => e.created_at.ToShortDateString());
		}

		private IEnumerable<IGrouping<string,Event>> GetEventsOfTypeGroupedByDate(EventType eventType)
		{
			return Events.Where(e => e.type == eventType).GroupBy(e => e.created_at.ToShortDateString());
		}
	}
}
