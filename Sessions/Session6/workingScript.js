// Valid website script
function websiteValidator(executionContext) {
    // create form object
    var formContext = executionContext.getFormContext();


    var website = formContext.getAttribute('websiteurl').getValue();
    var errorOptions = {
        details: "The inserted URL is not correct\nPlease make sure that you follow this format www.(YourWebsiteName).(YourHostName)",
        errorCode: -1,
        message: 'Correct the URL and try again'
    };

    if (website !== null) {
        // Xrm.Navigation.openErrorDialog(errorOptions).then(
        //     function (success) {
        //         console.log("Error dialog closed");
        //     },
        //     function (error) {
        //         console.log(error.message);
        //     }
        // );
        // regex checker. 
        var regex = RegExp('^www\.[a-zA-Z]+\.(com|org|net)$');
        var valid = regex.test(website);
        if (valid)
            // return true;
            console.log("valid");
        else {
            // I would prefer showing an error dialog instead of an alert dialog
            Xrm.Navigation.openErrorDialog(errorOptions).then(
                function (success) {
                    console.log("Error dialog closed");
                },
                function (error) {
                    console.log(error.message);
                }
            );
            // return false;
        }
    }
};

function mustProvidePhoneNumber(executionContext) {
    debugger;
    // create form object
    var formContext = executionContext.getFormContext();

    // define the utility items for alert dialog
    var alertStrings = { confirmButtonLabel: "OK", text: "You must insert a phone number." };
    var alertOptions = { height: 120, width: 260 };

    // get the phone number
    var phoneNumber = formContext.getAttribute('telephone1').getValue();

    if (phoneNumber !== null && phoneNumber !== '') {
        alert('correct Form');
        console.log("Provided a phone number");
        // return true;
    }
    else {
        alert('Incorrect Form');
        Xrm.Navigation.openAlertDialog(alertStrings, alertOptions).then(
            function (success) {
                console.log("Alert dialog closed");
            },
            function (error) {
                console.log(error.message);
            }
        );
        // return false;
    }
}

// generated URL
//https://orgba423954.crm4.dynamics.com//WebResources/new_validWebsite