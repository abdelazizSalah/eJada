//@Author Abdelaziz Salah
//@Date 17/8/2023
function evaluateNumberOfHoursDynamically(executionContext) {

    debugger;
    var formContext = executionContext.getFormContext();
    // get the start date 
    var startDate = formContext.getAttribute("eja_startdate").getValue().getTime();

    // get the end date 
    var endDate = formContext.getAttribute("eja_deadline").getValue().getTime();

    // To calculate the time difference of two dates
    var Difference_In_Time = endDate - startDate;

    // To calculate the no. of days between two dates
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);

    // multiply the number of days by 8
    var numberOfHours = Difference_In_Days * 8;

    // set the number of hours
    formContext.getAttribute("eja_numberofhours").setValue(numberOfHours);
}
