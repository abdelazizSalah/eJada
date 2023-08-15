function setApprovalDueDate(executionContext) {
    debugger;
    var formContext = executionContext.getFormContext();

    // get the current date 
    var currentDate = new Date();

    // set the Approval due date with the current month
    formContext.getAttribute("eja_approvalduedate").setValue("26-" + currentDate.getMonth() + "-" + currentDate.getFullYear());

    // save the form
    formContext.data.entity.save();
}