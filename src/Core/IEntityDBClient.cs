// TODO: Add copyright header

namespace Planet.Dashboard.Rewards.Core
{
    using Planet.Dashboard.Rewards.Core.Entities;
    using System;
    using System.Collections.Generic;
    using System.Linq.Expressions;
    using System.Threading.Tasks;

    /// <summary>
    /// Client to interact with entity database (ex: Azure cosmos DB)
    /// </summary>
    public interface IEntityDBClient
    {
        Task<T> GetAsync<T>(string id, string partitionId) where T: PartitionedEntry;

        Task<T> Create<T>(T data) where T : PartitionedEntry;
        Task Update<T>(T data) where T : PartitionedEntry;
        Task Delete(string id, string partitionId);

        Task AddLinks<T>(string sourceId, EntityType sourceType, LinkType linkType, string partitionId, IEnumerable<T> links) where T : Entry;

        Task RemoveLink<T>(string sourceId, EntityType sourceType, LinkType linkType, string partitionId, string linkId) where T : Entry;

        Task<PagedResult<T>> ListAsync<T>(Expression<Func<T, bool>> filter, string cursor, bool crossPartition = false) where T : PartitionedEntry;
    }
}
