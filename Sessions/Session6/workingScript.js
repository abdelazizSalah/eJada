// Valid website script
function websiteValidator() {
    var website = Xrm.Page.getAttribute('websiteurl').getValue();
    const errorOptions = {
        details: "The inserted URL is not correct\nPlease make sure that you follow this format www.(YourWebsiteName).(YourHostName)",
        errorCode: -1,
        message: 'Correct the URL and try again'
    };

    if (website != null) {
        // regex checker. 
        const regex = RegExp('^www\.[a-zA-Z]+\.(com|org|net)$');
        let valid = regex.test(url);
        if (valid)
            return true;
        else {
            // I would prefer showing an error dialog instead of an alert dialog
            Xrm.Navigation.openErrorDialog(alertStrings, alertOptions).then(
                function (success) {
                    console.log("Error dialog closed");
                },
                function (error) {
                    console.log(error.message);
                }
            );
            return false;
        }
    }
};

function mustProvidePhoneNumber() {
    // define the utility items for alert dialog
    const alertStrings = { confirmButtonLabel: "OK", text: "The inserted URL is not correct\nPlease make sure that you follow this format www.(YourWebsiteName).(YourHostName)" };
    const alertOptions = { height: 120, width: 260 };

    // get the phone number
    let phoneNumber = Xrm.page.getAttribute('telephone1').getValue();

    if (phoneNumber != null && phoneNumber != '') {
        return true;
    } else {
        Xrm.Navigation.openAlertDialog(alertStrings, alertOptions).then(
            function (success) {
                console.log("Alert dialog closed");
            },
            function (error) {
                console.log(error.message);
            }
        );
        return false;
    }
}