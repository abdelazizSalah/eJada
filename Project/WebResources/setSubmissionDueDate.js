
// @Author: Abdelaziz Salah 
// @Date: 16/8/2023
function setSubmissionDueDate(executionContext) {
    debugger;
    var formContext = executionContext.getFormContext();

    // get the current date 
    var currentDate = new Date();

    // set the submission due date with the current month
    formContext.getAttribute("eja_submissionduedate").setValue("21-" + currentDate.getMonth() + "-" + currentDate.getFullYear());

    // save the form
    formContext.data.entity.save();
}