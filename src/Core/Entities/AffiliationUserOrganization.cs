// TODO: Copyright

namespace Planet.Dashboard.Rewards.Core.Entities
{
    /// <summary>
    /// Refer documentation for details : https://docs.google.com/document/d/1ZSCsIiMyTydRYW9p0uYF0yrWoHJ8WB9flHt9pB9NRZQ/edit
    /// </summary>
    public class AffiliationUserOrganization : LinksCollection<Affiilation>
    {        
        public override EntityType SourceType
        {
            get
            {
                return EntityType.User;
            }
            set
            {
            }
        }
        
        public override LinkType LinkType
        {
            get
            {
                return LinkType.Affiliation_UserOrganization;
            }
            set
            {
            }
        }
    }
}
