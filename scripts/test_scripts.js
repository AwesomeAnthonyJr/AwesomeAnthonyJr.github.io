const track = document.querySelector('.carousel-group');
const items = Array.from(track.children);
const prevButton = document.querySelector('.carousel-button-prev');
const nextButton = document.querySelector('.carousel-button-next');
const expandButton = document.querySelector('.carousel-button-expand');
const mobileExpandButton = document.querySelector('.carousel-button-mobile');
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
let mobileExpanded = false;
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
  if (parseInt(window.innerWidth) <= 600){
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

  if (mobileExpanded){
    unexpandMobileDesc();
  }

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
  
  if (mobileExpanded){
    unexpandMobileDesc();
  }

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
  const descriptionCR = document.querySelector('.carousel-description-credit > div');

  descriptionTX.innerHTML = '';
  descriptionCR.innerHTML = '';
  switch (currentIndex) {
    case 2:
      descriptionBG.className =  'carousel-description-background-XCVB';
      descriptionTX.className =  'carousel-description-text-XCVB';
      descriptionCR.className =  'carousel-description-credit-XCVB';
      
      descriptionTX.innerHTML = `<p>XCVB is a roguelike deckbuilder / 2D platformer mashup originally created in for Untitled Game Jam #110. You play as a lone gambler with a deck of magical cards who ascend's Starface's tower in order to reclaim the $5 they are owed. Featuring 16 different movement cards (for active abilities), and 24 different badges (for passive perks), There are countless combinations to discover. The enemies in the tower get stronger as you climb, but on your own terms, as you get to decide if they become faster or stronger each floor. You can play XCVB for free today on it's <a href="https://leaflight-studios.itch.io/xcvb">itch.io</a> page, or <a href="https://leaflight-studios.itch.io/">learn more about it here.</a></p>`;
      descriptionCR.innerHTML = `<p>Created By: Anthony D. Salsbury,<br> Owen Hickman, & Samuel Radulski</p>`
      break;
    case 3:
      descriptionBG.className =  'carousel-description-background-KillProtocol';
      descriptionTX.className =  'carousel-description-text-KillProtocol';
      descriptionCR.className =  'carousel-description-credit-KillProtocol';

      descriptionTX.innerHTML = `<p><span>Kill Protocol is a unique two-color shooter created originally for 1-BIT JAM #4. Set in a future where clones are easily accessible, lives have little meaning, you must pay back $4500 of debt to regain your freedom, and taking assasination jobs to do so. If you have good credit you can spend some on the black market to enhance your loadout. All guns in this dystopian future are linked to ID codes, and can be morphed into others, while reloading directly charges your (in game) bank account. Kill Protocol can be played with a free download from it's<a href="https://leaflight-studios.itch.io/kill-protocol"> itch.io </a>page, or<a href="https://leaflight-studios.itch.io/"> learn more about it here.</a></span></p>`;
      descriptionCR.innerHTML = `<p><span>Created By: <br> Anthony D. Salsbury, Jonathan Schultz, <br> Justin Grant, George Dietritch, <br> Owen Hickman, & Samuel Radulski</span></p>`
      
      
      break;
    case 4:
      descriptionBG.className =  'carousel-description-background-MageHand';
      descriptionTX.className =  'carousel-description-text-MageHand';
      descriptionCR.className =  'carousel-description-credit-MageHand';

      descriptionTX.innerHTML = `<p>Mage Hand is a knowledge-based exploration game originally created for Pirate Software Game Jam #15. You are a magician who has lost your memory, but retained your ability to cast spells via different hand signs. Explore out of the prison tower and find your way out of the mansion, with secret routes and legendary wizards, reclaim your memory and master some of the 40 different spells to defeat your captor and set yourself free. You can play Mage Hand for free directly from it's <a href="https://leaflight-studios.itch.io/mage-hand">itch.io</a> page, or <a href="https://leaflight-studios.itch.io">learn more here</a></p>`;
      descriptionCR.innerHTML = `<p>Created By: Anthony D. Salsbury, <br> Josh "BB" Bang, Willow Bradshaw</p>`;

      break;
    case 5:
      descriptionBG.className =  'carousel-description-background-goblinknight';
      descriptionTX.className =  'carousel-description-text-goblinknight';
      descriptionCR.className =  'carousel-description-credit-goblinknight';

      descriptionTX.innerHTML = `<p>goblin knight is an experimental 1st person sword fighting game initially created for the Game Idea Jam 2024. Play as an explorer who has gone too deep in the dark, meeting the goblin knight. It displays an interesting idea with it's aiming-based melee combat. You can download goblin knight for free from it's <a href="https://leaflight-studios.itch.io/goblin-knight">itch.io</a> page, or <a href="https://leaflight-studios.itch.io">learn more here</a></p>`;
      descriptionCR.innerHTML = `<p>created by: anthony d. salsbury</p>`;
      break;
    case 6:
      descriptionBG.className =  'carousel-description-background-WyrmCanyon';
      descriptionTX.className =  'carousel-description-text-WyrmCanyon';
      descriptionCR.className =  'carousel-description-credit-WyrmCanyon';

      descriptionTX.innerHTML = `<p>Wyrm Canyon on the Pink and Purple Planet is an arcade-style, two-color game originally made for 1-BIT JAM #3. Pilot your sand tank with a unique control scheme and use it's compass to locate the Wyrms of the canyon, all before striking with your smylsknife on foot. If Pink and Purple isn't your style then you can pick a different color palette in the settings as well. You can play it for free directly from Wyrm Canyon's <a href="https://leaflight-studios.itch.io/wyrm-canyon">itch.io</a> page, or <a href="https://leaflight-studios.itch.io">learn more here</a></p>`;
      descriptionCR.innerHTML = `<p><span>Created By:</span><br> Anthony D. Salsbury</p>`;
      break;
    case 7:
      descriptionBG.className =  'carousel-description-background-SHAHARAZON';
      descriptionTX.className =  'carousel-description-text-SHAHARAZON';
      descriptionCR.className =  'carousel-description-credit-SHAHARAZON';

      descriptionTX.innerHTML = `<p>SHAHARAZON is a first person "grenadier" set in the dark future of 2424, originally created for Acerola Jam 0. Play through a simulation of the war of the future as a cyborg super-soldier, trained for combat in grenade-only situations. You can play SHAHARAZON for free by downloading it from it's <a href="https://leaflight-studios.itch.io/agj0project">itch.io</a> page, or <a href="https://leaflight-studios.itch.io">learn more here</a></p>`;
      descriptionCR.innerHTML = `<p><span>created_by:</span> <br> ANTHONY D. SALSBURY</p>`;

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
  const descriptionBG = document.querySelector('.carousel-description-background > div');
  const descriptionTX = document.querySelector('.carousel-description-text > div');
  const descriptionCR = document.querySelector('.carousel-description-credit > div');
  descriptionBG.className = 'carousel-description-background-null';
  descriptionTX.className = 'carousel-description-text-null';
  descriptionCR.className = 'carousel-description-credit-null';
}

async function expandCaroItem() {
  updateCaroImage();
  updateCaroDescription();
  expanded = true;

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
  expanded = false;

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
  for (i = 0; i < size && expanded; i++) {
    item.textContent += text.charAt(i);
    await sleep(timeout);
    console.log("A")
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function updateMobileDescription() {
  if (mobileView == 0) return;
  const descriptionBoss = document.querySelector('.carousel-description-mobile');
  const description = document.querySelector('.carousel-description-mobile > div');

  description.innerHTML = '';
  switch (currentIndex) {
    case 2:
      description.innerHTML = `<h2>XCVB</h2> <h3>May 25th 2025</h3> <br> <p>XCVB is a roguelike deckbuilder / 2D platformer mashup originally created in for Untitled Game Jam #110. You play as a lone gambler with a deck of magical cards who ascend's Starface's tower in order to reclaim the $5 they are owed. Featuring 16 different movement cards (for active abilities), and 24 different badges (for passive perks), There are countless combinations to discover. The enemies in the tower get stronger as you climb, but on your own terms, as you get to decide if they become faster or stronger each floor. You can play XCVB for free today on it's <a href="https://leaflight-studios.itch.io/xcvb">itch.io</a> page, or <a href="https://leaflight-studios.itch.io/">learn more about it here.</a></p> <br> <h3>Created By: Anthony D. Salsbury, Owen Hickman, & Samuel Radulski</h3>`;
      break;
    case 3:
      description.innerHTML = `<h2>Kill Protocol</h2> <h3>October 11th 2024</h3> <br> <p>Kill Protocol is a unique two-color shooter created originally for 1-BIT JAM #4. Set in a future where clones are easily accessible, lives have little meaning, you must pay back $4500 of debt to regain your freedom, and taking assasination jobs to do so. If you have good credit you can spend some on the black market to enhance your loadout. All guns in this dystopian future are linked to ID codes, and can be morphed into others, while reloading directly charges your (in game) bank account. Kill Protocol can be played with a free download from it's<a href="https://leaflight-studios.itch.io/kill-protocol"> itch.io </a>page, or<a href="https://leaflight-studios.itch.io/"> learn more about it here.</a></p> <br> <h3>Created By: Anthony D. Salsbury, Jonathan Schultz, Justin Grant, George Dietritch, Owen Hickman, & Samuel Radulski</h3>`;
      break;
    case 4:
      description.innerHTML = `<h2>Mage Hand</h2> <h3>July 31st 2024</h3> <br> <p>Mage Hand is a knowledge-based exploration game originally created for Pirate Software Game Jam #15. You are a magician who has lost your memory, but retained your ability to cast spells via different hand signs. Explore out of the prison tower and find your way out of the mansion, with secret routes and legendary wizards, reclaim your memory and master some of the 40 different spells to defeat your captor and set yourself free. You can play Mage Hand for free directly from it's <a href="https://leaflight-studios.itch.io/mage-hand">itch.io</a> page, or <a href="https://leaflight-studios.itch.io">learn more here</a></p> <br> <h3>Created By: Anthony D. Salsbury, Josh "BB" Bang, Willow Bradshaw</h3>`;
      break;
    case 5:
      description.innerHTML = `<h2>goblin knight</h2> <h3>May 11th 2024</h3> <br> <p>goblin knight is an experimental 1st person sword fighting game initially created for the Game Idea Jam 2024. Play as an explorer who has gone too deep in the dark, meeting the goblin knight. It displays an interesting idea with it's aiming-based melee combat. You can download goblin knight for free from it's <a href="https://leaflight-studios.itch.io/goblin-knight">itch.io</a> page, or <a href="https://leaflight-studios.itch.io">learn more here</a></p> <br> <h3>Created By: Anthony D. Salsbury</h3>`;
      break;
    case 6:
      description.innerHTML = `<h2>Wyrm Canyon</h2> <h3>April 20th 2024</h3> <br> <p>Wyrm Canyon on the Pink and Purple Planet is an arcade-style, two-color game originally made for 1-BIT JAM #3. Pilot your sand tank with a unique control scheme and use it's compass to locate the Wyrms of the canyon, all before striking with your smylsknife on foot. If Pink and Purple isn't your style then you can pick a different color palette in the settings as well. You can play it for free directly from Wyrm Canyon's <a href="https://leaflight-studios.itch.io/wyrm-canyon">itch.io</a> page, or <a href="https://leaflight-studios.itch.io">learn more here</a></p> <br> <h3>Created By: Anthony D. Salsbury</h3>`;
      break;
    case 7:
      description.innerHTML = `<h2>SHAHARAZON</h2> <h3>March 14th 2024</h3> <br> <p>SHAHARAZON is a first person "grenadier" set in the dark future of 2424, originally created for Acerola Jam 0. Play through a simulation of the war of the future as a cyborg super-soldier, trained for combat in grenade-only situations. You can play SHAHARAZON for free by downloading it from it's <a href="https://leaflight-studios.itch.io/agj0project">itch.io</a> page, or <a href="https://leaflight-studios.itch.io">learn more here</a></p> <br> <h3>Created By: Anthony D. Salsbury</h3>`;
      break;
    default:
      console.log("unexpected!");  
  }

  await sleep(20);
  descriptionBoss.style.height = description.scrollHeight + 30 + 'px';
  descriptionBoss.style.borderWidth = "4px";
}

function hideMobileDescription() {
  const descriptionBoss = document.querySelector('.carousel-description-mobile');
  //const description = document.querySelector('.carousel-description-mobile > div');
  descriptionBoss.style.height = '0';
  descriptionBoss.addEventListener('transitionend', () => {
    descriptionBoss.style.borderWidth = "0px";
  }, { once: true });
}

function expandMobileDesc() {
  updateMobileDescription();
  mobileExpanded = true;
}

function unexpandMobileDesc() {
  hideMobileDescription();
  mobileExpanded = false;
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
  //expanded = !expanded;
});

mobileExpandButton.addEventListener('click', () => {
  if (mobileView == 0) return;
  if (mobileExpanded){
    unexpandMobileDesc();
  } else {
    expandMobileDesc();
  }
});

window.addEventListener('resize', () => {
  caro_offset = window.innerWidth * 0.25;
  updateTrueGap();
  updatePosition();
  if (expanded && window.innerWidth <= 950){
    unexpandCaroItem();
    expanded = false;
  } else if (mobileExpanded && window.innerWidth >= 950){
    unexpandMobileDesc();
    mobileExpanded = false;
  }
});
//console.log(items.length)
updateCaroBackground();
updateTrueGap();
snapTo(2);