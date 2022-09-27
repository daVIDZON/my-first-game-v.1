import startMenu from "./js/startgame";


const Player = document.querySelector('.persone');
const Attack = document.querySelector('.attack');
const attackZone = document.querySelector('.attack-zone');
const ZoneArea = document.querySelector('.main-area');
const ZoneSpwnEnemies = document.querySelector('.ZoneSpwnEnemies');
const playerZone = document.querySelector('.PlayerZone');
const WholeArea = document.querySelector('.area');
const removeEnemyArea = document.querySelector('.enemy-animation');
const startGame = document.querySelector('.game-start');
const startMenuOfgame = document.querySelector('.start-menu');
const score = document.querySelector('.main-score');
const lvlOne = document.querySelector('.level-1');
const OtherLevels = document.querySelector('.OtherLvl');

//timer
let timerNum = document.querySelector('.timer-style');
const clock = document.querySelector('.clock');


let posX = 50;
let posY = 75;



function allActions() {
    window.addEventListener('keydown', move);


    //timer

    function timeout() {
        let sec = 0;
        let minut = 0;


        setInterval(seconds, 1000);
        setInterval(levels, 120000);


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
            if (sec >= 59) {
                sec = 0;
                minetes();
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

    function move(event) {
        // if (event.code == 'KeyW' && Player.style.top >= '21%') {
        //     posY -= 3;
        // } 
        if (event.code == 'KeyA' && posX >= 2) {
            posX -= 5.5;
            // } else if (event.code == 'KeyS' && Player.style.top <= '73%') {
            //     posY += 3;
        } else if (event.code == 'KeyD' && posX <= 92) {
            posX += 5.5;
        }

        Player.style.cssText = `
         top:${posY}%;
         left:${posX}%;
        transition-duration: 0.4s;
        `;
    }

    //Score

    let scoreNum = 0;

    function Tottalscore() {
        scoreNum += 1;

        if (scoreNum < 10) {
            score.innerHTML = `
        <p class="score-style-1">Score</p>
                    <p class="dots">:</p>
                    <p class="score-style">0${scoreNum}</p>
        `;
        } else {
            score.innerHTML = `
        <p class="score-style-1">Score</p>
                    <p class="dots">:</p>
                    <p class="score-style">${scoreNum}</p>
        `;
        }

    }



    function enemies() {
        let newEnemy = document.createElement('div');
        let EnemyArea = document.createElement('div');

        newEnemy.classList.add('enemy');
        EnemyArea.classList.add('bigger-enemy-area');

        const space = Math.floor(Math.random() * 600);
        if (space < 330) {
            newEnemy.remove();
            EnemyArea.remove();
        } else {
            newEnemy.style.left = space + "px";
            EnemyArea.style.left = space + "px";

            setTimeout(() => {
                newEnemy.classList.add('enemy-animation');
                EnemyArea.classList.add('enemy-animation');

                newEnemy.addEventListener("animationend", () => {
                    newEnemy.remove();
                });
                EnemyArea.addEventListener("animationend", () => {
                    EnemyArea.remove();
                });

                ZoneSpwnEnemies.appendChild(newEnemy);
                ZoneSpwnEnemies.appendChild(EnemyArea);

            }, 50);
        }


        function attack(event) {
            let attackCircle = document.createElement('div');
            let attackCircleBigger = document.createElement('div');

            attackCircle.classList.add('attack');
            attackCircleBigger.classList.add('attack-zone');

            if (event.code == 'Space') {
                attackCircle.classList.add('attack-animation');
                attackCircleBigger.classList.add('attack-animation');

                attackCircle.style.left = Player.style.left;
                attackCircleBigger.style.left = Player.style.left;

                playerZone.appendChild(attackCircle);
                playerZone.appendChild(attackCircleBigger);

                let enemies = document.querySelectorAll(".enemy");
                let biggerArea = document.querySelectorAll(".bigger-enemy-area");

                for (let i = 0; i < enemies.length; i++) {
                    let OneEnemy = enemies[i];
                    let BigArea = biggerArea[i];

                    let enemyBound = BigArea.getBoundingClientRect();



                    let counterInterval = setInterval(() => {
                        let attackBound = attackCircle.getBoundingClientRect();

                        console.log(attackBound.top);

                        if (attackBound.left >= enemyBound.left &&
                            attackBound.right <= enemyBound.right &&
                            attackBound.top >= enemyBound.top &&
                            attackBound.bottom >= enemyBound.bottom ||
                            attackBound.top == enemyBound.top) {

                               
                            OneEnemy.parentElement.removeChild(OneEnemy);
                            BigArea.parentElement.removeChild(BigArea);

                            attackCircle.remove();
                            attackCircleBigger.remove();
                            
                            Tottalscore();
                        }
                    }, 700);

                    attackCircle.addEventListener("animationend", () => {
                        attackCircle.remove();
                        clearInterval(counterInterval);
                    });

                    attackCircleBigger.addEventListener("animationend", () => {
                        attackCircleBigger.remove();
                    });

                }
            }




        }
        window.addEventListener('keydown', attack);
    }
    setInterval(() => {
        enemies();
    }, 2000);




}
// allActions();
// startMenuOfgame.style.display="none";

//Menu Start


startMenu();

export function levelOne() {
    lvlOne.style.display = "flex";

    setTimeout(() => {
        allActions();
    }, 3000);

    lvlOne.addEventListener("animationend", () => {
        lvlOne.style.display = "none";
    });
}

let level = 1;

function levels() {
    OtherLevels.style.display = "flex";

    level++;
    OtherLevels.innerHTML = `
       <div class="main-lvl-block">
       <p class="level-text">Level ${level}</p>
       </div>   
       `;

    OtherLevels.addEventListener("animationend", () => {
        OtherLevels.style.display = "none";
    });

}
//убрал поведение браузера на скрол при спейсе
var SPACE_KEYCODE = 32;
document.onkeydown = function (e) {
    var keycode = e.keyCode || e.charCode,
        body = document.body;

    if (keycode != SPACE_KEYCODE)
        return;

    e.preventDefault();
    body.style.overflow = body.style.overflow == 'hidden' ? 'auto' : 'hidden';
};