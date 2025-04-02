document.addEventListener("DOMContentLoaded", function () {
    const accordionButtons = document.querySelectorAll(".accordion-button");
  
    accordionButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const currentItem = this.parentElement;
        const activeItem = document.querySelector(".accordion-item.active");
  
        if (currentItem.classList.contains("active")) {
          currentItem.classList.remove("active");
        } else {
          if (activeItem) {
            activeItem.classList.remove("active");
          }
  
          currentItem.classList.add("active");
        }
      });
    });
  });
