// TODO: Copyright

namespace Planet.Dashboard.Rewards.Core.Entities
{
    /// <summary>
    /// Describes the type of relationship. 
    /// Most relationship will be duplicated to allow partitioning by multiple foreign keys.
    /// Ex: We should be able to effeciently retrieve all <see cref="User"/> for an <see cref="Organization"/> and vice versa,
    /// and this would require storing link information twice, once with <see cref="User.Id"/> as partitionId and second
    /// with <see cref="Organization.Id"/> as partitionId.
    /// </summary>
    public enum LinkType
    {
        Affiliation_UserOrganization,
        Affiliation_OrganizationUser,

        UserEvent,
        EventUser,

        CompletedAction_UserAction,
        CompletedAction_ActionUser,

        BeaconAction,
        ActionBeacon,

        EventBeacon,
        BeaconEvent
    }
}
