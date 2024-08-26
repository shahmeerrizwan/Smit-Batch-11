const toast = document.getElementById("toast");
const notificationSound = document.getElementById("notificationSound");
const body = document.body;

function Notify() {
  // Play sound
  notificationSound.play();

  // Show toast notification
  toast.classList.remove("opacity-0");
  toast.classList.add("opacity-100");

  body.style.backgroundImage =
    "url('https://media.giphy.com/media/R8bcfuGTZONyw/giphy.gif')";
  // Set background image of the body
  body.style.backgroundSize = "contain";
  body.style.backgroundPosition = "center";
  body.style.backgroundRepeat = "no-repeat";

  // Hide toast notification after 3 seconds
  setTimeout(() => {
    toast.classList.remove("opacity-100");
    toast.classList.add("opacity-0");
  }, 3000);
}
