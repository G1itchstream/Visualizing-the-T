let didScroll = false;
let parallaxTitles = document.querySelectorAll('.parallax-title');
let slideIndex = 0;

const scrollInProgress = () => {
  didScroll = true;
};

const raf = () => {
  if (didScroll) {
    parallaxTitles.forEach((element, index) => {
      // Adjust the coefficient as needed for the desired scrolling speed
      element.style.transform = "translateX(" + window.scrollY / 10 + "%)";
    });

    didScroll = false;
  }
  requestAnimationFrame(raf);
};

const plusSlides = (n) => {
  showSlides((slideIndex += n));
};

const showSlides = () => {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
};

requestAnimationFrame(raf);
window.addEventListener('scroll', scrollInProgress);
showSlides(); // Initial call to showSlides

