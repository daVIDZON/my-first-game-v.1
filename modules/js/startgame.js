import { levelOne } from '../script'

function startMenu() {
    const ZoneArea = document.querySelector('.main-area');
    const startGame = document.querySelector('.game-start');
    const startMenuOfgame = document.querySelector('.start-menu');

    ZoneArea.style.display = "none";

    startGame.addEventListener("click", () => {
        ZoneArea.style.display = "flex";
        startMenuOfgame.style.display = "none";
        levelOne();
    });


}

export default startMenu;