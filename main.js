// POP START

const openPopUp = document.getElementById("open_pop_up");
const closePopUp = document.getElementById("close_pop_up");
const popUp = document.getElementById("pop_up");
const popUpEnd = document.getElementById("pop_up_end");

console.log(openPopUp);
console.log(closePopUp);
console.log(popUp);
openPopUp.onclick = function (e) {
  e.preventDefault();
  popUp.classList.add("active");
};

closePopUp.onclick = function () {
  popUp.classList.remove("active");
};

const SubmitLetter = document.getElementById("Submit_letter");

function getValue() {
  function end() {
    popUp.classList.remove("active");
    popUpEnd.classList.add("active");
  }

  const inputGmail = document.getElementById("gmail");
  const inputName = document.getElementById("name");

  const GmailValue = inputGmail.value;
  const NameValue = inputName.value;

  SubmitLetter.href =
    "mailto:Viktoriagoal1@gmail.com?subject=" +
    "От " +
    NameValue +
    "&body=" +
    "Меня звать " +
    NameValue +
    ",хочу записаться к вам на косультацию , вот моя почта:" +
    GmailValue;

  end();
}

// POP END

// ANIMATION

const options = {
  threshold: [0.5],
};

const blight = new IntersectionObserver(blightFunc, options);

const blightEl = document.querySelectorAll(".blight");

for (const element of blightEl) {
  blight.observe(element);
}

function blightFunc(entries) {
  entries.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("func");
    }
  });
}


const leftToRight = new IntersectionObserver(fromLeftToRight, options);

const leftToRightEl = document.querySelectorAll(".leftToRight");

for (const element of leftToRightEl) {
  leftToRight.observe(element);
}

function fromLeftToRight(entries) {
  entries.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("func");
    }
  });
}

const rightToLeft = new IntersectionObserver(fromRightToLeft, options);

const rightToLeftEl = document.querySelectorAll(".rightToLeft");

for (const element of rightToLeftEl) {
  rightToLeft.observe(element);
}

function fromRightToLeft(entries) {
  entries.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("func");
    }
  });
}


const openBurger = document.getElementById('burger-open');
const closeBurger = document.getElementById('burger-close');
const menu = document.getElementById('menu');


// BURGER

// openBurger.onclick = () => {
//   // document.body.style.overflow = 'hidden';
//   menu.classList.add('active')
// };

// closeBurger.onclick = () => {
//   // document.body.style.overflow = 'auto';
//   menu.classList.remove('active')
// };

// const link = document.querySelector('.link')

// link.onclick = () => {
//   menu.classList.remove('active')
// }


openBurger.addEventListener('click', () => {
  document.body.style.overflow = 'hidden';

  menu.classList.add('active');
});

closeBurger.addEventListener('click', () => {
  document.body.style.overflow = 'auto';

  menu.classList.remove('active');
});

const menuLinks = document.querySelectorAll('.menu-link');

menuLinks.forEach(link => link.addEventListener('click', () => {
  console.log('asda')
  document.body.style.overflow = 'auto';

  menu.classList.remove('active');
}));