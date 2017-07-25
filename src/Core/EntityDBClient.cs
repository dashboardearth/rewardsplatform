// TODO: Add copyright header

namespace Planet.Dashboard.Rewards.Core
{
    using Microsoft.Azure.Documents;
    using Microsoft.Azure.Documents.Client;
    using Microsoft.Azure.Documents.Linq;
    using Core = Planet.Dashboard.Rewards.Core;
    using System;
    using System.Linq;
    using System.Threading.Tasks;
    using System.Net;
    using System.Collections.Generic;
    using System.Linq.Expressions;


    /// <summary>
    /// Client to interact with entity database (ex: Azure cosmos DB)
    /// </summary>
    public class EntityDBClient : IEntityDBClient
    {
        private readonly DocumentClient client;
        private bool initialized = false;
        private string databaseName;
        private string collectionName;

        public EntityDBClient(Uri endpoint, string authKey, string databaseName, string collectionName)
        {
            this.client = new DocumentClient(endpoint, authKey);
            this.databaseName = databaseName;
            this.collectionName = collectionName;    
        }

        private async Task EnsureInitialized()
        {
            if (this.initialized)
            {
                return;
            }

            Database db = new Database();
            db.Id = databaseName;

            ResourceResponse<Database> dbCreated = await this.client.CreateDatabaseIfNotExistsAsync(db);
            string databaseLink = UriFactory.CreateDatabaseUri(databaseName).ToString();

            DocumentCollection collection = new DocumentCollection();
            collection.Id = collectionName;
            collection.PartitionKey.Paths.Add("/PartitionId");

            ResourceResponse<DocumentCollection> collectionCreated = 
                await this.client.CreateDocumentCollectionIfNotExistsAsync(databaseLink, collection);

            this.initialized = true;
        }

        public async Task<T> GetAsync<T>(string id, string partitionId) where T : Entities.PartitionedEntry
        {
            Guard.AgainstNullOrWhitespace(nameof(id), id);
            Guard.AgainstNullOrWhitespace(nameof(partitionId), partitionId);

            await this.EnsureInitialized();

            string requestLink = UriFactory.CreateDocumentUri(this.databaseName, this.collectionName, id).ToString();

            try
            {
                DocumentResponse<T> result =
                    await this.client.ReadDocumentAsync<T>(
                        requestLink,
                        new RequestOptions() { PartitionKey = new PartitionKey(partitionId) });

                return result.Document;
            }
            catch (Exception exception)
            {
                DocumentClientException documentClientException = exception.GetBaseException() as DocumentClientException;
                if (documentClientException != null &&
                    documentClientException.StatusCode == HttpStatusCode.NotFound)
                {                    
                    return null;
                }

                throw;
            }
        }

        public async Task<T> Create<T>(T data) where T : Entities.PartitionedEntry
        {
            Guard.AgainstNull(nameof(data), data);
            Guard.AgainstNullOrWhitespace(nameof(data.PartitionId), data.PartitionId);
            Guard.AgainstNullOrWhitespace(nameof(data.id), data.id);

            await this.EnsureInitialized();

            string collectionLink = UriFactory.CreateDocumentCollectionUri(this.databaseName, this.collectionName).ToString();
            ResourceResponse<Document> result =
                await this.client.CreateDocumentAsync(
                    collectionLink,
                    data,
                    new RequestOptions() { PartitionKey = new PartitionKey(data.PartitionId) });

            return data;
        }

        public async Task Update<T>(T data) where T : Entities.PartitionedEntry
        {
            Guard.AgainstNull(nameof(data), data);
            Guard.AgainstNullOrWhitespace(nameof(data.PartitionId), data.PartitionId);
            Guard.AgainstNullOrWhitespace(nameof(data.id), data.id);

            await this.EnsureInitialized();

            string collectionLink = UriFactory.CreateDocumentCollectionUri(this.databaseName, this.collectionName).ToString();
            ResourceResponse<Document> result =
                await this.client.UpsertDocumentAsync(
                    collectionLink,
                    data,
                    new RequestOptions() { PartitionKey = new PartitionKey(data.PartitionId) });
        }

        public async Task Delete(string id, string partitionId)
        {
            Guard.AgainstNullOrWhitespace(nameof(id), id);
            Guard.AgainstNullOrWhitespace(nameof(partitionId), partitionId);

            await this.EnsureInitialized();

            string requestLink = UriFactory.CreateDocumentUri(this.databaseName, this.collectionName, id).ToString();
            ResourceResponse<Document> result =
                await this.client.DeleteDocumentAsync(
                    requestLink,
                    new RequestOptions() { PartitionKey = new PartitionKey(partitionId) });
        }

        public async Task AddLinks<T>(
            string sourceId, 
            Entities.EntityType sourceType, 
            Entities.LinkType linkType, 
            string partitionId, 
            IEnumerable<T> links) where T : Entities.Entry
        {
            Guard.AgainstNullOrWhitespace(nameof(sourceId), sourceId);
            Guard.AgainstNullOrWhitespace(nameof(partitionId), partitionId);

            await this.EnsureInitialized();

            string collectionLink = UriFactory.CreateDocumentCollectionUri(this.databaseName, this.collectionName).ToString();
            
            Entities.LinksCollection<T> result = this
                .client
                .CreateDocumentQuery<Entities.LinksCollection<T>>(
                    collectionLink,
                    new FeedOptions() { PartitionKey = new PartitionKey(partitionId) })
                .Where(item => item.SourceId == sourceId && item.LinkType == linkType && item.SourceType == sourceType && item.IsFull == false)
                .FirstOrDefault();

            if (result == null)
            {
                result = Entities.LinksCollection<T>.Create<T>(sourceId, partitionId, sourceType, linkType, links);
                await this.Create(result);
                return;
            }

            foreach (T link in links)
            {
                result.TargetEntities.Add(link);
            }

            await this.Update(result);

            // TODO: Check if the current page collection has exceeded collection size and create a new collection accordingly.
        }

        public async Task RemoveLink<T>(
            string sourceId,
            Entities.EntityType sourceType,
            Entities.LinkType linkType,
            string partitionId,
            string linkId) where T : Entities.Entry
        {
            Guard.AgainstNullOrWhitespace(nameof(sourceId), sourceId);
            Guard.AgainstNullOrWhitespace(nameof(partitionId), partitionId);

            await this.EnsureInitialized();

            string collectionLink = UriFactory.CreateDocumentCollectionUri(this.databaseName, this.collectionName).ToString();

            Entities.LinksCollection<T> result = this
                .client
                .CreateDocumentQuery<Entities.LinksCollection<T>>(
                    collectionLink,
                    new FeedOptions() { PartitionKey = new PartitionKey(partitionId) })
                .Where(item => item.SourceId == sourceId && item.LinkType == linkType && item.SourceType == sourceType && item.TargetEntities.Any(target => target.id == linkId))
                .FirstOrDefault();

            if (result == null)
            {
                // No such link.                
                return;
            }

            T link = result.TargetEntities.First(item => item.id == linkId);
            result.TargetEntities.Remove(link);

            await this.Update(result);            
        }

        public async Task<Entities.PagedResult<T>> ListAsync<T>(Expression<Func<T, bool>> filter, string cursor, bool crossPartition = false) where T : Entities.PartitionedEntry
        {
            string collectionLink = UriFactory.CreateDocumentCollectionUri(this.databaseName, this.collectionName).ToString();

            FeedOptions options = new FeedOptions()
            {
                EnableCrossPartitionQuery = crossPartition,
                RequestContinuation = cursor
            };

            IDocumentQuery<T> query = this
                .client
                .CreateDocumentQuery<T>(
                    collectionLink,
                    options)
                .Where(filter)
                .AsDocumentQuery<T>();

            FeedResponse<T> response = await query.ExecuteNextAsync<T>();

            Entities.PagedResult<T> result = new Entities.PagedResult<T>();
            result.Cursor = response.ResponseContinuation;
            result.Result = new List<T>(response.Count);

            foreach(T responseItem in response.ToList())
            {
                result.Result.Add(responseItem);
            }

            return result;
        }
    }
}
