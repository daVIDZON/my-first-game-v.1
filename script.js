const Player = document.querySelector('.persone');
const Attack = document.querySelector('.attack');
const ZoneArea = document.querySelector('.main-area');
const ZoneSpwnEnemies = document.querySelector('.ZoneSpwnEnemies');
const WholeArea = document.querySelector('.area');
const removeEnemyArea = document.querySelector('.enemy-animation');


//timer
let timerNum = document.querySelector('.timer-style');
const clock = document.querySelector('.clock');


let clone = Attack.cloneNode(true);

let posX = 50;
let posY = 50;
let attackPos = 0;

window.addEventListener('keydown', move);
// window.addEventListener('keydown', attack);

function move(event) {

    if (event.code == 'KeyW' && Player.style.top >= '21%') {
        posY -= 3;
    } else if (event.code == 'KeyA' && Player.style.left >= '17%') {
        posX -= 3;
    } else if (event.code == 'KeyS' && Player.style.top <= '73%') {
        posY += 3;
    } else if (event.code == 'KeyD' && Player.style.left <= '78%') {
        posX += 3;
    }

    Player.style.cssText = `
     top:${posY}%;
     left:${posX}%;
    transition-duration: 0.5s;
    `;
}

// function attack(event) {
//     setTimeout(()=>{
//         if(event.code == 'Space'){
//             attackPos+=500;
//           Area.appendChild(clone);
//         }
//         else{
//          console.log('trabbles');
//         }

//         Attack.style.cssText = `
//         bottom:${attackPos}px;
//        `;

//     },1500);
// }

function enemies() {
    setInterval(() => {
        let newEnemy = document.createElement('div');
        newEnemy.classList.add('enemy');
        const space = Math.floor(Math.random() * 1000);
        if (space < 330) {
            newEnemy.remove();
        } else {
            newEnemy.style.left = space + "px";
            setTimeout(() => {
                newEnemy.classList.add('enemy-animation');

                newEnemy.addEventListener("animationend",()=>{
                    newEnemy.remove();
                });
                ZoneSpwnEnemies.appendChild(newEnemy);
            }, 50);
        }
    }, 2000);



}
enemies();









//timer

function timeout() {
    let sec = 0;
    let minut = 0;


    setInterval(seconds, 1000);
    setInterval(minetes, 60000);


    function minetes() {
        minut += 1;

        if (minut < 10) {
            clock.innerHTML = `
        <p class="timer-style">0${minut}</p>
        <p class="dots">:</p>
        <p class="timer-style">${sec}</p>
        `;
        } else {
            clock.innerHTML = `
        <p class="timer-style">${minut}</p>
        <p class="dots">:</p>
        <p class="timer-style">${sec}</p>
        `;
        }
    }

    function seconds() {
        if (sec > 59) {
            sec = 0;
        } else {
            sec++;
        }
        //beauty numbers < 10

        if (sec < 10) {
            clock.innerHTML = `
            <p class="timer-style" >0${minut}</p>
            <p class="dots">:</p>
            <p class="timer-style">0${sec}</p>
            `;
        } else if (minut < 10) {
            clock.innerHTML = `
            <p class="timer-style">0${minut}</p>
            <p class="dots">:</p>
            <p class="timer-style">${sec}</p>
            `;
        } else {
            clock.innerHTML = `
            <p class="timer-style">${minut}</p>
            <p class="dots">:</p>
            <p class="timer-style">${sec}</p>`;
        }
    }
}
timeout();