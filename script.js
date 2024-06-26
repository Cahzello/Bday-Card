document.addEventListener("DOMContentLoaded", () => {
  let hbdauido = document.getElementById("audiohbd");
  let index = 1;
  let firstCounter = 1;
  let musicbtn = document.getElementById("playmusic");
  let btnsection = document.getElementById("btnsection");
  hbdauido.volume = 0.3;

  msgCarousel(index);
  musicbtn.addEventListener("click", () => {
    musicbtn.classList.remove("btn-light");
    musicbtn.classList.add("btn-dark");
    musicbtn.classList.remove("bg-light");
    musicbtn.classList.add("bg-dark");
    if (!hbdauido.paused) {
      hbdauido.pause();
      musicbtn.classList.remove("btn-dark");
      musicbtn.classList.add("btn-light");
      musicbtn.classList.remove("bg-dark");
      musicbtn.classList.add("bg-light");
      document.querySelectorAll(`.ballon`).forEach((ballon, k) => {
        ballon.classList.remove("animate");
        ballon.classList.remove("animate2");
      });
    } else {
      hbdauido.play();
      document.querySelectorAll(`.ballon`).forEach((ballon, k) => {
        if(k % 2 == 1){
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
    nextBtn.addEventListener("click", (param) => {
      // console.log(param);
      msgCarousel(index += 1);
    });
    btnsection.append(nextBtn);
  }

  function msgCarousel(n) {
    let hasil = document.getElementsByClassName("slides");
    console.log(index);
    if (n > hasil.length) {
      index = 1;
    }
    if (n < 1) {
      index = hasil.length;
    }
    for (let i = 0; i < hasil.length; i++) {
      hasil[i].style.display = 'none';
    }
    hasil[index - 1].style.display = 'block';
    console.log(index);
  }
});
