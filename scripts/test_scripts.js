const track = document.querySelector('.carousel-group');
const items = Array.from(track.children);
const prevButton = document.querySelector('.carousel-button-prev');
const nextButton = document.querySelector('.carousel-button-next');
const root = document.documentElement;
const caroGap = getComputedStyle(root).getPropertyValue('--caro-gap').trim();

//console.log(caroGap);

let currentIndex = 2;
let true_caro_gap = window.innerWidth * (parseInt(caroGap)/100);
let caro_offset = window.innerWidth * 0.25;

//console.log(true_caro_gap);

//magic cloning of carousel items
const firstClone = items[0].cloneNode(true);
const secondClone = items[1].cloneNode(true);
const lastClone = items[items.length - 1].cloneNode(true);
const secondlastClone = items[items.length - 2].cloneNode(true);

track.appendChild(firstClone);
track.appendChild(secondClone);
track.insertBefore(lastClone, items[0]);
track.insertBefore(secondlastClone, lastClone);

const updateditems = Array.from(track.children);

function getSlideWidth() {
  return items[0].getBoundingClientRect().width;
}

function updatePosition() {
  const slideWidth = getSlideWidth();
  track.style.transform = `translateX(-${currentIndex * (slideWidth + true_caro_gap) - caro_offset - true_caro_gap/2}px)`; 
}

function snapTo(index) {
  track.style.transition = 'none';
  currentIndex = index;
  updatePosition();

  void track.offsetWidth;
  track.style.transition = 'transform 0.2s ease';
}

prevButton.addEventListener('click', () => {
  if (currentIndex < 1) return;
  currentIndex--;
  updatePosition();
  console.log(currentIndex);

  track.addEventListener('transitionend', () => {
    if (currentIndex < 2) {
      snapTo((items.length - 1) + 2);
    }
  }, { once: true });
    
});

nextButton.addEventListener('click', () => {
  if (currentIndex > items.length + 2) return;
  currentIndex++;
  updatePosition();

  track.addEventListener('transitionend', () => {
    if (currentIndex > items.length + 1) {
      snapTo(2);
    }
  }, { once: true });
});

window.addEventListener('resize', () => {
  true_caro_gap = window.innerWidth * (parseInt(caroGap)/100);
  caro_offset = window.innerWidth * 0.25;
  updatePosition();
});

//console.log(items.length)
updatePosition();