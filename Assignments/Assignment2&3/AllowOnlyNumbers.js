function allowOnlyNumbers(executionContext) {
    // this is how we can access the form. 
    var formContext = executionContext.getFormContext();

    // reading what is written in the business phone number. 
    var field = formContext.getAttribute("zuz_businessphone").getValue();

    // setting the error options
    const errorOptions = {
        details:
            "You should insert only numbers",
        errorCode: -1,
        message: "Please insert only digits.",
    };

    // applying the regex to the field. 
    var regex = new RegExp("^[0-9]*$");
    if (!regex.test(field)) {
        // this is how we can show an alert
        Xrm.Navigation.openErrorDialog(errorOptions).then(
            function (success) {

                formContext.getAttribute("zuz_businessphone").setValue(null);
                return false;
            },
            function (error) {
                console.log(error.message);
            });
        return false;

    }
}

