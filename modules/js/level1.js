import {allActions} from '../script';

function levelOne() {
    const lvlOne = document.querySelector('.level-1');

    lvlOne.style.display = "flex";

    setTimeout(() => {
        allActions();
    }, 3000);

    lvlOne.addEventListener("animationend", () => {
        lvlOne.style.display = "none";
    });
}

export default levelOne;