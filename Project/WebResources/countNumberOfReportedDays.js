function countReportedDays(executionContext) {
    var formContext = executionContext.getFormContext();
    var reportedDays = formContext.getAttribute("eja_reporteddays").getValue();
    var workingDays = formContext.getAttribute("eja_workingdays").getValue();
    if (reportedDays != null) {
        // we should divide it by 8 and round it up \
        reportedDays /= 8;
        reportedDays = Math.round(reportedDays);
        if (reportedDays > workingDays) {
            formContext.getAttribute("eja_reporteddays").setValue(workingDays);
        } else {
            formContext.getAttribute("eja_reporteddays").setValue(reportedDays);

            // ? Todo: show a textfield that the user has worked less than the required time.  

            // refresh the page. 
            // Xrm.Page.data.refresh();
        }
    }
}