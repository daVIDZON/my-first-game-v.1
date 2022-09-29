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

export default move;