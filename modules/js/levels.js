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

export {level,levels};