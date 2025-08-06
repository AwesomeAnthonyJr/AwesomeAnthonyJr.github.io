const recButton = document.querySelector('.rec-switch > button');
const recButtonIndicator = document.querySelector('.rec-switch > img');
const storeButton = document.querySelector('.store-switch > button');
const storeButtonIndicator = document.querySelector('.store-switch > img');


let rec_view = false;
let store_link = false;

function updateDisplayHeight() {
    let temp;
    if (rec_view) {
        const recs = document.querySelector('.reccomendations');
        temp = recs.scrollHeight;
    } else {
        const icons = document.querySelector('.text-icons');
        temp = icons.scrollHeight;
    }
    document.documentElement.style.setProperty('--display-height', `${temp}px`);
}

function updateButtons() {
    var temp = recButton.scrollHeight;
    document.documentElement.style.setProperty('--display-button-height', `${temp}px`);
    if (rec_view) {
        recButtonIndicator.src = "/styles/images/WEB_boolean_true.png";
    } else {
        recButtonIndicator.src = "/styles/images/WEB_boolean_false.png";
    }

    if (store_link) {
        storeButtonIndicator.src = "/styles/images/WEB_boolean_true.png";
    } else {
        storeButtonIndicator.src = "/styles/images/WEB_boolean_false.png";
    }
}

function updateRecSpin() {
    const icons = document.querySelector('.text-icons');
    const recs = document.querySelector('.reccomendations');

    if (rec_view) {
        icons.style.transform = "rotateY(90deg)";
        recs.style.transform = "rotateY(-90deg)";

        icons.addEventListener('transitionend', () => {
            icons.style.transform = "rotateY(180deg)";
            recs.style.transform = "rotateY(0deg)";
            icons.style.zIndex = 1;
            recs.style.zIndex = 2;
        }, { once: true });

    } else {
        icons.style.transform = "rotateY(90deg)";
        recs.style.transform = "rotateY(-90deg)";

        icons.addEventListener('transitionend', () => {
            icons.style.transform = "rotateY(0deg)";
            recs.style.transform = "rotateY(-180deg)";
            icons.style.zIndex = 2;
            recs.style.zIndex = 1;
        }, { once: true });
    }
}

function updateStoreSpin() {
    const icon_SHAHARAZON = document.querySelector('.grid-SHAHARAZON');
    const icon_WyrmCanyon = document.querySelector('.grid-WyrmCanyon');
    const icon_goblinknight = document.querySelector('.grid-goblinknight');
    const icon_MageHand = document.querySelector('.grid-MageHand');
    const icon_KillProtocol = document.querySelector('.grid-KillProtocol');
    const icon_XCVB = document.querySelector('.grid-XCVB');

    if (store_link) {
        icon_SHAHARAZON.style.transform = "rotateY(90deg)";
        icon_WyrmCanyon.style.transform = "rotateY(90deg)";
        icon_goblinknight.style.transform = "rotateY(90deg)";
        icon_MageHand.style.transform = "rotateY(90deg)";
        icon_KillProtocol.style.transform = "rotateY(90deg)";
        icon_XCVB.style.transform = "rotateY(90deg)";

        icon_SHAHARAZON.addEventListener('transitionend', () => {
            icon_SHAHARAZON.style.backgroundImage = `url("styles/images/SHAHARAZON_text_icon_store.png")`;
            icon_WyrmCanyon.style.backgroundImage = `url("styles/images/WyrmCanyon_text_icon_store.png")`;
            icon_goblinknight.style.backgroundImage = `url("styles/images/goblinknight_text_icon_store.png")`;
            icon_MageHand.style.backgroundImage = `url("styles/images/MageHand_text_icon_store.png")`;
            icon_KillProtocol.style.backgroundImage = `url("styles/images/KillProtocol_text_icon_store.png")`;
            icon_XCVB.style.backgroundImage = `url("styles/images/XCVB_text_icon_store.png")`;

            icon_SHAHARAZON.querySelector('a').href = "https://leaflight-studios.itch.io/agj0project";
            icon_WyrmCanyon.querySelector('a').href = "https://leaflight-studios.itch.io/wyrm-canyon";
            icon_goblinknight.querySelector('a').href = "https://leaflight-studios.itch.io/goblin-knight";
            icon_MageHand.querySelector('a').href = "https://leaflight-studios.itch.io/mage-hand";
            icon_KillProtocol.querySelector('a').href = "https://leaflight-studios.itch.io/kill-protocol";
            icon_XCVB.querySelector('a').href = "https://leaflight-studios.itch.io/xcvb";

            icon_SHAHARAZON.style.transform = "rotateY(0deg)";
            icon_WyrmCanyon.style.transform = "rotateY(0deg)";
            icon_goblinknight.style.transform = "rotateY(0deg)";
            icon_MageHand.style.transform = "rotateY(0deg)";
            icon_KillProtocol.style.transform = "rotateY(0deg)";
            icon_XCVB.style.transform = "rotateY(0deg)";

            icon_SHAHARAZON.addEventListener('transitionend', () => {
                icon_SHAHARAZON.style.transform = "";
                icon_WyrmCanyon.style.transform = "";
                icon_goblinknight.style.transform = "";
                icon_MageHand.style.transform = "";
                icon_KillProtocol.style.transform = "";
                icon_XCVB.style.transform = "";
            }, { once: true });

        }, { once: true });

    } else {
        icon_SHAHARAZON.style.transform = "rotateY(-90deg)";
        icon_WyrmCanyon.style.transform = "rotateY(-90deg)";
        icon_goblinknight.style.transform = "rotateY(-90deg)";
        icon_MageHand.style.transform = "rotateY(-90deg)";
        icon_KillProtocol.style.transform = "rotateY(-90deg)";
        icon_XCVB.style.transform = "rotateY(-90deg)";

        icon_SHAHARAZON.addEventListener('transitionend', () => {
            icon_SHAHARAZON.style.backgroundImage = `url("styles/images/SHAHARAZON_text_icon.png")`;
            icon_WyrmCanyon.style.backgroundImage = `url("styles/images/WyrmCanyon_text_icon.png")`;
            icon_goblinknight.style.backgroundImage = `url("styles/images/goblinknight_text_icon.png")`;
            icon_MageHand.style.backgroundImage = `url("styles/images/MageHand_text_icon.png")`;
            icon_KillProtocol.style.backgroundImage = `url("styles/images/KillProtocol_text_icon.png")`;
            icon_XCVB.style.backgroundImage = `url("styles/images/XCVB_text_icon.png")`;

            //REPLACE WITH GAME PAGE LINKS
            icon_SHAHARAZON.querySelector('a').href = "/games/";
            icon_WyrmCanyon.querySelector('a').href = "/games/";
            icon_goblinknight.querySelector('a').href = "/games/";
            icon_MageHand.querySelector('a').href = "/games/";
            icon_KillProtocol.querySelector('a').href = "/games/";
            icon_XCVB.querySelector('a').href = "/games/";

            icon_SHAHARAZON.style.transform = "rotateY(0deg)";
            icon_WyrmCanyon.style.transform = "rotateY(0deg)";
            icon_goblinknight.style.transform = "rotateY(0deg)";
            icon_MageHand.style.transform = "rotateY(0deg)";
            icon_KillProtocol.style.transform = "rotateY(0deg)";
            icon_XCVB.style.transform = "rotateY(0deg)";

            icon_SHAHARAZON.addEventListener('transitionend', () => {
                icon_SHAHARAZON.style.transform = "";
                icon_WyrmCanyon.style.transform = "";
                icon_goblinknight.style.transform = "";
                icon_MageHand.style.transform = "";
                icon_KillProtocol.style.transform = "";
                icon_XCVB.style.transform = "";
            }, { once: true });
        }, { once: true });
    }
}

recButton.addEventListener('click', () => {
    rec_view = !rec_view;
    updateRecSpin();
    updateButtons();
    updateDisplayHeight();
});

storeButton.addEventListener('click', () => {
    store_link = !store_link;
    updateStoreSpin();
    updateButtons();
});

window.addEventListener('resize', () => {
    updateButtons();
    updateDisplayHeight();
});

updateButtons();
updateDisplayHeight();