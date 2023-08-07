using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Workflow;
using System;
using System.Activities;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SessionTask
{
    public class Class1 : CodeActivity
    {

        protected override void Execute(CodeActivityContext context)
        {
            //first we need to get the workflow context
            IWorkflowContext workflowContext = context.GetExtension<IWorkflowContext>();

            // now we need to access the services factory
            IOrganizationServiceFactory serviceFactory = context.GetExtension<IOrganizationServiceFactory>();

            // now we have to instantiate a service. 
            IOrganizationService service = serviceFactory.CreateOrganizationService((Guid?)workflowContext.UserId);

            // Creating an object for tracing
            ITracingService tracingService = context.GetExtension<ITracingService>(); 

            // then we need the name and the id of the calling entity. 
            Guid recordId = workflowContext.PrimaryEntityId;
            string entityName = workflowContext.PrimaryEntityName;


            // now we need to extract the data of the record. 
            Entity entityRecord = service.Retrieve(entityName, recordId, new Microsoft.Xrm.Sdk.Query.ColumnSet("contact_customer_accounts"));

            // extracting the value inside that field.
            Entity[] contacts = entityRecord.GetAttributeValue<Entity[]>("contact_customer_accounts");
            foreach (Entity contact in contacts)
            {
                string newFax = contact.GetAttributeValue<string>("fax");

                // then we have to make update for the records. 
                Dictionary<string,Entity> updatedRecords = new Dictionary<string,Entity>();
                updatedRecords["contact_customer_accounts"]["fax"] = newFax;
                // update the record
                service.Update(updatedRecords["contact_customer_accounts"]);
            }




            throw new NotImplementedException();
        }
    }
}
