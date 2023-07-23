function checkCity(context) {
    // read object from orm context
    var cityField = context.getFormContext();

    // read City Name Value
    var cityName = cityField.getAttribute("address1_city").getValue();

    if (cityName === "Giza") {
        var alertStrings = {
            text: "Welcome to Giza <3, My City!!",
        };

        var alertOptions = {
            height: 200,
            width: 300,
            title: "City Alert",
        };

        Xrm.Navigation.openAlertDialog(alertStrings, alertOptions).then(
            function success(result) {
                // Handle the success callback
                console.log("Alert shown successfully!");
            },
            function error(error) {
                // Handle the error callback
                console.log("Error showing the alert: " + error.message);
            }
        );
    }
}