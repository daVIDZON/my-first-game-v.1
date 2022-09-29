import levelOne from "../js/level1";
import {levels} from '../js/levels';

function startMenu() {
    const ZoneArea = document.querySelector('.main-area');
    const startGame = document.querySelector('.game-start');
    const startMenuOfgame = document.querySelector('.start-menu');

    ZoneArea.style.display = "none";

    startGame.addEventListener("click", () => {
        ZoneArea.style.display = "flex";
        startMenuOfgame.style.display = "none";
        setInterval(levels, 120000);
        levelOne();
    });


}

export default startMenu;