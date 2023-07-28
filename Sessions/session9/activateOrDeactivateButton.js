function ActiveInactive() {
    debugger;
    // 0 = active
    // 1 = Inactive

    var parameters = {
        PreviousRecordStatus: Xrm.Page.getAttribute("statecode").getValue(),
    };

    var req = new XMLHttpRequest();
    req.open(
        "POST",
        Xrm.Page.context.getClientUrl() + "/api/data/v9.1/new_action_trial",
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
                var result = JSON.parse(this.response);
                var outputParameter = result.CurrentRecordStatus;
                Xrm.Page.getAttribute("statecode").setValue(outputParameter);
                console.log(result);
            } else {
                console.error(this.statusText);
            }
        }
    };
    req.send(JSON.stringify(parameters));

}