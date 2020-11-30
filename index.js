window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sounds');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const colors = [
        'rgb(138, 43, 226)',
        'rgb(255, 175, 2)',
        'rgb(253, 16, 8)',
        'rgb(52, 181, 255)',
        'rgb(255, 0, 157)',
        'rgb(27, 255, 129)'
    ]

    pads.forEach((pad, index) => {
        pad.addEventListener('click', function() {
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubbles(index);
        });
    });

    const createBubbles = index => {
        const bubble = document.createElement('div');
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = "jump 1s ease";
        bubble.addEventListener('animationend', function() {
            visual.removeChild(this);
        });
    }
});