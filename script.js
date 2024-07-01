window.addEventListener("load", () => {
  let firstBtn = document.getElementById("firstBtn");
  let hbdaudio = document.getElementById("audiohbd");
  let index = 1;
  let firstCounter = 1;
  let btnsection = document.getElementById("btnsection");
  let firstScreen = document.getElementById("firstScreen");
  let muteMusic = document.getElementById("muteMusic");

  firstBtn.style.display = "block";
  firstScreen.querySelector("p").style.display = "none";
  hbdaudio.volume = 0.3;
  mobileCalc();
  msgCarousel(index);
  setInterval(getDate, 1000);

  muteMusic.addEventListener("click", () => {
    if (!hbdaudio.paused) {
      hbdaudio.pause();
    } else {
      hbdaudio.play();
    }
  });

  firstBtn.addEventListener("click", () => {
    firstScreen.classList.remove("d-flex");
    firstScreen.classList.add("disappear");
    firstScreen.addEventListener("animationend", () => {
      firstScreen.setAttribute("style", "display: none !important;");
    });
    if (!hbdaudio.paused) {
      hbdaudio.pause();
      document.querySelectorAll(`.ballon`).forEach((ballon, k) => {
        ballon.classList.remove("animate");
        ballon.classList.remove("animate2");
      });
    } else {
      hbdaudio.play();
      document.querySelectorAll(`.ballon`).forEach((ballon, k) => {
        if (k % 2 == 1) {
          ballon.classList.add("animate2");
        } else {
          ballon.classList.add("animate");
        }
      });
      if (firstCounter == 1) {
        nextButton();
        firstCounter++;
      }
    }
  });

  function nextButton() {
    let nextBtn = document.createElement("button");
    nextBtn.type = "button";
    nextBtn.innerText = "Next";
    nextBtn.classList.add("btn");
    nextBtn.classList.add("btn-lg");
    nextBtn.classList.add("fw-bold");
    nextBtn.classList.add("border-white");
    nextBtn.classList.add("btn-light");
    nextBtn.classList.add("mx-2");
    nextBtn.style.animation = "popup 2s";
    nextBtn.addEventListener("click", () => {
      msgCarousel((index += 1));
    });
    btnsection.append(nextBtn);
  }

  function msgCarousel(n) {
    let hasil = document.getElementsByClassName("slides");
    if (n > hasil.length) {
      index = 1;
    }
    if (n < 1) {
      index = hasil.length;
    }
    for (let i = 0; i < hasil.length; i++) {
      hasil[i].style.display = "none";
    }
    hasil[index - 1].style.display = "block";
  }

  function mobileCalc() {
    let sizeWidth = window.matchMedia("(max-width: 600px)");
    let aven = document.querySelector(".jarak-7");
    if (sizeWidth.matches) {
      aven.remove();
    }
  }
});
