// TODO: Add copyright header

namespace Planet.Dashboard.Rewards.Core
{
    using System;

    public class Guard
    {
        public static void AgainstNull(string parameterName, object parameter)
        {
            if (parameter == null)
            {
                throw new ArgumentNullException(parameterName);
            }
        }
        public static void AgainstNullOrWhitespace(string parameterName, string parameter)
        {
            if (string.IsNullOrWhiteSpace(parameter))
            {
                throw new ArgumentException(parameterName);
            }
        }
    }
}
