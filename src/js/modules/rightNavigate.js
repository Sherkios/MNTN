import ActiveClass from "../classes/activeClass.js";


const buttons = document.querySelectorAll(".header-progress__stage");
let buttonsActive = [];
buttons.forEach((button, index) => {
  buttonsActive.push(new ActiveClass({
    element: button,
    active: index == 0,
  }))
})

const items = document.querySelectorAll(".item");
const mainBlock = document.querySelector(".main");

// блоки слайдов
const options = {
  threshold: 0.5,
}

const callback = (entries, observer) => {
  entries.forEach(({isIntersecting, target}) => {
  if (isIntersecting) {
    clearStages();
    
    switch (target.id) {
      case "item1":
        buttonsActive[1].active = true
        break;

      case "item2":
        buttonsActive[2].active = true
        break;
      case "item3":
        buttonsActive[3].active = true
        break;
    
      default:
        buttonsActive[0].active = true
        break;
    }
    }
  });
}

const ItemObserver = new IntersectionObserver(callback, options);

items.forEach(item => ItemObserver.observe(item));

// Главный блок

const mainObserver = new IntersectionObserver(callback, options);

mainObserver.observe(mainBlock);




function clearStages() {
  buttonsActive.forEach(button => button.active = false);
}

