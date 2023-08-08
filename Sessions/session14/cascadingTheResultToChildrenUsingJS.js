// function CascadeRelatedRecords(executionContext) {
//     debugger;

//     // getting the form context 
//     var formContext = executionContext.getFormContext();

//     // get the fax of that account
//     var fax = formContext.getAttribute("fax").getValue();

//     // iterate over all the contacts which are related to that account
//     // and set that fax to their fax 
//     // formContext.getAttribute("contact_customer_accounts").getValue().forEach(function (contact) {
//     //     contact.fax = fax;
//     // });


//     // iterate over all the activities which are related to the case and set the description to the case description
//     formContext.getAttribute("Incident_Phonecalls").getValue().forEach(function (activity) {
//         activity.description = formContext.getAttribute("description").getValue();
//         // save the changes
//         formContext.getAttribute("contact_customer_accounts").setValue(contact);
//     }
//     );

// }


function updateFax(executionContext) {
    debugger;
    // get the execution context from the form 
    var formContext = executionContext.getFormContext();

    // now lets get the id of the company   
    var accountId = formContext.data.entity.getId().replace("{", "").replace("}", "");

    // try to access the fax 
    var accountFax = formContext.getAttribute("fax").getValue();

    // now we need to create a  map for the data 
    var data = { fax: accountFax };

    // lets start using the webAPI. 
    Xrm.WebApi.retrieveMultipleRecords('contact', "?$select=contactid&$filter=_parentcustomerid_value eq " + accountId).then(
        function success(result) {
            for (var i = 0; i < result.entities.length; i++) {
                // now we are iterating over all the existing contacts. 
                var contact = result.entities[i];

                // we have to send a new request to update its fax. 
                Xrm.WebApi.updateRecord("contact", contact.contactid, data).then(
                    function success(result) {
                        console.log("Fax updated successfully");
                    },
                    function (error) {
                        console.log(error.message);
                    }
                );
            }
        }
    );
}