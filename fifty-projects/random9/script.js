// const applause = document.getElementById("applause");
// const applauseBtn = document.querySelector(".applause-btn");

// const boo = document.getElementById("boo");
// const booBtn = document.querySelector(".boo-btn");

// const gasp = document.getElementById("gasp");
// const gaspBtn = document.querySelector(".gasp-btn");

// const tada = document.getElementById("tada");
// const tadaBtn = document.querySelector(".tada-btn");

// const victory = document.getElementById("victory");
// const victoryBtn = document.querySelector(".victory-btn");

// const wrong = document.getElementById("wrong");
// const wrongBtn = document.querySelector(".wrong-btn");

// applauseBtn.addEventListener("click", () => {
//   applause.play();
// });

// booBtn.addEventListener("click", () => {
//   boo.play();
// });

// gaspBtn.addEventListener("click", () => {
//   gasp.play();
// });

// tadaBtn.addEventListener("click", () => {
//   tada.play();
// });

// victoryBtn.addEventListener("click", () => {
//   victory.play();
// });

// wrongBtn.addEventListener("click", () => {
//   wrong.play();
// });

const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  btn.innerText = sound;

  btn.addEventListener("click", () => {
    pauseSongs();

    document.getElementById(sound).play();
  });
  document.getElementById("btns").appendChild(btn);
});

function pauseSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);

    song.pause();
    song.curreTime = 0;
  });
}
