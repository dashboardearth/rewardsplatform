// TODO: Copyright

namespace Planet.Dashboard.Rewards.Core.Entities
{
    /// <summary>
    /// Represents an entity that will be persisted in some database.
    /// </summary>
    public abstract class Entity
    {
        /// <summary>
        /// Value for this property will be used to horizontally partition data for this entity.
        /// </summary>
        public abstract string PartitionId { get; set; }

        /// <summary>
        /// Unique identifier of the entity.
        /// </summary>
        public string Id { get; set; }
        
        /// <summary>
        /// Type of entity.
        /// </summary>
        public abstract EntityType EntityType { get; set; }
    }
}
