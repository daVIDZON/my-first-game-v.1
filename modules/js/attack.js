import Tottalscore from "./score";

 function attack(event) {
    const Player = document.querySelector('.persone');
    const playerZone = document.querySelector('.PlayerZone');

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

            attackCircle.addEventListener("animationend", () => {
                attackCircle.remove();
                clearInterval(counterInterval);
            });

            attackCircleBigger.addEventListener("animationend", () => {
                attackCircleBigger.remove();
            });

            let counterInterval = setInterval(() => {
                let attackBound = attackCircle.getBoundingClientRect();


                if (attackBound.left >= enemyBound.left &&
                    attackBound.right <= enemyBound.right &&
                    attackBound.top >= enemyBound.top &&
                    attackBound.bottom >= enemyBound.bottom ||
                    attackBound.top == enemyBound.top) {

                        Tottalscore();

                    OneEnemy.remove();
                    BigArea.remove();

                    // attackCircle.remove();
                    // attackCircleBigger.remove();
                    
                }
            }, 700);

        }
    }




}

export default attack;