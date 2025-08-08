function calculateHeights() {
    let temp = 0;
    temp = document.querySelector('.controls-y').scrollHeight;
    document.documentElement.style.setProperty('--controls-y-height', `${temp}px`);
    temp = document.querySelector('.controls-g').scrollHeight;
    document.documentElement.style.setProperty('--controls-g-height', `${temp}px`);
    temp = document.querySelector('.controls-c').scrollHeight;
    document.documentElement.style.setProperty('--controls-c-height', `${temp}px`);
    temp = document.querySelector('.controls-m').scrollHeight;
    document.documentElement.style.setProperty('--controls-m-height', `${temp}px`);
    temp = document.querySelector('.controls-r').scrollHeight;
    document.documentElement.style.setProperty('--controls-r-height', `${temp}px`);
    temp = document.querySelector('.controls-b').scrollHeight;
    document.documentElement.style.setProperty('--controls-b-height', `${temp}px`);
    temp = document.querySelector('.controls-m').scrollWidth;
    document.documentElement.style.setProperty('--controls-m-width', `${temp}px`);
}

calculateHeights();