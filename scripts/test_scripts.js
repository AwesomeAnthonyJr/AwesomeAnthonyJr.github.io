const recButton = document.querySelector('.rec-switch > button');
const recButtonIndicator = document.querySelector('.rec-switch > img');

let rec_view = false;

function updateDisplayHeight() {
    const icons = document.querySelector('.text-icons');
    var temp = icons.scrollHeight;
    document.documentElement.style.setProperty('--display-height', `${temp}px`);
}

function updateRecButton() {
    var temp = recButton.scrollHeight;
    document.documentElement.style.setProperty('--display-button-height', `${temp}px`);
    if (rec_view) {
        recButtonIndicator.src = "styles/images/WEB_boolean_true.png";
    } else {
        recButtonIndicator.src = "styles/images/WEB_boolean_false.png";
    }
}

function updateRecSpin() {
    const icons = document.querySelector('.text-icons');
    const recs = document.querySelector('.reccomendations');

    if (rec_view) {
        icons.style.transform = "rotateY(90deg)"
        recs.style.transform = "rotateY(-90deg)"

        icons.addEventListener('transitionend', () => {
            icons.style.transform = "rotateY(180deg)"
            recs.style.transform = "rotateY(0deg)"
            icons.style.zIndex = 1;
            recs.style.zIndex = 2;
        }, { once: true });

    } else {
        icons.style.transform = "rotateY(90deg)"
        recs.style.transform = "rotateY(-90deg)"

        icons.addEventListener('transitionend', () => {
            icons.style.transform = "rotateY(0deg)"
            recs.style.transform = "rotateY(-180deg)"
            icons.style.zIndex = 2;
            recs.style.zIndex = 1;
        }, { once: true });
    }
}

recButton.addEventListener('click', () => {
    rec_view = !rec_view;
    console.log("switch!");
    updateRecSpin();
    updateRecButton();
});

window.addEventListener('resize', () => {
    updateRecButton();
    updateDisplayHeight();
});

updateRecButton();
updateDisplayHeight();