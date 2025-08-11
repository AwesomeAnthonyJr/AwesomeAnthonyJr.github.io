const obscurer1 = document.querySelector('.red-bolt-instructions > .obscurer');

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function bookFloat() {
    const bookSize = document.querySelector('.book-of-memories').getBoundingClientRect();
    const floater = document.querySelector('.book-of-memories-floater');
    floater.style.width = `${bookSize.width - 120}px`;
    if (window.innerWidth > 1400){
        floater.style.height = `${bookSize.height - 120}px`;
    } else {
        floater.style.height = `${bookSize.height - 60}px`;
    }
    
    console.log('float');
}

function drawControlsLines() {
    const svg = document.querySelector('.controls-foreground > svg');
    const lines = Array.from(svg.children);
    const svgPos = svg.getBoundingClientRect();

    // 0, 1, 2 = yellow
    let controls = document.querySelector('.controls-y').getBoundingClientRect();
    let anchor = document.querySelector('.yellow-anchor').getBoundingClientRect();

    let x1 = Math.floor(controls.left + (controls.width / 2) - svgPos.left);
    let x2 = Math.floor(anchor.left + (anchor.width / 2) - svgPos.left);

    let y1 = Math.floor(controls.bottom - svgPos.top) - 1;
    let y2 = Math.floor(controls.bottom - svgPos.top) + 30;
    let y3 = Math.floor(anchor.top - svgPos.top) + 2;

    lines[0].setAttribute('x1', x1);
    lines[0].setAttribute('y1', y1);
    lines[0].setAttribute('x2', x1);
    lines[0].setAttribute('y2', y2 + 3);

    lines[1].setAttribute('x1', x1);
    lines[1].setAttribute('y1', y2);
    lines[1].setAttribute('x2', x2);
    lines[1].setAttribute('y2', y2);

    lines[2].setAttribute('x1', x2);
    lines[2].setAttribute('y1', y2 - 3);
    lines[2].setAttribute('x2', x2);
    lines[2].setAttribute('y2', y3);

    // 3, 4 = red
    controls = document.querySelector('.controls-r').getBoundingClientRect();
    anchor = document.querySelector('.red-anchor').getBoundingClientRect();

    x1 = Math.floor(controls.left + (controls.width / 2) - svgPos.left);
    x2 = Math.floor(anchor.left - svgPos.left);

    y1 = Math.floor(controls.bottom - svgPos.top);
    y2 = Math.floor(anchor.bottom - svgPos.top) - 6;

    lines[3].setAttribute('x1', x1);
    lines[3].setAttribute('y1', y1);
    lines[3].setAttribute('x2', x1);
    lines[3].setAttribute('y2', y2 + 3);

    lines[4].setAttribute('x1', x1);
    lines[4].setAttribute('y1', y2);
    lines[4].setAttribute('x2', x2);
    lines[4].setAttribute('y2', y2);

    // 5, 6 = magenta
    controls = document.querySelector('.controls-m').getBoundingClientRect();
    anchor = document.querySelector('.magenta-anchor').getBoundingClientRect();

    x1 = Math.floor(controls.left + (controls.width * 9 / 16) - svgPos.left);
    x2 = Math.floor(anchor.left + (anchor.width) - svgPos.left) - 1;

    y1 = Math.floor(controls.bottom - svgPos.top) - 1;
    y2 = Math.floor(anchor.top - svgPos.top) - 1;

    lines[5].setAttribute('x1', x1);
    lines[5].setAttribute('y1', y1);
    lines[5].setAttribute('x2', x1);
    lines[5].setAttribute('y2', y2 + 3);

    lines[6].setAttribute('x1', x1);
    lines[6].setAttribute('y1', y2);
    lines[6].setAttribute('x2', x2);
    lines[6].setAttribute('y2', y2);

    // 7, 8, 9 = blue
    controls = document.querySelector('.controls-b').getBoundingClientRect();
    anchor = document.querySelector('.blue-anchor').getBoundingClientRect();

    x1 = Math.floor(controls.left + (controls.width / 2) - svgPos.left);
    x2 = Math.floor(anchor.left + (anchor.width / 2) - svgPos.left);

    y1 = Math.floor(controls.top - svgPos.top) + 1;
    y2 = Math.floor(controls.top - svgPos.top) - 50;
    y3 = Math.floor(anchor.bottom - svgPos.top);

    lines[7].setAttribute('x1', x1);
    lines[7].setAttribute('y1', y1);
    lines[7].setAttribute('x2', x1);
    lines[7].setAttribute('y2', y2 - 3);

    lines[8].setAttribute('x1', x1);
    lines[8].setAttribute('y1', y2);
    lines[8].setAttribute('x2', x2);
    lines[8].setAttribute('y2', y2);

    lines[9].setAttribute('x1', x2);
    lines[9].setAttribute('y1', y2 + 3);
    lines[9].setAttribute('x2', x2);
    lines[9].setAttribute('y2', y3);

    // 10, 11 = cyan
    controls = document.querySelector('.controls-c').getBoundingClientRect();
    anchor = document.querySelector('.cyan-anchor').getBoundingClientRect();

    x1 = Math.floor(controls.left + (controls.width / 8) - svgPos.left);
    x2 = Math.floor(anchor.left - svgPos.left) + 1;

    y1 = Math.floor(controls.bottom - svgPos.top) - 1;
    y2 = Math.floor(anchor.top - svgPos.top);

    lines[10].setAttribute('x1', x1);
    lines[10].setAttribute('y1', y1);
    lines[10].setAttribute('x2', x1);
    lines[10].setAttribute('y2', y2 + 3);

    lines[11].setAttribute('x1', x1);
    lines[11].setAttribute('y1', y2);
    lines[11].setAttribute('x2', x2);
    lines[11].setAttribute('y2', y2);

    // 12, 13 14 = green
    controls = document.querySelector('.controls-g').getBoundingClientRect();
    anchor = document.querySelector('.green-anchor').getBoundingClientRect();

    x1 = Math.floor(controls.left + (controls.width / 2) - svgPos.left);
    x2 = Math.floor(anchor.left + (anchor.width * 3 / 4) - svgPos.left) + 1;

    y1 = Math.floor(controls.bottom - svgPos.top) - 1;
    y2 = Math.floor(anchor.bottom - svgPos.top) + 90;
    y3 = Math.floor(anchor.bottom - svgPos.top) - 2;

    lines[12].setAttribute('x1', x1);
    lines[12].setAttribute('y1', y1);
    lines[12].setAttribute('x2', x1);
    lines[12].setAttribute('y2', y2);

    lines[13].setAttribute('x1', x1 + 3);
    lines[13].setAttribute('y1', y2);
    lines[13].setAttribute('x2', x2 - 3);
    lines[13].setAttribute('y2', y2);

    lines[14].setAttribute('x1', x2);
    lines[14].setAttribute('y1', y2);
    lines[14].setAttribute('x2', x2);
    lines[14].setAttribute('y2', y3);
    
}

function drawGameScreenLines() {
    const svg = document.querySelector('.the-game-screen-foreground > svg');
    const shapes = Array.from(svg.children);
    const svgPos = svg.getBoundingClientRect();

    shapes
    //0 = room name
    let explanation = document.querySelector('.room-explanation').getBoundingClientRect();
    let anchor = document.querySelector('.room-anchor').getBoundingClientRect();
    
    let x1 = Math.floor(explanation.right - svgPos.left);
    let x2 = Math.floor(explanation.right - svgPos.left);
    let x3 = Math.floor(500 - svgPos.left);

    let y1 = Math.floor(explanation.top - svgPos.left);
    let y2 = Math.floor(explanation.bottom - svgPos.left);
    let y3 = y2;

    let pointList = shapes[0].points;

    pointList.getItem(0).x = x1;
    pointList.getItem(1).x = x2;
    pointList.getItem(2).x = x3;
    pointList.getItem(0).y = y1;
    pointList.getItem(1).y = y2;
    pointList.getItem(2).y = y3;
}

async function reveal(button) {
    let eye = button.querySelector('.eye-unaware');
    eye.className = 'eye-aware';
    await sleep(500);
    button.style.opacity = 0.0;
    button.style.pointerEvents = 'none';
}

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

    temp = document.querySelector('.room-explanation').scrollHeight;
    document.documentElement.style.setProperty('--room-explanation-height', `${temp}px`);
    temp = document.querySelector('.difficulty-explanation').scrollHeight;
    document.documentElement.style.setProperty('--difficulty-explanation-height', `${temp}px`);
    temp = document.querySelector('.vitals-explanation').scrollHeight;
    document.documentElement.style.setProperty('--vitals-explanation-height', `${temp}px`);
    temp = document.querySelector('.sequence-explanation').scrollHeight;
    document.documentElement.style.setProperty('--sequence-explanation-height', `${temp}px`);
    temp = document.querySelector('.prior-explanation').scrollHeight;
    document.documentElement.style.setProperty('--prior-explanation-height', `${temp}px`);
}

obscurer1.addEventListener('click', () => {
    reveal(obscurer1)
});

window.addEventListener('resize', () => {
    calculateHeights();
    requestAnimationFrame(() => {
        drawControlsLines();
    });
    bookFloat();
    //drawGameScreenLines();
});

window.addEventListener('scroll', () => {
    drawControlsLines();
    bookFloat();
    calculateHeights();
    //drawGameScreenLines();
});

calculateHeights();
drawControlsLines();
bookFloat();
//drawGameScreenLines();
