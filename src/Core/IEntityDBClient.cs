// TODO: Add copyright header

namespace Planet.Dashboard.Rewards.Core
{
    using Planet.Dashboard.Rewards.Core.Entities;
    using System.Threading.Tasks;

    /// <summary>
    /// Client to interact with entity database (ex: Azure cosmos DB)
    /// </summary>
    public interface IEntityDBClient
    {
        Task<T> GetAsync<T>(string id, string partitionId) where T: Document;

        Task Create<T>(T data) where T : Document;
        Task Update<T>(T data) where T : Document;
        Task Delete(string id, string partitionId);
    }
}
