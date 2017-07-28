// TODO: Copyright

namespace Planet.Dashboard.Rewards.Core.Entities
{
    using System.Collections.Generic;

    /// <summary>
    /// Refer documentation for details : https://docs.google.com/document/d/1ZSCsIiMyTydRYW9p0uYF0yrWoHJ8WB9flHt9pB9NRZQ/edit
    /// </summary>
    public class User : Entity
    {
        public string GivenName
        {
            get;
            set;
        }

        public string LastName
        {
            get;
            set;
        }
		
		public string UserName
		{
			get;
			set;
		}
		
		public string HashPassword
		{
			get;
			set;
		}

        public override string PartitionId
        {
            get
            {
                return this.id;
            }

           set
            {
            }
        }

        public override EntityType EntityType
        {
            get
            {
                return EntityType.User;
            }
            set
            {
            }
        }

        public IList<CauseEnrolled> Causes
        {
            get;
            set;
        }

		public string HaloUrl
		{
			get;
			set;
		}

		/// <summary>
		/// User can have many ids in different system. (eg: GitHub Id, Facebook id etc). They will have a unique id in 
		/// </summary>
		public IList<string> AlternateIds
        {
            get;
            set;
        }
		
		public int Experience
		{
			get;
			set;
		}
		
		//Maybe not needed; can compute level from exp
		public int Level
		{
			get;
			set;
		}
		
		public double Currency
		{
			get;
			set;
		}
		
		public int LoginStreak
		{
			get;
			set;
		}
		public double Size
		{
			get;
			set;
		}
		public double Speed
		{
			get;
			set;
		}
		public double Brightness
		{
			get;
			set;
		}
		public double Complexity
		{
			get;
			set;
		}
		public double Color
		{
			get;
			set;
		}
		public double Wobble
		{
			get;
			set;
		}
		public double ColorCenter
		{
			get;
			set;
		}
		public double ColorCenterRatio
		{
			get;
			set;
		}
		public int WaveCount
		{
			get;
			set;
		}
		public double HighlightRing
		{
			get;
			set;
		}
		public int CreateEventCount
		{
			get;
			set;
		}
		public int PushEventCount
		{
			get;
			set;
		}
		public int CommitCount
		{
			get;
			set;
		}
		public int PullRequestCount
		{
			get;
			set;
		}
		public int DaysActive
		{
			get;
			set;
		}
		public double ActionVelocity
		{
			get;
			set;
		}
		public double PullConversionRate
		{
			get;
			set;
		}
	}
}
