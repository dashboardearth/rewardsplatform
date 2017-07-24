// TODO: Add copyright header

namespace Planet.Dashboard.Rewards.Core
{
    using Microsoft.Azure.Documents;
    using Microsoft.Azure.Documents.Client;
    using Core = Planet.Dashboard.Rewards.Core;
    using System;
    using System.Threading.Tasks;
    using System.Net;


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

        public async Task<T> GetAsync<T>(string id, string partitionId) where T : Entities.Document
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

        public async Task Create<T>(T data) where T : Entities.Document
        {
            Guard.AgainstNull(nameof(data), data);
            Guard.AgainstNullOrWhitespace(nameof(data.PartitionId), data.PartitionId);
            Guard.AgainstNullOrWhitespace(nameof(data.Id), data.Id);

            await this.EnsureInitialized();

            string collectionLink = UriFactory.CreateDocumentCollectionUri(this.databaseName, this.collectionName).ToString();
            ResourceResponse<Document> result =
                await this.client.CreateDocumentAsync(
                    collectionLink,
                    data,
                    new RequestOptions() { PartitionKey = new PartitionKey(data.PartitionId) });            
        }

        public async Task Update<T>(T data) where T : Entities.Document
        {
            Guard.AgainstNull(nameof(data), data);
            Guard.AgainstNullOrWhitespace(nameof(data.PartitionId), data.PartitionId);
            Guard.AgainstNullOrWhitespace(nameof(data.Id), data.Id);

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
    }
}
