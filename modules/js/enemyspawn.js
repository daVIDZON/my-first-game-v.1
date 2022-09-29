

function enemies() {
    const ZoneSpwnEnemies = document.querySelector('.ZoneSpwnEnemies');
    
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

}

export default enemies;