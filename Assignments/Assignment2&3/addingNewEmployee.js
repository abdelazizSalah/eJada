function addNewEmployee(executionContext) {
    // we need to navigate to the new form of the employee entity on pressing on the button 
    // we need to get the form context
    var formContext = executionContext.getFormContext();

    // we need to get the url of the new form of the employee entity
    var url = formContext.context.getClientUrl() + "/main.aspx?etn=zuz_employee&pagetype=entityrecord";

    // we need to open the url in a new window
    window.open(url, "_blank");
}


function videoSteps() {
    debugger;
    var entityFormOptions = {};

    entityFormOptions.entityName = "new_employee";
    // entityFormOptions.formId = "6E26E455-7170-49D8-8268-2D6FA572EB15";
    entityFormOptions.formId = "913A8CA2-2175-4BC2-A188-D2EF139FB89C";
    entityFormOptions.openInNewWindow = true;


    // calling the open form function
    Xrm.Navigation.openForm(entityFormOptions).then(
        function (success) {
            console.log(success);
        },
        function (error) {
            console.log(error);
        }
    );
}