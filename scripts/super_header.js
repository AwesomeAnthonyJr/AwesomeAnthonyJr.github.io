//JAVASCRIPT FILE FOR THE SUPER HEADER STUFF

const headerButtonG = document.querySelector('.header-g')
const headerButtonY = document.querySelector('.header-c')
const headerButtonC = document.querySelector('.header-y')
const headerButtonM = document.querySelector('.header-m')
const headerButtonO = document.querySelector('.header-o')
const headerButtonB = document.querySelector('.header-b')
const headerButtonR = document.querySelector('.header-r')
const headerListG = document.querySelector('.menu-g')
const headerListY = document.querySelector('.menu-c')
const headerListC = document.querySelector('.menu-y')
const headerListM = document.querySelector('.menu-m')
const headerListO = document.querySelector('.menu-o')
const headerListB = document.querySelector('.menu-b')
const headerListR = document.querySelector('.menu-r')
let header_index = 0;

function updateHeaderLists() {
  headerListG.style.maxHeight = '0';
  headerListY.style.maxHeight = '0';
  headerListC.style.maxHeight = '0';
  headerListM.style.maxHeight = '0';
  headerListO.style.maxHeight = '0';
  headerListB.style.maxHeight = '0';
  headerListR.style.maxHeight = '0';

  switch (header_index) {
    case 1:
      headerListG.style.maxHeight = '100vw';
      break;
    case 2:
      headerListY.style.maxHeight = '100vw';
      break;
    case 3:
      headerListC.style.maxHeight = '100vw';
      break;
    case 4:
      headerListM.style.maxHeight = '100vw';
      break;
    case 5:
      headerListO.style.maxHeight = '100vw';
      break;
    case 6:
      headerListB.style.maxHeight = '100vw';
      break;
    case 7:
      headerListR.style.maxHeight = '100vw';
      break;
  }
}

function scrollAllInLists() {
  scrollAllInList(headerListG);
  scrollAllInList(headerListY);
  scrollAllInList(headerListC);
  scrollAllInList(headerListM);
  scrollAllInList(headerListO);
  scrollAllInList(headerListB);
  scrollAllInList(headerListR);
}

function scrollAllInList(list) {
  const listParents = list.querySelectorAll("li");
  listParents.forEach((parent) => {
    const text = parent.querySelector('a');
    setInterval(() => {
      scrollItem(parent, text);
    }, 4010);
  });
}

function scrollItem(parent, text) {
  console.log(text.textContent);
  const parentWidth = parent.offsetWidth;
  const textWidth = text.scrollWidth;
  let distance = textWidth - parentWidth;

  if (distance <= 0) return;

  distance += 8;
  text.style.transform = `translateX(0px)`
  text.style.transition = 'transform 3s linear';

  setTimeout(() => {
    text.style.transition = 'transform 3s linear';
    text.style.transform = `translateX(-${distance}px)`;
    setTimeout(() => {
      text.style.transition = 'none';
      text.style.transform = `translateX(-${distance}px)`
      setTimeout(() => {
        text.style.transition = 'none';
        text.style.transform = `translateX(0px)`;
      }, 500);
    }, 3000);
  }, 500);
}

headerButtonG.addEventListener('click', () => {
  if (header_index == 1) {
    header_index = 0;
  } else {
    header_index = 1
  }
  updateHeaderLists();
});

headerButtonY.addEventListener('click', () => {
  if (header_index == 2) {
    header_index = 0;
  } else {
    header_index = 2
  }
  updateHeaderLists();
});

headerButtonC.addEventListener('click', () => {
  if (header_index == 3) {
    header_index = 0;
  } else {
    header_index = 3
  }
  updateHeaderLists();
});

headerButtonM.addEventListener('click', () => {
  if (header_index == 4) {
    header_index = 0;
  } else {
    header_index = 4
  }
  updateHeaderLists();
});

headerButtonO.addEventListener('click', () => {
  if (header_index == 5) {
    header_index = 0;
  } else {
    header_index = 5
  }
  updateHeaderLists();
});

headerButtonB.addEventListener('click', () => {
  if (header_index == 6) {
    header_index = 0;
  } else {
    header_index = 6
  }
  updateHeaderLists();
});

headerButtonR.addEventListener('click', () => {
  if (header_index == 7) {
    header_index = 0;
  } else {
    header_index = 7
  }
  updateHeaderLists();
});

scrollAllInLists();
updateHeaderLists();