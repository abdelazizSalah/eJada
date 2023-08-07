using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Tooling.Connector;
using Microsoft.Xrm.Sdk.Workflow;

namespace FirstConsoleApp
{
    class Program
    {
        static void Main(string[] args)
        {
            CrmServiceClient conn = new CrmServiceClient("AuthType=Office365;Url=http://org5ec7be91.crm4.dynamics.com;Username=emansalah19144@gmail.com;Password=3omarMeemee@123");
            var service = (IOrganizationService)conn.OrganizationServiceProxy;
            string relatedEntityName = "new_employee";

            Entity companyRecord = service.Retrieve("new_company", new Guid("{8B09FCCE-5134-EE11-BDF4-000D3ADEC133}"), new Microsoft.Xrm.Sdk.Query.ColumnSet( "new_email")); 






        }
    }
}
