// TODO: Copyright

namespace Planet.Dashboard.Rewards.Core.Entities
{
    using System;
    using System.Collections.Generic;
    using System.Linq;

    /// <summary>
    /// Represents a collection of links between a source entity and one or more entities.
    /// </summary>
    public abstract class LinksCollection<T> : PartitionedEntry where T: Entry
    {
        /// <summary>
        /// Value for this property will be used to horizontally partition data for this link.
        /// This ensures that links for a particular entity will be placed in the same partition 
        /// for effecient read.
        /// </summary>
        public override string PartitionId
        {
            get
            {
                return this.SourceId;
            }
            set
            {
            }
        }

        /// <summary>
        /// Id of source entity (eg: <see cref="User.Id"/> for <see cref="LinkType.UserEvent"/> link.
        /// </summary>
        public string SourceId
        {
            get;
            set;
        }

        /// <summary>
        /// <see cref="EntityType"/> of source entity.(eg: <see cref="EntityType.User"/> for <see cref="LinkType.UserEvent"/>
        /// </summary>
        public abstract EntityType SourceType
        {
            get;
            set;
        }
        
        /// <summary>
        /// Type of link.
        /// </summary>
        public abstract LinkType LinkType
        {
            get;
            set;
        }

        /// <summary>
        /// Contains information about other entities that the source entity is linked to.
        /// </summary>
        public IList<T> TargetEntities
        {
            get;
            set;
        }

        /// <summary>
        /// We need to store many target entities together to enable faster query. However we cannot store millions of links together as 
        /// we will hit limits loading inmemory or persisting in database. Hence we will split links into smaller containers and a sequence 
        /// number will enable paging links in order they were created.
        /// </summary>
        public int SequenceNumber
        {
            get;
            set;
        }

        /// <summary>
        /// Identifies if this collection is full. 
        /// For a given <see cref="LinksCollection{T}.LinkType"/> and <see cref="LinksCollection{T}.SourceId"/>, there will typically be only 
        /// collection marked as "IsFull=False"
        /// </summary>
        public bool IsFull
        {
            get;
            set;
        }

        public static LinksCollection<U> Create<U>(
            string sourceId, 
            string partitionId, 
            EntityType sourceType, 
            LinkType linkType,
            IEnumerable<U> links,
            int sequenceNumber = 0) where U : Entry
        {
            DefaultLinksCollection<U> result = new DefaultLinksCollection<U>();            

            result.LinkType = linkType;
            result.SourceId = sourceId;
            result.SourceType = sourceType;
            result.PartitionId = partitionId;
            result.SequenceNumber = sequenceNumber;
            result.TargetEntities = new List<U>(links);
            return result;
        }
    }
}
