document.addEventListener("DOMContentLoaded", function () {
  const heading = document.getElementById("mainHeading");
  const buttons = document.querySelectorAll(".color-buttons button");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      const color =
        this.textContent.toLowerCase() === "reset"
          ? "black"
          : this.textContent.toLowerCase();

      heading.style.color = color;
    });
  });
});
