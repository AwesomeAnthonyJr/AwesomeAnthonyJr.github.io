const track = document.querySelector('.carousel-group');
const items = Array.from(track.children);
const prevButton = document.querySelector('.carousel-button-prev');
const nextButton = document.querySelector('.carousel-button-next');
const expandButton = document.querySelector('.carousel-button-expand');
const expandImage = document.querySelector('.carousel-expand-image')
const root = document.documentElement;

let caroWidth = getComputedStyle(root).getPropertyValue('--caro-width').trim();
let mobileView = getComputedStyle(root).getPropertyValue('--mobile-view').trim();

//console.log(caroGap);

let expanded = false;
let currentIndex = 2;
let true_caro_gap = 0;
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
  if (mobileView == 1){
    track.style.transform = `translateX(-${currentIndex * (slideWidth) - caro_offset - true_caro_gap/2}px)`; 
  } else {
    track.style.transform = `translateX(-${currentIndex * (slideWidth + true_caro_gap) - caro_offset - true_caro_gap/2}px)`; 
  }
  
}

function snapTo(index) {
  track.style.transition = 'none';
  currentIndex = index;
  updatePosition();

  void track.offsetWidth;
  track.style.transition = 'transform 0.2s ease';
}

function updateTrueGap() {
  caroWidth = getComputedStyle(root).getPropertyValue('--caro-width').trim();
  mobileView = getComputedStyle(root).getPropertyValue('--mobile-view').trim();
  true_caro_gap = (window.innerWidth - (2 * parseInt(caroWidth)))/2;
  document.documentElement.style.setProperty('--caro-gap', `${true_caro_gap}px`);
}

function carouselPrev() {
  currentIndex--;
  updatePosition();
  console.log(currentIndex);

  track.addEventListener('transitionend', () => {
    if (currentIndex < 2) {
      snapTo((items.length - 1) + 2);
    }
  }, { once: true });
}

function carouselNext() {
  currentIndex++;
  updatePosition();

  track.addEventListener('transitionend', () => {
    if (currentIndex > (items.length - 1) + 2) {
      snapTo(2);
    }
  }, { once: true });
}

function updateCaroImage() {
  let url_ender = "300_400.png"
  if (mobileView == 0) {
    if (parseInt(caroWidth) == 300) {
      url_ender = "360_480.png"
    } else {
      url_ender = "420_560.png"
    }
  }
  switch (currentIndex) {
    case 2:
      console.log("XCVB");
      expandImage.style.backgroundImage = "url(" + "styles/images/XCVB_display_" + url_ender + ")";
      break;
    case 3:
      console.log("KILLPROTOCOL");
      expandImage.style.backgroundImage = "url(" + "styles/images/KillProtocol_display_" + url_ender + ")";
      break;
    case 4:
      console.log("MAGEHAND");
      expandImage.style.backgroundImage = "url(" + "styles/images/MageHand_display_" + url_ender + ")";
      break;
    case 5:
      console.log("GOBLINKNIGHT");
      expandImage.style.backgroundImage = "url(" + "styles/images/goblinknight_display_" + url_ender + ")";
      break;
    case 6:
      console.log("WYRMCANYON");
      expandImage.style.backgroundImage = "url(" + "styles/images/WyrmCanyon_display_" + url_ender + ")";
      break;
    case 7:
      console.log("SHAHARAZON");
      expandImage.style.backgroundImage = "url(" + "styles/images/SHAHARAZON_display_" + url_ender + ")";
      break;
    default:
      console.log("unexpected!");
  }
}

function expandCaroItem() {
  updateCaroImage();
  //console.log("expanded");
  expandButton.style.transform = `scale(${1, 1})`;
  expandImage.style.display = "block";
  expandImage.style.opacity = "1";
}

function unexpandCaroItem() {
  //console.log("un-expanded");
  expandButton.style.transform = `scale(${0.86, 0.86})`;
  expandImage.style.opacity = "0";
  expandButton.addEventListener('transitionend', () => {
    //console.log("TRANSITIONOVER");
    //expandImage.style.display = "none";
  }, { once: true });
}

prevButton.addEventListener('click', () => {
  if (currentIndex < 1) return;
  carouselPrev();
});

nextButton.addEventListener('click', () => {
  if (currentIndex > items.length + 1) return;
  carouselNext();
});

expandButton.addEventListener('click', () => {
  if (mobileView == 1) return;
  if (expanded){
    unexpandCaroItem();
  } else {
    expandCaroItem();
  }
  expanded = !expanded;
});

window.addEventListener('resize', () => {
  caro_offset = window.innerWidth * 0.25;
  updateTrueGap();
  updatePosition();
});
//console.log(items.length)
updateTrueGap();
snapTo(2);