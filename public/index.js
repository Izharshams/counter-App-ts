"use strict";
// let naam:string = 'izhar';
// console.log(naam);
// let cast:string = 'shams';
// console.log(cast);
let incBtn = document.getElementById('inc-btn');
let dicBtn = document.getElementById('dic-btn');
let inpEl = document.getElementById('input');
let count = 0;
function updatcounter() {
    inpEl.value = count.toString();
}
;
incBtn.addEventListener('click', () => {
    inpEl.innerHTML = `
   ${count++}
    `;
    updatcounter();
});
dicBtn.addEventListener('click', () => {
    if (count === 0) {
        count++;
    }
    inpEl.innerHTML = `
    ${count--}
    `;
    updatcounter();
});
