

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

export default Tottalscore;
