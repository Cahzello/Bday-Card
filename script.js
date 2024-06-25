document.addEventListener("DOMContentLoaded", () => {
  let hbdauido = document.getElementById("audiohbd");
  hbdauido.volume = 0.3;

  let musicbtn = document.getElementById("playmusic");
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
    } else {
      hbdauido.play();
    }
  });
});
