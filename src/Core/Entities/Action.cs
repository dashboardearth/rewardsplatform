// TODO: Copyright

using System;

namespace Planet.Dashboard.Rewards.Core.Entities
{
    /// <summary>
    /// Refer documentation for details : https://docs.google.com/document/d/1ZSCsIiMyTydRYW9p0uYF0yrWoHJ8WB9flHt9pB9NRZQ/edit
    /// </summary>
    public class Action : Entity
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
                return EntityType.Action;
            }
            set
            {
            }
        }

        public string OrganizationId
        {
            get;
            set;
        }
		
		public string Name
		{
			get;
			set;
		}
		
		public string Description
		{
			get;
			set;
		}
		
		public string CreatedByUser
		{
			get;
			set;
		}
		
		public DateTime CreatedDate
		{
			get;
			set;
		}
		
		public DateTime ModifiedDate
		{
			get;
			set;
		}
		
		public string ApprovedBy
		{
			get;
			set;
		}
		
		public DateTime ApprovedDate
		{
			get;
			set;
		}
		
		public double PointsGranted
		{
			get;
			set;
		}
		
		public int InvolvementLevel
		{
			get;
			set;
		}
		
		public bool Enabled
		{
			get;
			set;
		}
		
		public string Category
		{
			get;
			set;
		}
		
		public bool Repeatable
		{
			get;
			set;
		}
		
		public int CompletionLimitDay
		{
			get;
			set;
		}
		
		public int CompletionLimitMonth
		{
			get;
			set;
		}
		
		public int CompletionLimitYear
		{
			get;
			set;
		}
    }
}
