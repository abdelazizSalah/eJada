// @Author: Abdelaziz Salah 
// @Date: 16/8/2023
function submitButton(executionContext) {
    //? change the status to Submitted
    var status = Xrm.Page.getAttribute("statuscode");
    // set it to Under approval
    status.setValue("970,760,001");

    //? set the subbmission date to the current date
    var submissionDate = Xrm.Page.getAttribute("eja_submissiondate");
    var currentDate = new Date();
    var newDate = currentDate.getDate() + "-" + currentDate.getMonth() + "-" + currentDate.getFullYear();
    submissionDate.setValue(newDate)


    //? set the subgrid locked 
    // 1- get control over the subgrid 
    var subgrid = Xrm.Page.getControl("timesheet_tasks");
    // 2- set it to locked
    subgrid.setDisabled(true);

    // we have already locked the form
    // save the form 
    Xrm.Page.data.entity.save();
}
