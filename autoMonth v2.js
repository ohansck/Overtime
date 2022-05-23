//Code to get total number of days in a month.
// 1 is added to the getMonth() function to help us get the last day of the previous month, by using zero as the day for getDate()
// start index at a number then reset it to zero, to calculate for the month 
const date = new Date();
const currentYear = date.getFullYear();
const currentMonth = date.getMonth() + 1;
let workMonth = [];
let userYear = 2022;
let userMonth = 12;

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
    let index = 2;
    let i = 10;
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
    for (i; i < workMonth.length; i++) {
        console.log(workMonth[i], duty[i]);
        monthSchedule.push({ day: workMonth[i], duty: duty[i] });
    }
    // for (let i = 0; i < workMonth.length; i++) {
    //     console.log(workMonth[i], duty[i]);
    //     monthSchedule.push({ day: workMonth[i], duty: duty[i] });
    // }
}

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