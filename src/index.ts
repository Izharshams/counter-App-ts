// let naam:string = 'izhar';
// console.log(naam);
// let cast:string = 'shams';
// console.log(cast);


let incBtn = document.getElementById('inc-btn') as HTMLButtonElement;
let dicBtn = document.getElementById('dic-btn') as HTMLButtonElement;
let inpEl = document.getElementById('input') as HTMLInputElement;
let count:number = 0;

function updatcounter(){
    inpEl.value = count.toString();
};
incBtn.addEventListener('click', () =>{
    inpEl.innerHTML = `
   ${count++}
    `
    updatcounter()
});

dicBtn.addEventListener('click', () =>{
    if(count === 0){
        count++;
    }
    inpEl.innerHTML = `
    ${count--}
    `
    updatcounter()
});
