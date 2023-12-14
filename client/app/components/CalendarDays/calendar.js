const weekArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthArray = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

const weekdayMap = new Map();

//WeekDayMap gets all of the days of the week as a key and gets all of the days of the week following the day as a value.
//For example if I pass in the key Thursday, then the days of the week after Thursday would be ["Friday","Saturday"]
weekdayMap.set('Sunday', ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]);
weekdayMap.set('Monday', ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]);
weekdayMap.set('Tuesday', ["Wednesday", "Thursday", "Friday", "Saturday"]);
weekdayMap.set('Wednesday', ["Thursday", "Friday", "Saturday"]);
weekdayMap.set('Thursday', ["Friday", "Saturday"]);
weekdayMap.set('Friday', ["Saturday"]);
weekdayMap.set('Saturday', []);

//Gets the current month by passing in the current Day of the year.
export function GetCalendarMonthName(curDate) {
    if (!(curDate instanceof Date)) {
        console.error("curDate is not a valid Date object");
        return;
    }
    return monthArray[curDate.getMonth()];
}

//When given a weekDay (i.e. Sunday) and the current Day today. 
//it calculautes what exact date should be returned to a component that calls it.
//i.e. if weekDay==Sunday and the date given was 12/13/2023. 
//Then it would return 12/10/2023, as that was Sunday's exact date.
export function GetDaysOfTheWeek(weekDay, date) {

    //Initialize the nextDays array to be the weekDays after the weekDay given
    let nextDays = [];
    nextDays = weekdayMap.get(weekDay);

    let curDate = new Date(date);

    if (!(curDate instanceof Date)) {
        console.error("curDate is not a valid Date object");
        return;
    }

    let curDayIndex = curDate.getDay();
    
    //Check if the nextDays includes the target currentDay of the week.
    //Then move forward with curDayIndex until we reach the target currentDay. 
    //Else, go backwards until we reach the target currentDay.
    if(!nextDays.includes(weekArray[curDayIndex])) {

        //console.log("the day given was included");
        for(let i = curDayIndex; i < 7; i++) {
            console.log(weekArray[curDayIndex]);
            if(weekArray[curDayIndex]==weekDay) {
                break;
            }
            curDate.setDate(curDate.getDate()+1);
            curDayIndex++;
        }
    } else {
        for(let i = curDayIndex; i >= 0; i--) {
            console.log(weekArray[curDayIndex]);
            if(weekArray[curDayIndex]==weekDay) {
                break;
            }
            curDate.setDate(curDate.getDate()-1);
            curDayIndex--;
        }
    }
    return curDate.getDate();
}

