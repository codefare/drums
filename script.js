// create addEventListener
document.addEventListener('keydown', playSound)

// create play function
function playSound(e) {
//get key code value
let keyCode = e.keyCode;
//select corresponding audio 
let audio = document.querySelector(`audio[data-beats= "${keyCode}"]`);
//select corresponding div
let effect = document.querySelector(`div[data-beats="${keyCode}"]`);   
    audio.load();
    audio.currentTime = "0";
    audio.play();

    addPlaying();
    setTimeout(removePlaying, 200)

// add playing class to div
    function addPlaying() {
        effect.setAttribute('id', 'playing');
    }
//removing playing class from div
    function removePlaying() {
        effect.removeAttribute('id', 'playing');
    }
}
