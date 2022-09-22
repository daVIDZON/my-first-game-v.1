const Player = document.querySelector('.persone');
const Attack = document.querySelector('.attack');
const attackZone=document.querySelector('.attack-zone');
const ZoneArea = document.querySelector('.main-area');
const ZoneSpwnEnemies = document.querySelector('.ZoneSpwnEnemies');
const playerZone = document.querySelector('.PlayerZone');
const WholeArea = document.querySelector('.area');
const removeEnemyArea = document.querySelector('.enemy-animation');
const startGame = document.querySelector('.game-start');
const startMenuOfgame = document.querySelector('.start-menu');
const score =  document.querySelector('.main-score');

//timer
let timerNum = document.querySelector('.timer-style');
const clock = document.querySelector('.clock');


let posX = 700;
let posY = 75;



function allActions() {
    window.addEventListener('keydown', move);


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

    function move(event) {
        // if (event.code == 'KeyW' && Player.style.top >= '21%') {
        //     posY -= 3;
        // } 
        if (event.code == 'KeyA' && posX >= 365) {
            posX -= 30;
            // } else if (event.code == 'KeyS' && Player.style.top <= '73%') {
            //     posY += 3;
        } else if (event.code == 'KeyD' && posX <= 1030) {
            posX += 31;
        }

        Player.style.cssText = `
         top:${posY}%;
         left:${posX}px;
        transition-duration: 0.3s;
        `;
    }

//Score

    let scoreNum = 0 ;
   function Tottalscore(){
    scoreNum +=1;

    if(scoreNum <= 10){
        score.innerHTML=`
        <p class="score-style-1">Score</p>
                    <p class="dots">:</p>
                    <p class="score-style">0${scoreNum}</p>
        `;
    }else{
        score.innerHTML=`
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

        const space = Math.floor(Math.random() * 1000);
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
            let attackCircleBigger=document.createElement('div');

            attackCircle.classList.add('attack');
            attackCircleBigger.classList.add('attack-zone');

            if (event.code == 'Space') {
                attackCircle.classList.add('attack-animation');
                attackCircleBigger.classList.add('attack-animation');

                attackCircle.style.left = Player.style.left;
                attackCircleBigger.style.left = Player.style.left;
                playerZone.appendChild(attackCircle);
                playerZone.appendChild(attackCircleBigger);
            }

            attackCircle.addEventListener("animationend", () => {
                attackCircle.remove();
            });
            attackCircleBigger.addEventListener("animationend", () => {
                attackCircleBigger.remove();
            });




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

            let enemies = document.querySelectorAll(".enemy");
            let biggerArea =  document.querySelectorAll(".bigger-enemy-area");

            for (let i = 0; i < enemies.length; i++) {
                let OneEnemy = enemies[i];
                let BigArea = biggerArea[i];

                let enemyBound = BigArea.getBoundingClientRect();
                let attackBound = attackCircleBigger.getBoundingClientRect();

                if (attackBound.left >= enemyBound.left &&
                    attackBound.right <= enemyBound.right) {

                    OneEnemy.parentElement.removeChild(OneEnemy);
                    BigArea.parentElement.removeChild(BigArea);
                    Tottalscore();
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

function startMenu() {
    ZoneArea.style.display = "none";

    startGame.addEventListener("click", () => {
        ZoneArea.style.display = "flex";
        startMenuOfgame.style.display = "none";
        allActions();
    });


}
startMenu();