document.addEventListener("DOMContentLoaded", function () {
  const images = [
    {
      src: "https://images.pexels.com/photos/29421579/pexels-photo-29421579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      caption: "Slide 1",
    },
    {
      src: "https://images.pexels.com/photos/29421578/pexels-photo-29421578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      caption: "Slide 2",
    },
    {
      src: "https://images.pexels.com/photos/18148936/pexels-photo-18148936.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      caption: "Slide 3",
    },
  ];

  const carouselContainer = document.getElementById("carousel");
  const carouselTrack = document.getElementById("carouselTrack");
  const caption = document.getElementById("caption");
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");
  const carouselNav = document.getElementById("carouselNav");
  const autoPlayButton = document.getElementById("autoPlayButton");
  const timerDisplay = document.getElementById("timerDisplay");

  let currentIndex = 0;
  let autoPlayActive = false;
  let timerInterval;
  let autoPlayDuration = 5;
  let countDown = autoPlayDuration;

  function createSlides() {
    images.forEach((image) => {
      const slide = document.createElement("div");
      slide.classList.add("carousel-slide");
      slide.style.backgroundImage = `url(${image.src})`;
      carouselTrack.appendChild(slide);
    });
  }

  function createIndicators() {
    images.forEach((_, index) => {
      const indicator = document.createElement("span");
      indicator.classList.add("carousel-indicator");
      indicator.addEventListener("click", () => {
        currentIndex = index;
        updateCarousel();
        resetAutoPlay();
      });

      carouselNav.appendChild(indicator);
    });
  }

  function updateCarousel() {
    carouselTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
    caption.textContent = images[currentIndex].caption;

    const indicators = document.querySelectorAll(".carousel-indicator");

    indicators.forEach((indicator, index) => {
      if (index === currentIndex) {
        indicator.classList.add("active");
      } else {
        indicator.classList.remove("active");
      }
    });
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateCarousel();
  }

  prevButton.addEventListener("click", () => {
    prevSlide();
    resetAutoPlay();
  });

  function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateCarousel();
  }

  nextButton.addEventListener("click", () => {
    nextSlide();
    resetAutoPlay();
  });

  autoPlayButton.addEventListener("click", () => {
    if (autoPlayActive) {
      stopAutoPlay();
    } else {
      startAutoPlay();
    }
  });

  function startAutoPlay() {
    autoPlayActive = true;
    autoPlayButton.textContent = "Stop Auto Play";
    countDown = autoPlayDuration;
    timerDisplay.textContent = `${countDown}s`;

    timerInterval = setInterval(() => {
      countDown--;

      if (countDown === 0) {
        nextSlide();
        countDown = autoPlayDuration;
      }

      timerDisplay.textContent = `${countDown}s`;
    }, 1000);
  }

  function stopAutoPlay() {
    autoPlayActive = false;
    autoPlayButton.textContent = "Start Auto Play";
    timerDisplay.textContent = "";
    clearInterval(timerInterval);
  }

  function resetAutoPlay() {
    if (autoPlayActive) {
      clearInterval(timerInterval);
      startAutoPlay();
    }
  }

  createSlides();
  createIndicators();
  updateCarousel();
});
