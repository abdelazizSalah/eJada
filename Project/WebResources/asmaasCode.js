
function setWorkingDays() {
    debugger;
    if (Xrm.Page.getAttribute("eja_workingdays").getValue() === null) {
        var date2 = new Date();
        date2.setDate(21);
        var date1 = new Date();
        date1.setDate(22);
        date1.setMonth(date1.getMonth() - 1);
        var weekdays = 0; // initialize the counter
        var currentDate = new Date(date1); // create a new date object with the first date
        while (currentDate <= date2) { // loop until the second date is reached
            var day = currentDate.getDay(); // get the day of the week
            if (day != 6 && day != 5) { // check if it is a weekday
                weekdays++; // increment the counter
            }
            currentDate.setDate(currentDate.getDate() + 1); // move to the next day
        }
        Xrm.Page.getAttribute("eja_workingdays").setValue(weekdays);
    }
}
