/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./modules/js/attack.js":
/*!******************************!*\
  !*** ./modules/js/attack.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _score__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./score */ "./modules/js/score.js");


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

                        (0,_score__WEBPACK_IMPORTED_MODULE_0__["default"])();

                    OneEnemy.remove();
                    BigArea.remove();

                    // attackCircle.remove();
                    // attackCircleBigger.remove();
                    
                }
            }, 700);

        }
    }




}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (attack);

/***/ }),

/***/ "./modules/js/enemyspawn.js":
/*!**********************************!*\
  !*** ./modules/js/enemyspawn.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (enemies);

/***/ }),

/***/ "./modules/js/level1.js":
/*!******************************!*\
  !*** ./modules/js/level1.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _script__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../script */ "./modules/script.js");


function levelOne() {
    const lvlOne = document.querySelector('.level-1');

    lvlOne.style.display = "flex";

    setTimeout(() => {
        (0,_script__WEBPACK_IMPORTED_MODULE_0__.allActions)();
    }, 3000);

    lvlOne.addEventListener("animationend", () => {
        lvlOne.style.display = "none";
    });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (levelOne);

/***/ }),

/***/ "./modules/js/levels.js":
/*!******************************!*\
  !*** ./modules/js/levels.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "level": () => (/* binding */ level),
/* harmony export */   "levels": () => (/* binding */ levels)
/* harmony export */ });
let level = 1;

function levels() {
    const OtherLevels = document.querySelector('.OtherLvl');
    
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



/***/ }),

/***/ "./modules/js/movement.js":
/*!********************************!*\
  !*** ./modules/js/movement.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
let posX = 50;
let posY = 75;

function move(event) {
    const Player = document.querySelector('.persone');
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (move);

/***/ }),

/***/ "./modules/js/removescroll.js":
/*!************************************!*\
  !*** ./modules/js/removescroll.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function removingScrollBrowser(){
    var SPACE_KEYCODE = 32;
    document.onkeydown = function (e) {
        var keycode = e.keyCode || e.charCode,
            body = document.body;
    
        if (keycode != SPACE_KEYCODE)
            return;
    
        e.preventDefault();
        body.style.overflow = body.style.overflow == 'hidden' ? 'auto' : 'hidden';
    };  
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (removingScrollBrowser);

/***/ }),

/***/ "./modules/js/score.js":
/*!*****************************!*\
  !*** ./modules/js/score.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


let scoreNum = 0; 

function Tottalscore() {
    const score = document.querySelector('.main-score');
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tottalscore);


/***/ }),

/***/ "./modules/js/settingsmenu.js":
/*!************************************!*\
  !*** ./modules/js/settingsmenu.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
 function settings(){
  const settingsBtn=document.querySelector('.game-settings');
   const settingMenu=document.querySelector('.settings-menu');

  settingsBtn.addEventListener('click',()=>{
   settingMenu.style.display="flex";
   settingMenu.classList.add('settings-menu-animation');
  });



 }
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (settings);

/***/ }),

/***/ "./modules/js/startgame.js":
/*!*********************************!*\
  !*** ./modules/js/startgame.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _js_level1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../js/level1 */ "./modules/js/level1.js");
/* harmony import */ var _js_levels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/levels */ "./modules/js/levels.js");



function startMenu() {
    const ZoneArea = document.querySelector('.main-area');
    const startGame = document.querySelector('.game-start');
    const startMenuOfgame = document.querySelector('.start-menu');

    ZoneArea.style.display = "none";

    startGame.addEventListener("click", () => {
        ZoneArea.style.display = "flex";
        startMenuOfgame.style.display = "none";
        setInterval(_js_levels__WEBPACK_IMPORTED_MODULE_1__.levels, 120000);
        (0,_js_level1__WEBPACK_IMPORTED_MODULE_0__["default"])();
    });


}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startMenu);

/***/ }),

/***/ "./modules/js/timer.js":
/*!*****************************!*\
  !*** ./modules/js/timer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


function timeout() {
    let timerNum = document.querySelector('.timer-style');
    const clock = document.querySelector('.clock');

    let sec = 0;
    let minut = 0;


    setInterval(seconds, 1000);



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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timeout);

/***/ }),

/***/ "./modules/script.js":
/*!***************************!*\
  !*** ./modules/script.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "allActions": () => (/* binding */ allActions)
/* harmony export */ });
/* harmony import */ var _js_startgame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/startgame */ "./modules/js/startgame.js");
/* harmony import */ var _js_timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/timer */ "./modules/js/timer.js");
/* harmony import */ var _js_movement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/movement */ "./modules/js/movement.js");
/* harmony import */ var _js_score__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/score */ "./modules/js/score.js");
/* harmony import */ var _js_removescroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/removescroll */ "./modules/js/removescroll.js");
/* harmony import */ var _js_attack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/attack */ "./modules/js/attack.js");
/* harmony import */ var _js_enemyspawn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/enemyspawn */ "./modules/js/enemyspawn.js");
/* harmony import */ var _js_settingsmenu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/settingsmenu */ "./modules/js/settingsmenu.js");









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




 function allActions() {

    window.addEventListener('keydown', _js_movement__WEBPACK_IMPORTED_MODULE_2__["default"]);
    window.addEventListener('keydown', _js_attack__WEBPACK_IMPORTED_MODULE_5__["default"]);

    //timer
    (0,_js_timer__WEBPACK_IMPORTED_MODULE_1__["default"])();
  
   //enemies spawn
    setInterval(() => {
        (0,_js_enemyspawn__WEBPACK_IMPORTED_MODULE_6__["default"])();
    }, 2000);


}
// allActions();
// startMenuOfgame.style.display="none";



//Menu Start
(0,_js_startgame__WEBPACK_IMPORTED_MODULE_0__["default"])();

(0,_js_settingsmenu__WEBPACK_IMPORTED_MODULE_7__["default"])();

//removed default browser behavior

(0,_js_removescroll__WEBPACK_IMPORTED_MODULE_4__["default"])();



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./modules/script.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map