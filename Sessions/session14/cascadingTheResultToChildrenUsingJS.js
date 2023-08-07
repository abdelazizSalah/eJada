function CascadeRelatedRecords(executionContext) {
    debugger;

    // getting the form context 
    var formContext = executionContext.getFormContext();

    // get the fax of that account
    var fax = formContext.getAttribute("fax").getValue();

    // iterate over all the contacts which are related to that account
    // and set that fax to their fax 
    // formContext.getAttribute("contact_customer_accounts").getValue().forEach(function (contact) {
    //     contact.fax = fax;
    // });


    // iterate over all the activities which are related to the case and set the description to the case description
    formContext.getAttribute("Incident_Phonecalls").getValue().forEach(function (activity) {
        activity.description = formContext.getAttribute("description").getValue();
        // save the changes
        formContext.getAttribute("contact_customer_accounts").setValue(contact);
    }
    );

}