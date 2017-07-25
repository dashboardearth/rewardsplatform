// TODO: Copyright

using System;

namespace Planet.Dashboard.Rewards.Core.Entities
{
    /// <summary>
    /// Refer documentation for details : https://docs.google.com/document/d/1ZSCsIiMyTydRYW9p0uYF0yrWoHJ8WB9flHt9pB9NRZQ/edit
    /// </summary>
    public class Event : Entity
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
                return EntityType.Event;
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
		
		public string CreatedBy
		{
			get;
			set;
		}
		
		public DateTime CreatedDate
		{
			get;
			set;
		}
		
		public string ApprovedBy
		{
			get;
			set;
		}
		
		public DateTime ApprovedDated
		{
			get;
			set;
		}
		
		public bool OpenEnded 
		{
			get;
			set;
		}
		
		public DateTime StartDateTime
		{
			get;
			set;
		}
		
		public DateTime EndDateTime
		{
			get;
			set;
		}
		
		public bool RegistrationRequired
		{
			get;
			set;
		}
		
    }
}
