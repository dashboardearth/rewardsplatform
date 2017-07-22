// TODO: Copyright

namespace Planet.Dashboard.Rewards.Core.Entities
{
    /// <summary>
    /// Refer documentation for details : https://docs.google.com/document/d/1ZSCsIiMyTydRYW9p0uYF0yrWoHJ8WB9flHt9pB9NRZQ/edit
    /// Note this type is meant to be embedded in other entites (ex: <see cref="User"/> )
    /// </summary>
    public class CauseEnrolled
    {
        public string Id
        {
            get;
            set;
        }
        
        public string Name
        {
            get;
            set;
        }
    }
}
