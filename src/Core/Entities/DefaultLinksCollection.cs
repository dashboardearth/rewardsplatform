// TODO: Copyright

namespace Planet.Dashboard.Rewards.Core.Entities
{
    /// <summary>
    /// Refer documentation for details : https://docs.google.com/document/d/1ZSCsIiMyTydRYW9p0uYF0yrWoHJ8WB9flHt9pB9NRZQ/edit
    /// </summary>
    public class DefaultLinksCollection<T> : LinksCollection<T> where T: Entry
    {        
        public override EntityType SourceType
        {
            get;
            set;
        }
        
        public override LinkType LinkType
        {
            get;
            set;
        }
    }
}
