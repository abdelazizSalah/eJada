// @Author: Abdelaziz Salah 
// @Date: 16/8/2023
function TimesheetIdLock() {
    Xrm.Page.getControl("eja_timesheetid").setDisabled(true);
}

function TimesheetIdSet() {
    debugger;
    var timesheetIdAttribute = Xrm.Page.getAttribute("eja_timesheetid");

    if (timesheetIdAttribute && timesheetIdAttribute.getValue() === null) {
        var entityName = "eja_timesheetas";

        var req = new XMLHttpRequest();

        var query = entityName + "?$count=true";
        req.open(
            "GET",
            Xrm.Utility.getGlobalContext().getClientUrl() + "/api/data/v9.1/" + query,
            true
        );
        req.setRequestHeader("OData-MaxVersion", "4.0");
        req.setRequestHeader("OData-Version", "4.0");
        req.setRequestHeader("Accept", "application/json");
        req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        req.onreadystatechange = function () {
            if (this.readyState === 4) {
                req.onreadystatechange = null;
                if (this.status === 200) {
                    var recordCount = JSON.parse(this.responseText)["@odata.count"];
                    recordCount += 1;
                    console.log("Total Records: " + recordCount);

                    timesheetIdAttribute.setValue(recordCount.toString());
                } else {
                    console.error(
                        "Error occurred while retrieving record count: " + this.statusText
                    );
                }
            }
        };
        req.send();
    }
}