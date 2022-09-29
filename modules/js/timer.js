

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


export default timeout;