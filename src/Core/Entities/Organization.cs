// TODO: Copyright

namespace Planet.Dashboard.Rewards.Core.Entities
{
    using System.Collections.Generic;

    /// <summary>
    /// Refer documentation for details : https://docs.google.com/document/d/1ZSCsIiMyTydRYW9p0uYF0yrWoHJ8WB9flHt9pB9NRZQ/edit
    /// </summary>
    public class Organization : Entity
    {
        public string Name
        {
            get;
            set;
        }

        public override string PartitionId
        {
            get
            {
                return this.id;
            }
            set
            {
            }
        }

        public override EntityType EntityType
        {
            get
            {
                return EntityType.Organization;
            }
            set
            {
            }            
        }

        public IList<CauseEnrolled> Causes
        {
            get;
            set;
        }
		
		public string AddressStreet
		{
			get;
			set;
		}
		public string AddressState
		{
			get;
			set;
		}
		public int AddressZip
		{
			get;
			set;
		}
		public double Currency 
		{
			get;
			set;
		}
		
		public bool IsActive
		{
			get;
			set;
		}
    }
}
