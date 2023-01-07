const btns = document.querySelectorAll(".btn");

btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const x = e.clientX;
    const y = e.clientY;
    // console.log(x, y);// value changes withrespect to the position of the button

    const btnTop = e.target.offsetTop;
    const btnLeft = e.target.offsetLeft;
    // console.log(btnTop, btnleft); //same value for all the position of the button

    const xInside = x - btnLeft;
    const yInside = y - btnTop;
    // console.log(xInside, yInside);

    const circle = document.createElement("span");
    circle.classList.add("circle");
    circle.style.top = yInside + "px";
    circle.style.left = xInside + "px";

    this.appendChild(circle);

    setTimeout(() => circle.remove(), 500);
  });
});
