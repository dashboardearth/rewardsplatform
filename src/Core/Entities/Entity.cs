// TODO: Copyright

using Microsoft.Azure.Documents;

namespace Planet.Dashboard.Rewards.Core.Entities
{
    /// <summary>
    /// Represents an entity that will be persisted in some database.
    /// </summary>
    public abstract class Entity : Document
    {   
        /// <summary>
        /// Type of entity.
        /// </summary>
        public abstract EntityType EntityType { get; set; }
    }
}
