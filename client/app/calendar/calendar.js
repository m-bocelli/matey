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

weekdayMap.set('Sunday', ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]);
weekdayMap.set('Monday', ["Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]);
weekdayMap.set('Tuesday', ["Wednesday", "Thursday", "Friday", "Saturday"]);
weekdayMap.set('Wednesday', ["Thursday", "Friday", "Saturday"]);
weekdayMap.set('Thursday', ["Friday", "Saturday"]);
weekdayMap.set('Friday', ["Saturday"]);
weekdayMap.set('Saturday', []);




export function GetDaysOfTheWeek(weekDay, date) {

    let nextDays = [];
    nextDays = weekdayMap.get(weekDay);
    console.log(nextDays);

    let curDate = new Date();
    curDate = date;

    let curDayIndex = curDate.getDay();
    //console.log("curDayIndex: " + curDayIndex);

    //console.log("weekArrayValue: " + weekArray[curDayIndex]);
    //console.log("weekDayParam: " + weekDay);
    //console.log(nextDays.includes(weekArray[curDayIndex]));
    //console.log(nextDays[0]);
    if(!nextDays.includes(weekArray[curDayIndex])) {

        console.log("the day given was included");
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

