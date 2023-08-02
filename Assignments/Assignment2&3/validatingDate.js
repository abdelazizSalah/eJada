

function showErrorMessage(formContext) {
    // if the date is in the past, show an error message
    formContext.getControl("zuz_joindate").setNotification("The date should be in the future or today");
    formContext.getAttribute("zuz_joindate").setValue(null);
    return false;
}



function validateJoinDate(executionContext) {
    debugger;
    // getting the form context
    var formContext = executionContext.getFormContext();


    // getting the join date
    var joinDate = formContext.getAttribute("zuz_joindate").getValue();

    var sentDay = joinDate.getDate();
    var sentMonth = joinDate.getMonth();
    var sentYear = joinDate.getFullYear();
    // check that the join date is not null 
    if (joinDate != null) {
        /*
            Conditions is as follows: 
                1. check on the year
                    1. if valid
                        1. check on the month
                            1. if valid
                                1. check on the day
                                    1. if valid
                                        1. return true
                                    2. else
                                        1. show error message
                                        2. return false
                            2. else
                                1. show error message
                                2. return false
                    2. else
                        1. show error message
                        2. return falss
        */
        var date = new Date();
        // check that the current year is less than the sent one
        if (sentYear < date.getFullYear())
            showErrorMessage(formContext);
        else if (sentMonth < date.getMonth())
            showErrorMessage(formContext);
        else if (sentDay < date.getDate())
            showErrorMessage(formContext);
        else {
            formContext.getControl("zuz_joindate").clearNotification();
            return false;
        }
    }

}