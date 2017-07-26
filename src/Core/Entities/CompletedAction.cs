// TODO: Copyright

namespace Planet.Dashboard.Rewards.Core.Entities
{
    /// <summary>
    /// Refer documentation for details : https://docs.google.com/document/d/1ZSCsIiMyTydRYW9p0uYF0yrWoHJ8WB9flHt9pB9NRZQ/edit
    /// </summary>
    public class CompletedAction : Entity
    {
        public override string PartitionId
        {
            get
            {
                return this.OrganizationId;
            }

            set
            {
            }
        }

        public override EntityType EntityType
        {
            get
            {
                return EntityType.CompletedAction;
            }
            set
            {
            }
        }
		
		public string CompletionId
		{
			get;
			set;
		}

        public string OrganizationId
        {
            get;
            set;
        }
		
		public string ActionId
		{
			get;
			set;
		}
		
		public string EventBeaconId
		{
			get;
			set;
		}
		
		public int ExperienceGained
		{
			get;
			set;
		}
		
		public double CurrencyGained
		{
			get;
			set;
		}
		
		public DateTime DateTimeCompleted
		{
			get;
			set;
		}
		
		public string Category
		{
			get;
			set;
		}
    }
}
