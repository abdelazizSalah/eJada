// @Author: Abdelaziz Salah 
// @Date: 16/8/2023
function showButton(executionContext) {
    var formContext = executionContext.getFormContext();
    var getDateSubmission = formContext.getAttribute("eja_submissionduedate").getValue();
    var currentDate = new Date();
    var targetDate = currentDate.getDate() + "-" + currentDate.getMonth() + "-" + currentDate.getFullYear();
    if (getDateSubmission == targetDate) {
        return true;
    }
    else {
        return false;
    }
}