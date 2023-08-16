function disableTheSubgrid() {
    var section = Xrm.Page.ui.tabs.get("timesheet_body").sections.get("timesheet_tasks");
    var controls = section.controls.get();
    for (var i = 0; i < controls.length; i++) {
        controls[i].setDisabled(true);
    }
}

function assignToLeader() {
    // getting form context  
    // var formContext = executionContext.getFormContext();

    // getting the owner field. 
    Xrm.Page.getAttribute("ownerid").setValue([{ id: "FD931A7E-893B-EE11-BDF4-000D3ADC56BE", entityType: "team" }]);

}

function calculateTheReportedDays() {
    var reportedDays = Xrm.Page.getAttribute("eja_reporteddays").getValue();
    var workingDays = Xrm.Page.getAttribute("eja_workingdays").getValue();
    if (reportedDays != null) {
        // we should divide it by 8 and round it up \
        reportedDays /= 8;
        reportedDays = Math.round(reportedDays);
        if (reportedDays > workingDays) {
            Xrm.Page.getAttribute("eja_reporteddays").setValue(workingDays);

            console.log(Xrm.Page.getAttribute("eja_reporteddays").getValue());
        } else {
            Xrm.Page.getAttribute("eja_reporteddays").setValue(reportedDays);
            console.log(Xrm.Page.getAttribute("eja_reporteddays").getValue());


            // ? Todo: show a textfield that the user has worked less than the required time.  
        }
    }
}

function setSubmissionDate() {
    var currentDate = new Date();
    Xrm.Page.getAttribute("eja_submissiondate").setValue(new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()));
}

function submitButton() {
    debugger;
    // assign it to a leader 
    assignToLeader();

    //? change the status to Submitted
    Xrm.Page.getAttribute("statuscode").setValue("970760001");

    //? set the subbmission date to the current date
    setSubmissionDate();

    // calculate the reported days
    calculateTheReportedDays();
    //? set the subgrid locked 
    // 1- get control over the subgrid 
    // Xrm.Page.getControl("timesheet_tasks").setDisabled(true);
    // disableTheSubgrid(); 
    // 2- set it to locked
    Xrm.Page.data.entity.save();

    // we have already locked the form

}