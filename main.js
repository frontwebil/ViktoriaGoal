// POP START

const openPopUp = document.querySelectorAll(".open_pop_up");
const closePopUp = document.getElementById("close_pop_up");
const popUp = document.getElementById("pop_up");
const popUpEnd = document.getElementById("pop_up_end");

openPopUp.forEach(function (item) {
  item.addEventListener("click", () => {
    popUp.classList.add("active");
  });
});

closePopUp.addEventListener("click", () => {
  popUp.classList.remove("active");
});

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

const openBurger = document.getElementById("burger-open");
const closeBurger = document.getElementById("burger-close");
const menu = document.getElementById("menu");

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

openBurger.addEventListener("click", () => {
  document.body.style.overflow = 'hidden';

  menu.classList.add("active");
});

closeBurger.addEventListener("click", () => {
  document.body.style.overflow = "auto";

  menu.classList.remove("active");
});

const menuLinks = document.querySelectorAll(".menu-link");

menuLinks.forEach((link) =>
  link.addEventListener("click", () => {
    document.body.style.overflow = "auto";

    menu.classList.remove("active");
  })
);

// AUDIO

const player = document.querySelector(".audioPlayer");
const playPlayer = document.querySelector(".audioPlayerMainRight");
const audio = document.querySelector(".audioPlayerSong");
const progressContainer = document.querySelector(".progress-container");
const progress = document.querySelector(".progress");
const buttonImg = document.querySelector(".playButton");

const timeDuration = document.querySelector(".duration");
const timeCurrent = document.querySelector(".currentTime");

function playSong() {
  player.classList.add("play");
  console.log(buttonImg);
  buttonImg.src = "./icon/PauseAudio.png";
  audio.play();
}

function pauseSong() {
  player.classList.remove("play");
  buttonImg.src = "./icon/PLAYAUDIO.png";

  audio.pause();
}

playPlayer.addEventListener("click", () => {
  const isPlaying = player.classList.contains("play");
  if (isPlaying) {
    pauseSong();
  } else {
    playSong();
  }
});

function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const timeCurrentTime = Number(currentTime).toFixed(0);

  timeCurrent.innerHTML = String(timeCurrentTime).padStart(2, "0");
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
}

audio.addEventListener("timeupdate", updateProgress);

function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;

  audio.currentTime = (clickX / width) * duration;
}

progressContainer.addEventListener("click", setProgress);

// DROPDOWN

const dropDownButton = document.querySelectorAll(".drop_down_card-button");
const dropDownButtonBottom = document.querySelectorAll(
  ".drop_down_card-button-bot"
);

dropDownButton.forEach((el) => {
  el.addEventListener("click", () => {
    const content = el.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
      document
        .querySelectorAll("drop_down_card-content")
        .forEach((el) => (el.style.maxHeight = null));
      el.innerText = "РАЗВЕРНУТЬ ";
    } else {
      el.innerText = "СВЕРНУТЬ";
      document
        .querySelectorAll("drop_down_card-content")
        .forEach((el) => (el.style.maxHeight = null));
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

dropDownButtonBottom.forEach((but) => {
  but.addEventListener("click", () => {
    const content = but.parentElement;
    content.style.maxHeight = null;
    content.previousElementSibling.innerText = "РАЗВЕРНУТЬ";
  });
});

// Acordeon

const AccordeonTopButton = document.querySelectorAll(".accordeon-top-button");

AccordeonTopButton.forEach((el) => {
  el.addEventListener("click", () => {
    const content = el.nextElementSibling;
    const img = el.lastElementChild;
    const number = el.firstElementChild.firstElementChild;
    console.log(number)

    if (content.style.maxHeight) {
      img.src = "./icon/Plus.svg";
      content.style.maxHeight = null;
      number.style.color = '#606060'
    } else {
      img.src = "./icon/minus.svg";
      number.style.color = '#141414'

      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});

const AccordeonTopButtonWhite = document.querySelectorAll(".accordeon-top-button-white");

AccordeonTopButtonWhite.forEach((el) => {
  el.addEventListener("click", () => {
    const content = el.nextElementSibling;
    const img = el.lastElementChild;
    const number = el.firstElementChild.firstElementChild;

    if (content.style.maxHeight) {
      img.src = "./icon/Plus-white.svg";
      content.style.maxHeight = null;
      number.style.color = '#606060'

    } else {
      img.src = "./icon/minus-white.svg";
      number.style.color = '#F6F5F5'
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
});


// SLIDER CHANGE

const slideUnder = document.getElementById('mySwiperUnder');
const testimonialsBtn = document.getElementById('testimonials-btn');
const beforeAfterBtn = document.getElementById('beforeAfter-btn');
const mainSlider = document.getElementById('main-slider');

testimonialsBtn.onclick = function (){
  slideUnder.style.display = 'block';
  mainSlider.style.display = 'none';
};

beforeAfterBtn.onclick = function () {
  slideUnder.style.display = 'none';
  mainSlider.style.display = 'block';
}