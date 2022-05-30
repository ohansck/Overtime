const real = document.querySelector("#d");

real.addEventListener("click", editArray)

function editArray(e, mat) {
    let kuu = parseInt(e.target.previousElementSibling.innerText);
    let lala = e.target.value;
    e.stopPropagation();
    // e.stopImmediatePropagation();
    console.log(kuu, lala)
    console.log(mat)
    //monthSchedule[kuu].days = lala;
}