document.addEventListener("DOMContentLoaded", function () {
  const hourHand = document.querySelector(".hand.hour");
  const minuteHand = document.querySelector(".hand.minute");
  const secondHand = document.querySelector(".hand.second");
  const digitalClock = document.querySelector(".digital-clock");
  const dateDisplay = document.querySelector(".date");

  let lastSecond = -1;

  function updateClock() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const milliseconds = now.getMilliseconds();

    const hourRotation = (hours % 12) * 30 + minutes * 0.5;
    const minuteRotation = minutes * 6 + seconds * 0.1;
    const secondRotation = seconds * 6 + (milliseconds * 6) / 1000;

    hourHand.style.transform = `translateX(-50%) rotate(${hourRotation}deg)`;
    minuteHand.style.transform = `translateX(-50%) rotate(${minuteRotation}deg)`;

    if(seconds === 0 && lastSecond === 59){
        secondHand.style.transition = "none";
    }
    else{
        secondHand.style.transition = "transform 0.2s cubic-bezier(0.4, 2.08, 0.55, 0.44)"
    }

    secondHand.style.transform = `translateX(-50%) rotate(${secondRotation}deg)`;

    lastSecond = seconds;

    const formattedTime =
      String(hours).padStart(2, "0") +
      ":" +
      String(minutes).padStart(2, "0") +
      ":" +
      String(seconds).padStart(2, "0");

    digitalClock.textContent = formattedTime;

    const day = now.getDate();
    const month = now.getMonth() + 1;
    const year = now.getFullYear();

    const formattedDate = String(day).padStart(2, "0") + "/" + String(month).padStart(2, "0") + "/" + year;

    dateDisplay.textContent = formattedDate;
    dateDisplay.style.textAlign = "center";
    dateDisplay.style.fontSize = "30px"

    requestAnimationFrame(updateClock);
  }

  updateClock();
});
