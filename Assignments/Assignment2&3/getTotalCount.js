function getNumberOfEmployees(executionContext) {
    debugger;
    // reading the form context
    var formContext = executionContext.getFormContext();

    // accessing the subgrid 
    var input = formContext.getAttribute("zuz_numberofemployees").getValue();

    if (input == true) {
        // get the grid context 
        var gridContext = formContext.getControl("Employees");

        // get the grid number of rows. 
        var numberOfEmployees = gridContext.getGrid().getTotalRecordCount();

        // set the output value in the field 
        formContext.getAttribute("zuz_numberofemployees").setValue(numberOfEmployees);
        formContext.getAttribute("Employees").setValue(false);
    }
}