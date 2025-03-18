document.addEventListener("DOMContentLoaded", function () {
  const bulb = document.getElementById("bulb");
  const toggleButton = document.getElementById("toggleButton");
  const statusText = document.getElementById("status");
  const body = document.getElementById("body");

  body.classList.add("dark-mode");

  toggleButton.addEventListener("click", function () {
    if (bulb.classList.contains("off")) {
      bulb.classList.remove("off");
      toggleButton.textContent = "Turn Off";
      statusText.textContent = "Status: On";
      body.classList.remove("dark-mode");
    } else {
      bulb.classList.add("off");
      toggleButton.textContent = "Turn On";
      statusText.textContent = "Status: Off";
      body.classList.add("dark-mode");
    }
  });
});

//* Why use textContent instead of innerHTML
//   toggleButton.innerHTML = `<button id="toggleButton">
//   <a href="https://www.google.com/">Turn On</a>
// </button>`;

// document.addEventListener("DOMContentLoaded", function () {
//   const bulb = document.getElementById("bulb");
//   const toggleButton = document.getElementById("toggleButton");
//   const statusText = document.getElementById("status");
//   const body = document.getElementById("body");

//   body.classList.add("dark-mode");
//   bulb.classList.remove("off");

//   toggleButton.addEventListener("click", function () {
//     if (!bulb.classList.contains("off")) {
//       bulb.classList.add("off");
//       toggleButton.textContent = "Turn On";
//       statusText.textContent = "Status: Off";
//       body.classList.remove("dark-mode");
//     } else {
//       bulb.classList.remove("off");
//       toggleButton.textContent = "Turn Off";
//       statusText.textContent = "Status: On";
//       body.classList.add("dark-mode");
//     }
//   });
// });
