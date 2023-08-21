// @Author: Abdelaziz Salah 
// @Date: 16/8/2023
function assignOwnerToLeader(executionContext) {
    debugger;
    // getting form context  
    var formContext = executionContext.getFormContext();

    // getting the owner field. 
    var ownerFiled = formContext.getAttribute("ownerid");

    // assign it to the team with certain id 
    ownerFiled.setValue([{ id: "FD931A7E-893B-EE11-BDF4-000D3ADC56BE", entityType: "team" }]);
}