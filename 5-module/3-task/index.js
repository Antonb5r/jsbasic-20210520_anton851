function initCarousel() {
  const carousel = document.querySelector(".carousel");
  const carouselInner = document.querySelector(".carousel__inner");
  const carouselArrowRight = document.querySelector(".carousel__arrow_right");
  const carouselArrowLeft = document.querySelector(".carousel__arrow_left");
  const carouselSLide = document.querySelector(".carousel__slide");

  const slideQuantity = carouselInner.children.length;
  let counter = 1;

  if (counter === 1) {
    carouselArrowLeft.setAttribute("style", "display: none");
  }

  carousel.addEventListener("click", function (event) {
    const slideWidth = carouselSLide.offsetWidth;

    if (event.target.closest(".carousel__arrow_right")) {
      carouselInner.setAttribute(
        "style",
        `transform: translateX(${-slideWidth * counter}px)`
      );

      counter++;

      if (counter === slideQuantity) {
        carouselArrowRight.setAttribute("style", "display: none");
        counter--;
      }

      carouselArrowLeft.removeAttribute("style");
    }

    if (event.target.closest(".carousel__arrow_left")) {
      counter--;
      carouselInner.setAttribute(
        "style",
        `transform: translateX(${-slideWidth * counter}px)`
      );

      carouselArrowRight.removeAttribute("style");
    }

    if (counter === 0) {
      carouselArrowLeft.setAttribute("style", "display: none");
      counter++
    }
  });
}