const items = document.querySelectorAll(".carousel-item");
const dots = document.querySelectorAll(".dot");
const inner = document.querySelector(".carousel-inner");

let currentIndex = 0;
const total = items.length;
const intervalTime = 4000; // 4 seconds
let slideInterval;

// Show a specific slide
function showSlide(index) {
  currentIndex = index;
  inner.style.transform = `translateX(-${100 * index}%)`;;
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

// Next Slide
function nextSlide() {
  currentIndex = (currentIndex + 1) % total;
  showSlide(currentIndex);
}
// Auto Play
function startSlide() {
  slideInterval = setInterval(nextSlide, intervalTime);
}

// Manual Indicator Click
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
    clearInterval(slideInterval);
    startSlide();
  });
});

// Init
showSlide(0);
startSlide();
