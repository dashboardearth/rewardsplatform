// TODO: Copyright

using Microsoft.Azure.Documents;

namespace Planet.Dashboard.Rewards.Core.Entities
{
    /// <summary>
    /// Represents an entry that will be persisted in some database.
    /// </summary>
    public abstract class Entry
    {
        /// <summary>
        /// Unique identifier of the entry.
        /// </summary>
        public string id { get; set; }
    }
}
