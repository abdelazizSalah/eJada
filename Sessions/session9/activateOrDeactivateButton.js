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
    // // get the current organization url 
    // var globalContext = Xrm.Utility.getGlobalContext();
    var serverUrl = Xrm.Page.context.getClientUrl();

    // // query to send the request to the global action 
    // // global action unique name - this name is case sensitive
    var actionName = "new_action_trial";

    // // set the current loggedin userid into _inputParameter of the action
    // var _inputParameterValue = globalContext.userSettings.userId;

    // // pass the input parameters to action 
    // var inputData = {
    //     "do_the_logic_input": 1
    // };

    // create the HTTPrequest 
    var req = new XMLHttpRequest();
    req.open("POST", serverUrl + "/api/data/v9.1/" + actionName, true);
    req.setRequestHeader("OData-MaxVersion", "4.0");
    req.setRequestHeader("OData-Version", "4.0");
    req.setRequestHeader("Accept", "application/json");
    req.setRequestHeader("Content-Type", "application/json; charset=utf-8");


    req.onreadystatechange = function () {
        if (this.readyState === 4 /* completed successfully */) {
            req.onreadystatechange = null;
            if (this.status === 200) {
                // success callback
                alert("Action has been called successfully");
                var result = JSON.parse(this.response);
                console.log(result);
                alert(result.theStatus); // output parameter
                formContext.data.entity.save();
            } else {
                var error = JSON.parse(this.response).error;
                console.log(" An error has occured in the action :\n\n" + error.message);
            }
        }
    }

    // execute the request
    // this will send a javascript request to the defined api. 
    req.send(JSON.stringify(inputData));
}
