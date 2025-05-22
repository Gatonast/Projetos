document.addEventListener("DOMContentLoaded", () => {
  const carrossel = document.querySelector(".carrosel");
  const images = document.querySelectorAll(".carrosel img");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  let index = 0;

  function updateCarrossel() {
    carrossel.style.transform = `translateX(-${index * 1600}px)`;
  }

  nextButton.addEventListener("click", () => {
    if (index < images.length - 1) {
      index++;
    } else {
      index = 0;
    }
    updateCarrossel();
  });

  prevButton.addEventListener("click", () => {
    if (index > 0) {
      index--;
    } else {
      index = images.length - 1;
    }
    updateCarrossel();
  });
});
