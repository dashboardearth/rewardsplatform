// TODO: Copyright

namespace Planet.Dashboard.Rewards.Core.Entities
{
    /// <summary>
    /// Refer documentation for details : https://docs.google.com/document/d/1ZSCsIiMyTydRYW9p0uYF0yrWoHJ8WB9flHt9pB9NRZQ/edit
    /// </summary>
    public class Beacon : Entity
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
                return EntityType.Beacon;
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
    }
}
