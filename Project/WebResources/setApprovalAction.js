function setApprovedBy() {
    // getting the owner field. 
    var ownerFiled = Xrm.Page.getAttribute("eja_approved_by");

    var userId = Xrm.Page.context.getUserId().replace(/{|}/g, "");
    // assign it to the team with certain id 
    ownerFiled.setValue([{ id: userId, entityType: "systemuser" }]);

}


function changeStatusReason() {
    Xrm.Page.getAttribute("statuscode").setValue('970760003');
}

function setApprovalDate() {
    var currentDate = new Date();
    Xrm.Page.getAttribute("eja_approvaldate").setValue(new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()));

}


function returnOwnerToEmployee() {
    debugger;

    // getting the owner field. 
    var ownerFiled = Xrm.Page.getAttribute("ownerid");

    // get the value in the employee
    var employee = Xrm.Page.getAttribute("eja_user").getValue();

    console.log(employee[0].id);
    // assign it to the team with certain id 
    ownerFiled.setValue([{ id: employee[0].id, entityType: "systemuser" }]);
}

function ApprovalAction() {
    debugger;
    setApprovedBy();
    changeStatusReason();
    setApprovalDate();
    returnOwnerToEmployee();
    Xrm.Page.data.entity.save();
}