//Code working to merge work days and duty

//Code to get total number of days in a month.
// 1 is added to the getMonth() function to help us get the last day of the previous month, by using zero as the day for getDate()
// start index at a number then reset it to zero, to calculate for the month 
const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = date.getMonth() + 1;
let workMonth = [];
let userYear = 2022;
let userMonth = 5;
let tempDays = [];
let duty = new Array();
let monthSchedule = new Array();
let kiki;
const shiftSch = ['D1', 'D2', 'D3', 'N1', 'N2', 'N3', 'O1', 'O2', 'O3'];
// function daysInMonth(year, month) {
//     return new Date(year, month, 0).getDate();
// }

//let userDaysInMonths = daysInMonth(userYear, userMonth);
//getDays(userDaysInMonths);
const monthDays = (year, month) => new Date(year, month, 0).getDate();
function getDays(days) {
    for (let i = 1; i <= days; i++) {
        workMonth.push(i);
    }
}
getDays(monthDays(userYear, userMonth));

function createSchedule() {
    //The while loop iterates (sandwich) the duty days over the days of the month.
    //The counter stops the iteration when it is equal to the total number of work days.
    //Index indicates the duty on the specified day
    let counter = 0;


    while (counter < workMonth.length) {
        for (let index = 0; index < shiftSch.length; index++) {
            duty.push(shiftSch[index]);
            counter++;
            if (counter >= workMonth.length)
                break;
        }
        index = 0;
        //if (counter => workMonth.length) break;
        console.log(counter);
    }
    for (let i = 0; i < workMonth.length; i++) {
        console.log(workMonth[i], duty[i]);
        monthSchedule.push({ day: workMonth[i], duty: duty[i] });
    }
    // for (let i = 0; i < workMonth.length; i++) {
    //     console.log(workMonth[i], duty[i]);
    //     monthSchedule.push({ day: workMonth[i], duty: duty[i] });
    // }
}

function customSchedule() {
    //The while loop iterates (sandwich) the duty days over the days of the month.
    //The counter stops the iteration when it is equal to the total number of work days.
    //Index indicates the duty on the specified day
    let counter = 0;
    let counter2 = 0;
    let index = 8;
    let i = 9;
    tempDays = [];
    while (counter < workMonth.length) {
        for (index; index < shiftSch.length; index++) {
            duty.push(shiftSch[index]);
            counter++;
            if (counter >= workMonth.length)
                break;
        }
        index = 0;
        //if (counter => workMonth.length) break;
        console.log(counter);
    }
    while (counter2 < workMonth.length) {
        for (i; i < workMonth.length; i++) {
            console.log(workMonth[i], duty[i]);
            tempDays.push(workMonth[i]);
            monthSchedule.push({ day: workMonth[i], duty: duty[i] });
            counter2++;
            if (counter2 >= workMonth.length)
                break;
        }
        i = 0;
    }
    console.log(tempDays);
    // for (let i = 0; i < workMonth.length; i++) {
    //     console.log(workMonth[i], duty[i]);
    //     monthSchedule.push({ day: workMonth[i], duty: duty[i] });
    // }
}
customSchedule();
// do {
//     {
//         // schedule = workMonth.map(m => {
//         //     for (let i of shiftSch) {
//         //         console.log(m, i)
//         //         kiki = `${m}-${i}`;
//         //     }
//         //     return kiki;
//         // })

//         // for (const m of workMonth) {
//         //     for (let i of shiftSch) {
//         //         console.log(m, i);
//         //         schedule.push(`${i}-${m}`);
//         //     }
//         // }

//         // for (let i = 0; i < workMonth.length; i++) {
//         //     newarry.push(shiftSch[i])
//         //     console.log(workMonth[i], shiftSch[i])

//         // }
//         for (let i = 0; i < workMonth.length; i++) {
//             console.log(workMonth[i], schedule[i])
//             monthSchedule.push({ day: workMonth[i], duty: schedule[i] });
//         }

//     }
// } while (false);
console.log(duty);
console.log(monthSchedule);