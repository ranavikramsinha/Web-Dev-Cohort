// document.addEventListener("DOMContentLoaded", function () {
//   const nameInput = document.getElementById("nameInput");
//   const jobInput = document.getElementById("jobInput");
//   const ageInput = document.getElementById("ageInput");
//   const bioInput = document.getElementById("bioInput");
//   const nameDisplay = document.getElementById("nameDisplay");
//   const jobDisplay = document.getElementById("jobDisplay");
//   const ageDisplay = document.getElementById("ageDisplay");
//   const bioDisplay = document.getElementById("bioDisplay");

//   nameInput.addEventListener("input", function () {
//     updateInRealTime(nameInput, nameDisplay);
//   });

//   jobInput.addEventListener("input", function () {
//     updateInRealTime(jobInput, jobDisplay);
//   });

//   ageInput.addEventListener("input", function () {
//     updateInRealTime(ageInput, ageDisplay);
//   });

//   bioInput.addEventListener("input", function () {
//     updateInRealTime(bioInput, bioDisplay);
//   });

//   function updateInRealTime(inputElement, displayElement) {
//     const value = inputElement.value.trim();
//     displayElement.textContent = value === "" ? "Not provided" : value;
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll("[id$='Input']");

  inputs.forEach(function (input) {
    const displayId = input.id.replace("Input", "Display");
    const displayElement = document.getElementById(displayId);

    input.addEventListener("input", function () {
      const value = input.value.trim();
      displayElement.textContent = value === "" ? "Not provided" : value;
    });
  });
});
