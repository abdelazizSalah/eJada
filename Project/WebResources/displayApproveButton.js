function showApproveButton() {
    debugger;
    // check that the current user is a member of a certain team
    var roles = Xrm.Utility.getGlobalContext().userSettings.roles;
    var hasRole = false;
    roles.array.forEach(element => {
        if (element.name === 'Leader') {
            hasRole = true;
            return;
        }
    });

    return hasRole;

}


function GetUserTeams() {
    debugger;
    var userSettings = Xrm.Utility.getGlobalContext().userSettings; // userSettings is an object with user information.
    var current_User_Id = userSettings.userId; // The user's unique id
    var newid = current_User_Id.slice(1, -1);
    var req = new XMLHttpRequest();
    var insideTheTeam = false;
    req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v9.1/teams?$select=name&$expand=teammembership_association($filter=systemuserid eq " + newid + ")", true);
    req.setRequestHeader("OData-MaxVersion", "4.0");
    req.setRequestHeader("OData-Version", "4.0");
    req.setRequestHeader("Accept", "application/json");
    req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    req.setRequestHeader("Prefer", "odata.include-annotations=\"*\"");
    req.onreadystatechange = function () {
        if (this.readyState === 4) {
            req.onreadystatechange = null;
            if (this.status === 200) {
                var results = JSON.parse(this.response);
                for (var i = 0; i < results.value.length; i++) {
                    var name = results.value[i]["name"];
                    if (name == "Leaders") {
                        alert(name);
                        insideTheTeam = true;
                    }
                }
            } else {
                Xrm.Utility.alertDialog(this.statusText);
            }
        }
    };
    req.send();
    return insideTheTeam;
}


function show() {
    var userRoles = Xrm.Page.context.getUserRoles();
    userRoles.array.forEach(element => {
        if (element == '57A16C08-893B-EE11-BDF4-000D3ADC56BE') {
            return true;
        }
    })
    return false;
}