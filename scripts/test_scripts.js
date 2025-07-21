const track = document.querySelector('.carousel-group');
const items = Array.from(track.children);
const prevButton = document.querySelector('.carousel-button-prev');
const nextButton = document.querySelector('.carousel-button-next');
const expandButton = document.querySelector('.carousel-button-expand');
const expandImage = document.querySelector('.carousel-expand-image');
const root = document.documentElement;
const background = document.querySelector('.carousel-background');
const darkeners = document.querySelector('.darkeners');
const title = document.querySelector('.carousel-title');
const release = document.querySelector('.carousel-release');

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

  background.style.opacity = "0";
  background.addEventListener('transitionend', () => {
    updateCaroBackground();
    background.style.opacity = "1";
  }, { once: true });

  track.addEventListener('transitionend', () => {
    if (currentIndex < 2) {
      snapTo((items.length - 1) + 2);
    }
  }, { once: true });
}

function carouselNext() {
  currentIndex++;
  updatePosition();

  background.style.opacity = "0";
  background.addEventListener('transitionend', () => {
    updateCaroBackground();
    background.style.opacity = "1";
  }, { once: true });

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

function updateCaroBackground() {
  if (mobileView == 1) return;
  const background = document.querySelector('.carousel-background');
  switch (currentIndex) {
    case 1:
      //match case 7!
      background.style.backgroundImage = "url(styles/images/SHAHARAZON_background.png)";
      break;
    case 2:
      background.style.backgroundImage = "url(styles/images/XCVB_background.png)";
      break;
    case 3:
      background.style.backgroundImage = "url(styles/images/KillProtocol_background.png)";
      break;
    case 4:
      background.style.backgroundImage = "url()";
      break;
    case 5:
      background.style.backgroundImage = "url()";
      break;
    case 6:
      background.style.backgroundImage = "url()";
      break;
    case 7:
      background.style.backgroundImage = "url(styles/images/SHAHARAZON_background.png)";
      break;
    case 8:
      //match case 2!
      background.style.backgroundImage = "url(styles/images/XCVB_background.png)";
      break;
    default:
      console.log("unexpected!");
  }
}

function updateCaroDescription() {
  if (mobileView == 1) return;
  const descriptionBG = document.querySelector('.carousel-description-background > div');
  const descriptionTX = document.querySelector('.carousel-description-text > div');
  document.querySelector('.carousel-description-text').style.perspective = "0px";
  switch (currentIndex) {
    case 2:
      descriptionBG.className =  'carousel-description-background-XCVB';
      descriptionTX.className =  'carousel-description-text-XCVB';
      break;
    case 3:
      descriptionBG.className =  'carousel-description-background-KillProtocol';
      descriptionTX.className =  'carousel-description-text-KillProtocol';
      document.querySelector('.carousel-description-text').style.perspective = "200px";
      break;
    case 4:
      descriptionBG.className =  'carousel-description-background-MageHand';
      descriptionTX.className =  'carousel-description-text-MageHand';
      break;
    case 5:
      descriptionBG.className =  'carousel-description-background-goblinknight';
      descriptionTX.className =  'carousel-description-text-goblinknight';
      break;
    case 6:
      descriptionBG.className =  'carousel-description-background-WyrmCanyon';
      descriptionTX.className =  'carousel-description-text-WyrmCanyon';
      break;
    case 7:
      descriptionBG.className =  'carousel-description-background-SHAHARAZON';
      descriptionTX.className =  'carousel-description-text-SHAHARAZON';
      break;
    default:
      console.log("unexpected!");
  }
}

async function updateTitle() {
  if (mobileView == 1) return;
  switch (currentIndex) {
    case 2:
      await type(title, "XCVB", 20);
      break;
    case 3:
      await type(title, "Kill Protocol", 20);
      break;
    case 4:
      await type(title, "Mage Hand", 20);
      break;
    case 5:
      await type(title, "goblin knight", 20);
      break;
    case 6:
      await type(title, "Wyrm Canyon", 20);
      break;
    case 7:
      await type(title, "SHAHARAZON", 20);
      break;
    default:
      console.log("unexpected!");
  }
}

function updateRelease() {
  if (mobileView == 1) return;
  switch (currentIndex) {
    case 2:
      type(release, "May 25th 2025", 20);
      break;
    case 3:
      type(release, "October 11th 2024", 20);
      break;
    case 4:
      type(release, "July 31st 2024", 20);
      break;
    case 5:
      type(release, "May 11th 2024", 20);
      break;
    case 6:
      type(release, "April 20th 2024", 20);
      break;
    case 7:
      type(release, "March 14th 2024", 20);
      break;
    default:
      console.log("unexpected!");
  }
}

function hideCaroDescription() {
  const background = document.querySelector('.carousel-description-background > div');
  background.className = 'carousel-description-background-null';
}

async function expandCaroItem() {
  updateCaroImage();
  updateCaroDescription();
  //console.log("expanded");
  expandButton.style.transform = `scale(${1, 1})`;
  expandImage.style.display = "block";
  expandImage.style.opacity = "1";

  darkeners.style.display = "flex"
  darkeners.style.opacity = "1";

  title.style.display = "block";

  release.style.display = "block";

  await updateTitle();
  updateRelease();
}

function unexpandCaroItem() {
  hideCaroDescription();
  //console.log("un-expanded");
  expandButton.style.transform = `scale(${0.86, 0.86})`;
  expandImage.style.opacity = "0";
  
  darkeners.style.opacity = "0";

  title.style.display = "none";
  title.textContent = "";

  release.style.display = "none";
  release.textContent = "";
  
  darkeners.addEventListener('transitionend', () => {
    darkeners.style.display = "none"
  }, { once: true });
}



async function type(item, text, timeout) {
  //title.textContent = "";
  console.log("the length is", text.length)
  let size = text.length;
  for (i = 0; i < size; i++) {
    item.textContent += text.charAt(i);
    await sleep(timeout);
    console.log("A")
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
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
updateCaroBackground();
updateTrueGap();
snapTo(2);