using Microsoft.Xrm.Sdk.Metadata;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;



namespace AutoNumberPlugin
{
    public class Class1
    {
        var attribute = new AttributeMetadata
        {
            AttributeType = AttributeTypeCode.Integer,
            LogicalName = "new_autonumberfield",
            DisplayName = new Label("Auto Number Field", 1033), // 1033 is the English language code
            RequiredLevel = new AttributeRequiredLevelManagedProperty(AttributeRequiredLevel.None)
        };
    }
}
