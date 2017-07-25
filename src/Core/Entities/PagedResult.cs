// TODO: Copyright

using System.Collections.Generic;

namespace Planet.Dashboard.Rewards.Core.Entities
{
    /// <summary>
    /// Contains information to read through a collection of partitioned entry
    /// </summary>
    public class PagedResult<T> where T : PartitionedEntry
    {
        public string Cursor
        {
            get;
            set;
        }

        public bool More
        {
            get
            {
                return !string.IsNullOrWhiteSpace(this.Cursor);
            }
        }

        public IList<T> Result
        {
            get;
            set;
        }
    }
}
