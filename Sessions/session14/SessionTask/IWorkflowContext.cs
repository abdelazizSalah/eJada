using System;

namespace SessionTask
{
    internal interface IWorkflowContext
    {
        Guid PrimaryEntityId { get; }
        string PrimaryEntityName { get; }
        object UserId { get; }
    }
}