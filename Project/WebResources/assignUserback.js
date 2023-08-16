function assignOwnerToLeader() {
    debugger;

    // getting the owner field. 
    var ownerFiled = Xrm.Page.getAttribute("ownerid");

    // get the value in the employee
    var employee = Xrm.Page.getAttribute("eja_user").getValue();

    console.log(employee);

    // assign it to the team with certain id 
    // ownerFiled.setValue([{ id: "FD931A7E-893B-EE11-BDF4-000D3ADC56BE", entityType: "team" }]);
}