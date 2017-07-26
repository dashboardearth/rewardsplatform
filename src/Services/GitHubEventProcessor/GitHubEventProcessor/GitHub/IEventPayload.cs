using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Linq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Planet.Dashboard.GitHubEventProcessor
{
	public class IEventPayload
	{
	}

	class EventPayloadConverter : CustomCreationConverter<IEventPayload>
	{
		public override IEventPayload Create(Type objectType)
		{
			return new IEventPayload();
		}

		public override object ReadJson(JsonReader reader, Type objectType, object existingValue, JsonSerializer serializer)
		{
			var jsonObject = JObject.Load(reader);

			JToken jToken;
			if (jsonObject.TryGetValue("push_id", out jToken))
			{
				return JsonConvert.DeserializeObject<PushEventPayload>(jsonObject.ToString());
			}
			else if (jsonObject.TryGetValue("pull_request", out jToken))
			{
				return JsonConvert.DeserializeObject<PullRequestEventPayload>(jsonObject.ToString());
			}
			else if (jsonObject.TryGetValue("forkee", out jToken))
			{
				return JsonConvert.DeserializeObject<ForkEventPayload>(jsonObject.ToString());
			}
			else if (jsonObject.TryGetValue("pusher_type", out jToken))
			{
				return JsonConvert.DeserializeObject<CreateEventPayload>(jsonObject.ToString());
			}
			else if (jsonObject.TryGetValue("issue", out jToken))
			{
				return JsonConvert.DeserializeObject<IssueCommentEventPayload>(jsonObject.ToString());
			}

			return null;
		}
	}
}
