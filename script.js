const thirty = document.querySelector('#thirty');
const thirtyOne = document.querySelector('#thirtyOne');
const again = document.querySelector('#refresh');
let month = ['January','February','March','April','May','June','July','August',
            'September','October','November','December'];
let weekDays = [31,28,31,30,31,30,31,31,30,31,30,31];
let i = 0;

let drawDoom = setInterval(() => {
    if(weekDays[i] == 31){
    const p = document.createElement('p')
    p.textContent = month[i];
    thirtyOne.appendChild(p);
    }
    if(weekDays[i] === 30){
    const p = document.createElement('p')
    p.textContent = month[i];
    thirty.appendChild(p);
    }
    if(i === 11) {
        again.classList.remove('hide');
        clearInterval(drawDoom);

    }
    console.log(i)
    i++;
}, 1000);

again.addEventListener('click',refresh);

function refresh(){
    location.reload();
}