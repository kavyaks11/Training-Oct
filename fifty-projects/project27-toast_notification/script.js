const btn = document.querySelector(".btn");
const toasts = document.getElementById("toasts");

const messages = [
  "Message One",
  "Message Two",
  "Message Three",
  "Message Four",
];

const type = ["info", "success", "error"];

btn.addEventListener("click", () => createNotification("This is valid data"));

function createNotification(message = null, type = null) {
  const notif = document.createElement("div");
  notif.classList.add("toast");
  notif.classList.add(type ? type : getRandomType());

  notif.innerText = message ? message : getRandomMessage();

  //   notif.innerText = getRandomMessage();
  toasts.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 3000);
}
function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}
function getRandomType() {
  return type[Math.floor(Math.random() * type.length)];
}
