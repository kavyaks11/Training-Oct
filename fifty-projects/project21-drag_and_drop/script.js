const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".box");

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

for (const empty of empties) {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
}

function dragStart() {
  this.className += " hold";

  setTimeout(() => (this.className = "invisible"), 0);

  //   console.log("drag start");
}

function dragEnd() {
  this.className = "fill";
  //   console.log("drag end");
}

function dragOver(e) {
  e.preventDefault();
  //   console.log("drag over");
}

function dragEnter(e) {
  e.preventDefault();

  this.className += " hovered";
  //   console.log("drag enter");
}

function dragLeave() {
  this.className = "box";
  //   console.log("drag leave");
}

function dragDrop() {
  //   console.log("drag drop");

  this.className = "box";
  this.append(fill);
}