using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace githubpulluserevents
{
	class Payload
	{
		public int push_id { get; set; }
		public int size { get; set; }
		public int distinct_size { get; set; }
		[JsonProperty(PropertyName = "ref")]
		public string refs { get; set; }
		public string head { get; set; }
		public string before { get; set; }
		public IList<Commit> Commits { get; set; }
	}
}
