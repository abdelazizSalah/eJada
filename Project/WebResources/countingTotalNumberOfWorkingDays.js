// @Author: Abdelaziz Salah 
// @Date: 16/8/2023
function countDaysExcludingFridaysAndThursdays(year, month) {
    const daysInMonth = new Date(year, month - 1, 0).getDate();
    console.log(daysInMonth);
    let count = 0;

    for (let day = 1; day <= daysInMonth; day++) {
        const currentDate = new Date(year, month - 1, day);
        console.log(currentDate);
        if (currentDate.getDay() !== 5 && currentDate.getDay() !== 4) {
            count++;
        }
    }

    return count;
}

function specificDays(dayName, month, year) {
    // set names
    var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saterday"
    ];

    // change string to index of array
    var day = dayNames.indexOf(dayName);
    // var month = monthNames.indexOf(monthName) + 1;

    // determine the number of days in month
    var daysinMonth = new Date(year, month, 0).getDate();

    // set counter
    var sumDays = 0;

    // iterate over the days and compare to day
    for (var i = 1; i <= daysinMonth; i++) {
        var checkDay = new Date(year, month - 1, parseInt(i)).getDay();
        if (day == checkDay) {
            sumDays++;
        }
    }

    // show amount of day names in month
    return sumDays;
}

// month should be zero based number -> 0 = January, 1 = February, etc.
function getNoOfWorkingDays(month, year) {
    // set names
    noOfFridays = specificDays("Friday", month + 1, year);
    noOfSaterdays = specificDays("Saterday", month + 1, year);
    return new Date(year, month, 0).getDate() - noOfFridays - noOfSaterdays;
}


function setWorkingDaysField(executionContext) {
    debugger;
    if (executionContext.getAttribute("eja_workingdays").getValue() === null) {
        var currentMonth = Date.now().getMonth();
        var currentYear = Date.now().getFullYear();
        var weekdays = getNoOfWorkingDays(currentMonth, currentYear);
        console.log(weekdays);
        executionContext.getAttribute("eja_workingdays").setValue(weekdays);
    }
}