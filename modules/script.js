import startMenu from "./js/startgame";
import timeout from './js/timer' ;
import move from "./js/movement";
import Tottalscore from "./js/score";
import removingScrollBrowser from "./js/removescroll";
import attack from "./js/attack";
import enemies from "./js/enemyspawn";
import settings from "./js/settingsmenu";

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


//timer
let timerNum = document.querySelector('.timer-style');
const clock = document.querySelector('.clock');




 export function allActions() {

    window.addEventListener('keydown', move);
    window.addEventListener('keydown', attack);

    //timer
    timeout();
  
   //enemies spawn
    setInterval(() => {
        enemies();
    }, 2000);


}
// allActions();
// startMenuOfgame.style.display="none";



//Menu Start
startMenu();

settings();

//removed default browser behavior

removingScrollBrowser();

