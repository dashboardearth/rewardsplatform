// TODO: Copyright

namespace Planet.Dashboard.Rewards.Core.Entities
{
    /// <summary>
    /// Refer documentation for details : https://docs.google.com/document/d/1ZSCsIiMyTydRYW9p0uYF0yrWoHJ8WB9flHt9pB9NRZQ/edit
    /// </summary>
    public class Cause : Entity
    {
        public override string PartitionId
        {
            get
            {
                return this.EntityType.ToString();
            }
            set
            {                
            }
        }

        public override EntityType EntityType
        {
            get
            {
                return EntityType.Cause;
            }
            set
            {
            }
        }

        public string Name
        {
            get;
            set;
        }
    }
}
