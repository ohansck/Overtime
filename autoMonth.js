//Code to get total number of days in a month.
// 1 is added to the getMonth() function to help us get the last day of the previous month, by using zero as the day for getDate()
// start index at a number then reset it to zero, to calculate for the month 
const nowDate = new Date();
const currentYear = nowDate.getFullYear();
const currentMonth = nowDate.getMonth() + 1;
const inputSchedule = document.querySelector("#inputSch");
const inputScheduleDate = document.querySelector("#date");
let customDate;
let [workMonth, tempDays, tempSch, correction, duty, duty1, duty2] = [[], [], [], [], [], [], []];
let userYear = 2022;
let userMonth = 4;
let userDay;
let monthSchedule = new Array();
let kiki;
let chosenDuty;
let mainDate;
let monthName;
const shiftSch = ['D1', 'D2', 'D3', 'N1', 'N2', 'N3', 'O1', 'O2', 'O3'];
// function daysInMonth(year, month) {
//     return new Date(year, month, 0).getDate();
// }
inputSchedule.date.addEventListener("change", () => {
    customDate = new Date(inputSchedule.date.valueAsDate);
    userYear = customDate.getFullYear();
    userMonth = customDate.getMonth() + 1;
    userDay = customDate.getDate();
    mainDate = new Date(Date.parse(`${userMonth}/1/${userYear}`));
    const options = { month: 'long' };
    monthName = new Intl.DateTimeFormat('en-US', options).format(customDate);
    workMonth = [];
    const monthDays = (year, month) => new Date(year, month, 0).getDate();
    function getDays(days) {
        for (let i = 1; i <= days; i++) {
            workMonth.push(i);
        }
    }
    getDays(monthDays(userYear, userMonth));
})
inputSchedule.duty.addEventListener("change", () => {
    chosenDuty = inputSchedule.duty.value;
})

//let userDaysInMonths = daysInMonth(userYear, userMonth);
//getDays(userDaysInMonths);

// const mainDate = new Date(Date.parse(`${userYear}-${userYear}-1`));
//To get the month name in full






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
        //console.log(counter);
    }
    for (let i = 0; i < workMonth.length; i++) {
        //console.log(workMonth[i], duty[i]);
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
    //counter2 counts the iterations for creation of workDay array
    //Counter3 counts the duty iterations from previous user select day till first day
    let [counter, counter2, counter3, index] = [0, 0, 0, 0];
    //chosenDuty is the user selected duty for the selected day
    //chosenDuty = 2;
    //i is the user selected day of the month for start of schedule creation
    let i = userDay - 1;
    [duty, duty1, duty2, tempDays, tempSch, monthSchedule] = [[], [], [], [], [], []]
    let r;
    index = chosenDuty;
    //Creates the duty schedule from the first till end of month
    while (counter < workMonth.length) {
        //Creates the duty schedule from the user select day, till end of month
        {

            while (counter < workMonth.length - i) {
                for (index; index < shiftSch.length; index++) {
                    duty1.push(shiftSch[index]);
                    counter++;
                    // counter3--;
                    console.log(counter);
                    console.log(`Counter: ${counter}. in normal duty`);
                    if (counter >= workMonth.length - i) break;

                }
                //if (counter >= workMonth.length - i) break;
                index = 0;
            }
        }
        //This arranges the duty schedule backwards from the previous day backwards to the first
        r = chosenDuty - 1;
        {
            //if (index === 0) index = 9;
            //index = i;
            while (counter3 < i) {
                if (r < 0) r = 8;
                for (r; r >= 0; r--) {
                    duty2.push(shiftSch[r]);
                    counter++;
                    counter3++;
                    console.log(`Counter: ${counter}. in reverse duty`);
                    if (counter3 >= i) break;
                }
                r = 8;
            }
        }
    }
    //duty = duty1.concat(duty2.reverse());
    duty = duty1.concat(duty2.reverse());
    console.log(`Balance is ${workMonth.length - i}`);
    while (counter2 < workMonth.length) {
        for (i; i < workMonth.length; i++) {
            console.log(workMonth[i]);
            // tempDays.push(workMonth[i]);
            tempDays.push(workMonth[i]);
            counter2++;
            if (counter2 >= workMonth.length)
                break;
        }
        i = 0;
    }
    //For final creation and sorting of the monthly schedule
    for (let j = 0; j < workMonth.length; j++) {
        tempSch.push({ day: tempDays[j], duty: duty[j] });
    }
    monthSchedule = tempSch.sort((a, b) => a.day - b.day);
}

//creation of the corection sheet
function createCorrection(ms) {
    let [countDays, countLeave, hoursGen, hoursOt, hoursTotal] = [0, 0, 0, 0, 0]
    let hrGen
    let hrOt
    let hrTotal
    const alphaSchedule = [];
    correction = [];
    let pos; let len; let pos2;
    for (let i = 0; i < ms.length; i++) {

        hrGen = 8; hrOt = 4; hrTotal = 12;
        pos = ms[i].duty.charAt(0);
        pos2 = ms[i].duty.charAt(1);
        dutyTag = ms[i].duty;
        {
            if (pos === 'D') {
                clockTime = '7am - 7pm';
            } else if (pos === 'N') {
                clockTime = '7pm - 7am';
            } else if (pos === 'O') {
                clockTime = '';
            } else if (pos === 'A') {
                clockTime = 'AL';
            } else if (pos === 'C' && pos2 === 'L') {
                clockTime = 'CL';
            } else if (pos === 'C' && pos2 === 'M') {
                clockTime = 'CML';
            } else if (pos === 'E') {
                clockTime = 'EL';
            }
        }

        {
            if (dutyTag.indexOf("L") >= 0) {
                hrOt = 0;
                hrTotal = 8;;
            } else if (pos === 'O') {
                hrOt = 0; hrGen = 0; hrTotal = 0;
            }
        }

        {
            if (pos === 'D' || pos === 'N') {
                countDays++
            }
            if (dutyTag.indexOf("L") >= 0) {
                countLeave++
            }
        }
        let fullDate = `${workMonth[i]}/${userMonth}/${userYear}`;

        // To create correction for only working days
        //filtering out off days
        if (pos !== "O") {
            alphaSchedule.push({ date: fullDate, day: ms[i].day, duty: ms[i].duty, clockTime: clockTime, hrGen: hrGen, hrOt: hrOt, hrTotal: hrTotal });
        }
        // alphaSchedule.push({ date: fullDate, day: ms[i].day, duty: ms[i].duty, clockTime: clockTime, hrGen: hrGen, hrOt: hrOt, hrTotal: hrTotal });
        hoursGen += hrGen;
        hoursTotal += hrTotal;
        hoursOt += hrOt;

    }
    correction = alphaSchedule.sort((a, b) => a.day - b.day);
    let totalDays = countDays + countLeave;
    console.log(hoursGen, hoursOt, hoursTotal, countDays, countLeave);
    console.log(calcOT(countDays, 87500, calcOtAmount, countLeave));
    return luna = [hoursTotal, countDays, countLeave, totalDays];

}


//let createCorSheet;

function createCalender(ms, mainDate) {
    //create a calender
    let counter = 0
    let getFirstDay = (userDate) => userDate.getDay();
    let firstDay = getFirstDay(mainDate);

    const calMonthName = document.querySelector(".cal-month-name");
    const cal = document.querySelector(".cal");


    {
        calMonthName.innerText = monthName;
    }
    //Clear calender before starting
    {
        if (document.querySelector(".cal-days")) {
            document.querySelector(".cal-days").remove();
        }
        if (document.querySelector("#calCorrect")) {
            document.querySelector("#calCorrect").remove();
        }
    }
    {
        let div = document.createElement("div");
        div.classList.add("cal-days");
        cal.append(div);
    }

    //get the first day of the month, then use it to calculate the number of boxes needed for shifting
    for (let index = 0; index < firstDay; index++) {
        let div1 = document.createElement("div");
        let calDays = document.querySelector(".cal-days")
        div1.classList.add("btn", "cal-btn")
        calDays.append(div1)
        let calBn = document.querySelectorAll(".cal-days .cal-btn")
        counter++
    }

    for (let index = 0; index < ms.length; index++) {

        //each date on the calendar
        let div1 = document.createElement("div");
        let calDays = document.querySelector(".cal-days")
        div1.classList.add("btn", "cal-btn", "border-end-3", "border-bottom-3")
        calDays.append(div1)
        let calBn = document.querySelectorAll(".cal-days .cal-btn")
        let div2 = document.createElement("div");
        calBn[counter].append(div2)
        let p = document.createElement("p");
        p.classList.add("m-0");
        //p.innerText = 1 + index;
        p.innerText = ms[index].day;
        div2.append(p);
        let div3 = document.createElement("div");
        calBn[counter].append(div3);
        let s = document.createElement("select");
        s.classList.add("form-select", "btn", "king");
        var opt = document.createElement("option");
        var opt1 = document.createElement("option");
        var opt2 = document.createElement("option");
        var opt3 = document.createElement("option");
        var opt4 = document.createElement("option");
        var opt5 = document.createElement("option");
        var opt6 = document.createElement("option");
        var opt7 = document.createElement("option");

        opt.setAttribute("selected", "")
        opt.value = ms[index].duty;
        opt.text = ms[index].duty;
        opt1.value = "D";
        opt1.text = "Day";
        opt2.value = "N";
        opt2.text = "Night";
        opt3.value = "O";
        opt3.text = "Off";
        opt4.value = "AL";
        opt4.text = "Annual Leave";
        opt5.value = "CL";
        opt5.text = "Casual Leave";
        opt6.value = "CML";
        opt6.text = "Compassionate Leave";
        opt7.value = "EL";
        opt7.text = "Examination Leave";
        s.add(opt)
        s.add(opt1)
        s.add(opt2)
        s.add(opt3)
        s.add(opt4)
        s.add(opt5)
        s.add(opt6)
        s.add(opt7)
        div3.append(s);
        counter++
    }
    let div4 = document.createElement("div")
    div4.classList.add("d-flex", "justify-content-center");
    div4.setAttribute("id", "calCorrect");
    cal.append(div4);
    let calCorrect = document.querySelector("#calCorrect")
    let calCorrectBtn = document.createElement("button");
    calCorrectBtn.classList.add("btn", "btn-primary")
    calCorrectBtn.setAttribute("id", "createCorrection")
    calCorrectBtn.setAttribute("type", "button")
    calCorrectBtn.innerText = "Create correction sheet";
    calCorrect.append(calCorrectBtn);
    // createCorSheet = document.querySelector("#createCorrection");
}


inputSchedule.addEventListener("submit", function (e) {
    e.preventDefault();
    customSchedule();
    createCalender(monthSchedule, mainDate);
    let calSpace = document.querySelector("#dropdownCalendar")
    if (calSpace.classList.contains("invisible")) {
        calSpace.classList.remove("invisible")
    }

    console.log(`duty array`, duty);
    console.log(`duty1 array`, duty1)
    console.log(`duty2 array`, duty2)
    console.log(`duty2 reverse`, duty2.reverse())
    console.log(`correction`, correction);
})
// function filterCorrection(cor) {
//     const { date, clockTime, hrGen, hrOt, hrTotal } = cor;
// }

function correctionSheet(corArray, luna) {

    const mytablebody = document.querySelector("#tBody");
    const tableCaption = document.querySelector(".caption-top caption");
    tableCaption.innerHTML = `May 2022 correction for xxxx /nTotal Days:${luna[3]}  &nbsp; Days worked:${luna[1]}  &nbsp;  Hours:${luna[0]}  &nbsp;  Leave Days:${luna[2]}`;
    luna = [];
    if (mytablebody.hasChildNodes()) {
        const tableRows = mytablebody.querySelectorAll("tr");
        tableRows.forEach(element => {
            element.remove();
        });
    }
    for (var j = 0; j < corArray.length; j++) {
        // creates a <tr> element
        let mycurrent_row = document.createElement("tr");
        //individual date object
        const { date, clockTime, hrGen, hrOt, hrTotal } = corArray[j];
        const corTemp = [date, clockTime, hrGen, hrOt, hrTotal]
        for (var i = 0; i < 5; i++) {
            // for (const item in corTemp) {
            // creates a <td> element
            let mycurrent_cell = document.createElement("td");
            // creates a Text Node
            let currenttext = document.createTextNode(corTemp[i]);
            // appends the Text Node we created into the cell <td>
            mycurrent_cell.appendChild(currenttext);
            // appends the cell <td> into the row <tr>
            mycurrent_row.appendChild(mycurrent_cell);
            //}
        }
        // appends the row <tr> into <tbody>
        mytablebody.appendChild(mycurrent_row);
    }

}

const calDiv = document.querySelector(".cal");
const updateCorrection = () => {
    let luna = createCorrection(monthSchedule);
    correctionSheet(correction, luna);
    let correctionSpace = document.querySelector("#correctionSpace");
    //makes the correction sheet visible
    if (correctionSpace.classList.contains("invisible")) {
        correctionSpace.classList.remove("invisible")
    }

}
calDiv.addEventListener("click", (e) => {
    if (e.target.id === "createCorrection") {
        // let luna = createCorrection(monthSchedule);
        // correctionSheet(correction, luna);
        updateCorrection();
    }
    e.stopPropagation();
})

calDiv.addEventListener("change", function (e) {
    if (e.target.classList.contains('king')) {
        let calendarDay = (e.target.parentElement.previousElementSibling.firstChild.innerText) - 1;
        let calendarDuty = e.target.value;

        // e.stopImmediatePropagation();
        monthSchedule[calendarDay].duty = calendarDuty;
        console.log(monthSchedule)
        // let luna = createCorrection(monthSchedule);
        // correctionSheet(correction, luna);
        updateCorrection();
        //monthSchedule[kuu].days = lala;
    }
    e.stopPropagation();

})
