// TODO: Copyright

namespace Planet.Dashboard.Rewards.Core.Entities
{
    using System.Collections.Generic;

    /// <summary>
    /// Refer documentation for details : https://docs.google.com/document/d/1ZSCsIiMyTydRYW9p0uYF0yrWoHJ8WB9flHt9pB9NRZQ/edit
    /// </summary>
    public class BeaconAction : Entity
    {
         public override string PartitionId
        {
            get
            {
                return this.BeaconId;
            }
            set
            {
            }
        }

        public override EntityType EntityType
        {
            get
            {
                return EntityType.BeaconAction;
            }
            set
            {
            }
        }

        public string BeaconId
        {
            get;
            set;
        }
		
		public string ActionId
		{
			get;
			set;
		}
		
		public string BeaconActionId
		{
			get;
			set;
		}
    }
}




























