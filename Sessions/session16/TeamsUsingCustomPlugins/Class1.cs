using Microsoft.Crm.Sdk.Messages;
using Microsoft.Xrm.Sdk;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Principal;
using System.Text;
using System.Threading.Tasks;

namespace Team
{
    public class CreateTeam : IPlugin
    {
        public void Execute(IServiceProvider serviceProvider)
        {
            ITracingService tracingService = serviceProvider.GetService(typeof(ITracingService)) as ITracingService;
            tracingService.Trace("Plugin Started: " + DateTime.Now);
            try
            {

                IPluginExecutionContext executionContext = serviceProvider.GetService(typeof(IPluginExecutionContext)) as IPluginExecutionContext;
                IOrganizationServiceFactory serviceFactory = serviceProvider.GetService(typeof(IOrganizationServiceFactory)) as IOrganizationServiceFactory;
                IOrganizationService service = serviceFactory.CreateOrganizationService(executionContext.UserId);
                Entity account = (Entity)executionContext.InputParameters["Target"];
                string accountName = (string)account.Attributes["name"];
                tracingService.Trace("Account Name : " + accountName);
                Entity team = new Entity("team");
                team["name"] = accountName;
                team["teamtype"] = new OptionSetValue(0);
                team["businessunitid"] = new EntityReference("businessunit", new Guid("0947AADC-3233-EE11-BDF5-0022489FD233"));
                Guid teamId = service.Create(team);
                tracingService.Trace("Team Id : " + teamId);

                //// Add myself as a member to this newly created team
                Guid userId = executionContext.UserId; 
                Guid[] members = new[] { userId };
                AddMembersTeamRequest addRequest = new AddMembersTeamRequest
                {
                    TeamId = teamId,
                    MemberIds = members
                };
                service.Execute(addRequest);

                // Add Security Role to the team
                Guid securityRoleId = new Guid("E57BFF35-58B4-4725-AEE2-40FB18F4C8BD");
                service.Associate("team", teamId, new Relationship("teamroles_association"), new EntityReferenceCollection() { new EntityReference("role", securityRoleId) });
            }
            catch (Exception ex)
            {
                tracingService.Trace("Exception: " + ex.Message);
            }
        }
    }
}

//IPluginExecutionContext executionContext = serviceProvider.GetService(typeof(IPluginExecutionContext)) as IPluginExecutionContext;
//IOrganizationServiceFactory serviceFactory = serviceProvider.GetService(typeof(IOrganizationServiceFactory)) as IOrganizationServiceFactory;
//IOrganizationService service = serviceFactory.CreateOrganizationService(executionContext.UserId);
//Entity account = (Entity)executionContext.InputParameters["Target"];
//string accountName = (string)account.Attributes["name"];
//tracingService.Trace("Account Name : " + accountName);
//Entity team = new Entity("team");
//team["name"] = accountName;
//team["teamtype"] = new OptionSetValue(0);
//team["businessunitid"] = new EntityReference("businessunit", new Guid("B4E59824-8F22-EE11-9CBD-000D3ADF7B5C"));
//Guid teamId = service.Create(team);
//tracingService.Trace("Team Id : " + teamId);