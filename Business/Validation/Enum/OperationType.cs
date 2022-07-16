using System.ComponentModel;

namespace Business.Validation.Enum
{
    public enum OperationType
    {
        Default,
        [Description("Insert")]
        Insert,
        Update,
        Delete,
        Custom
    }
}
