// function ActiveInactive() {
//     debugger;
//     // 0 = active
//     // 1 = Inactive

//     var parameters = {
//         PreviousRecordStatus: Xrm.Page.getAttribute("statecode").getValue(),
//     };

//     var req = new XMLHttpRequest();
//     req.open(
//         "POST",
//         Xrm.Page.context.getClientUrl() + "/api/data/v9.1/new_action_trial",
//         true
//     );
//     req.setRequestHeader("OData-MaxVersion", "4.0");
//     req.setRequestHeader("OData-Version", "4.0");
//     req.setRequestHeader("Accept", "application/json");
//     req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
//     req.onreadystatechange = function () {
//         if (this.readyState === 4) {
//             req.onreadystatechange = null;
//             if (this.status === 200) {
//                 var result = JSON.parse(this.response);
//                 var outputParameter = result.CurrentRecordStatus;
//                 Xrm.Page.getAttribute("statecode").setValue(outputParameter);
//                 console.log(result);
//             } else {
//                 console.error(this.statusText);
//             }
//         }
//     };
//     req.send(JSON.stringify(parameters));

// }



function CallingCustomActionFromJavaScript() {
    debugger;
    // Entity ID
    /*
        Id -> this is the GUID of the record -> Abdelaziz Hospital 
    */
    var Id = Xrm.Page.data.entity.getId().replace("{", "").replace("}", "");

    // from this we get the url. 
    var globalContext = Xrm.Utility.getGlobalContext();

    // (companyURL).dynamics.com
    var serverUrl = globalContext.getClientUrl();
    var actionName = "new_action_trial";

    /*
        entity specific action.
        if it was a global action, then the quere would be like this:
        var query = actionName; without anything else.

    */
    var query =
        "zuz_hospitals(" + Id + ")/Microsoft.Dynamics.CRM." + actionName;

    // // query to send the request to the global action 
    // // global action unique name - this name is case sensitive

    // // set the current loggedin userid into _inputParameter of the action
    // var _inputParameterValue = globalContext.userSettings.userId;

    // // pass the input parameters to action 
    // var inputData = {
    //     "do_the_logic_input": 1
    // };
    // create the HTTPrequest 
    var req = new XMLHttpRequest();
    // open means that we are going to send a request to the server
    req.open("POST", serverUrl + "/api/data/v9.1/" + query, true);
    // implementing the headers.
    req.setRequestHeader("OData-MaxVersion", "4.0");
    req.setRequestHeader("OData-Version", "4.0");
    req.setRequestHeader("Accept", "application/json");
    req.setRequestHeader("Content-Type", "application/json; charset=utf-8");


    // onreadystatechange -> this is the function that will be called when the state of the request changes.
    /*
        Bt3br 3n l stages ele by3dy feha l request
        readyState: 	Holds the status of the XMLHttpRequest.
        0: request not initialized
        1: server connection established
        2: request received
        3: processing request
        4: request finished and response is ready
    */
    req.onreadystatechange = function () {
        if (this.readyState === 4 /* completed successfully */) {
            req.onreadystatechange = null;
            if (this.status === 200 || this.status == 204) {
                // success callback
                alert("Action has been called successfully");
                // var result = JSON.parse(this.response);
                // console.log(result);
                alert(result.theStatus); // output parameter
                Xrm.Page.data.entity.save();

                // Refresh data to see changes
                Xrm.Page.data.refresh(true);
                Xrm.Page.data.refresh(true);
                Xrm.Page.data.refresh(true);
                return true;
            } else {
                var error = JSON.parse(this.response).error;
                console.log(" An error has occured in the action :\n\n" + error.message);
                return false;
            }
        } else {
            alert('An error has occured in the action');
        }
    }

    // execute the request
    // this will send a javascript request to the defined api. 
    req.send();
}
