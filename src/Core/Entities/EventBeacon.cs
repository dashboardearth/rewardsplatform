// TODO: Copyright

namespace Planet.Dashboard.Rewards.Core.Entities
{
    using System.Collections.Generic;

    /// <summary>
    /// Refer documentation for details : https://docs.google.com/document/d/1ZSCsIiMyTydRYW9p0uYF0yrWoHJ8WB9flHt9pB9NRZQ/edit
    /// </summary>
    public class EventBeacon : Entity
    {
         public override string PartitionId
        {
            get
            {
                return this.EventId;
            }
            set
            {
            }
        }

        public override EntityType EntityType
        {
            get
            {
                return EntityType.EventBeacon;
            }
            set
            {
            }
        }
		
		public string EventId
		{
			get;
			set;
		}

        public string BeaconId
        {
            get;
            set;
        }
		
		public string EventBeaconId
		{
			get;
			set;
		}
    }
}




























