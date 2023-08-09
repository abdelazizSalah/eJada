using Microsoft.Xrm.Sdk;
using Microsoft.Xrm.Sdk.Workflow;
using System;
using System.Activities;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace UpdateAccount
{
    // lazm ne3ml inheritance mn el CodeActivity Class
    /*
     * w da 3bara 3n abstract class, gowah function esmha Executue lazm ne3mlha override. 
     */
    public class UpdatePhone : CodeActivity
    {
        // lazm te3ml signature lel class bta3k
        /*
         * ehna gowa el dynamics nfso bndho 3leh, fa brbto be action aw work 
         * Hytl3lk file esmo dll file.
         * 
         * CodeActivityContext da el bigClass eelly gowah baa kol el el services aw el contxt w keda. 
         */
        protected override void Execute(CodeActivityContext context)
        {
            // de btgebly el parameters elly mwgoda fl system w2t ma get andh 3la el workflow. 
            IWorkflowContext workflowContext = context.GetExtension<IWorkflowContext>();

            // how to get the organization service? 
            // fe haga esmha IOrganizationServiceFactory, fa da by5leene a2dr andh 3la el servicies de. 
            IOrganizationServiceFactory serviceFactory = context.GetExtension<IOrganizationServiceFactory>();

            // we want to connect to the service.
            IOrganizationService service = serviceFactory.CreateOrganizationService(workflowContext.UserId);


            // da object bst5dmo 34an a2dr a3ml tracing lel objects akny b3ml cout w keda 34an a3ml debugging. 
            ITracingService tracingService = context.GetExtension<ITracingService>();

            // da 3bara 3n el id bta3 el record elly ndh el workflow da. 
            Guid recordId = workflowContext.PrimaryEntityId;

            // fa keda akny b2olo cout record ID. 
            tracingService.Trace("recordId: " + recordId); 

            // mehtag kman a3rf ana fe anhy entity. 
            string entityName = workflowContext.PrimaryEntityName;
            tracingService.Trace("entity Name: " + entityName);
             


            // to be able to retrieve all the record data 
            /*
             * we use a function called Retrieve which exists in the service we have extracted from the service factory
             * it takes 3 parameters:
             *  1. Entity Name
             *  2. Record ID
             *  3. ColumnSet -> they are the name of the columns that we want to retrieve. 
             * it exists inside the Microsoft Xrm Sdk Query library.
             */
            Entity accountRecord = service.Retrieve(entityName, recordId,new Microsoft.Xrm.Sdk.Query.ColumnSet("name", "telephone1") );
            
            // after we have retrieved the entity, it is like a map, we start accessing the needed attributes using 
            // GetAttributeValue function, which is a template function and we send to it the data  type of each element we want to recieve. 
            string accountName = accountRecord.GetAttributeValue<string>("name");
            tracingService.Trace("Account Name: " + accountName);

            string phone = accountRecord.GetAttributeValue<string>("telephone1");
            tracingService.Trace("Phone Number : " + phone);


            // before we update, we  need to construct the row that we want to update the data with
            Entity updatedAccount = new Entity(entityName, recordId); // lazm wnta bt3ml new entity, tb3t el esm bta el entity elly enta htshtghl 3leha w kman teb3t el id bta3ha. 
            updatedAccount["telephone1"] =  "01153705735";
            // updating the records 
            service.Update(updatedAccount);

            phone = accountRecord.GetAttributeValue<string>("telephone1");
            tracingService.Trace("The new Phone Number : " + phone);
            tracingService.Trace("The Record Should be updated");


        }
    }
}
