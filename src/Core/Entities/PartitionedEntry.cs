// TODO: Copyright

namespace Planet.Dashboard.Rewards.Core.Entities
{
    /// <summary>
    /// Represents a partitioned entry that will be persisted in some database.
    /// </summary>
    public abstract class PartitionedEntry : Entry
    {
        /// <summary>
        /// Value for this property will be used to horizontally partition data for this entity.
        /// </summary>
        public abstract string PartitionId { get; set; }

    }
}
