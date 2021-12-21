module.exports.imageSlide = function () {
  return new Promise((resolve, reject) => {
    if (process.browser) {
      const imageSlide = document.querySelector(".image-slide");
      const imageImages = document.querySelectorAll(".image-slide image");

      //button
      const preBtn = document.querySelector("#preBtn");
      const nextBtn = document.querySelector("#nextBtn");

      //Counter
      let counter = 1;
      const size = imageImages[0].clientWidth;

      imageSlide.style.transform = "translateX(" - size * counter + "px)";

      // Button Listener
      nextBtn.addEventListener("click", () => {
        imageSlide.style.transition = "transform 0.4s ease-in-out";
        counter++;
        imageSlide.style.transform = "translateX(" - size * counter + "px)";
      });
    }
    resolve();
  });
};
