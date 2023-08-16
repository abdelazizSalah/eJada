function setApprovalDueDate() {
    debugger;
    var currentDate = new Date();
    Xrm.Page.getAttribute("eja_approvaldate").setValue(new Date(currentDate.getFullYear(), currentDate.getMonth(), 26));

    // save the form
    formContext.data.entity.save();
}