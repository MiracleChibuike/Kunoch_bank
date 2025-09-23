// Initialize AOS animations
AOS.init({
  duration: 1000, // Animation duration in ms
  once: true,     // Run animation only once
});

// Counter animation
const counters = document.querySelectorAll(".counter");

const runCounter = (counter) => {
  const target = +counter.getAttribute("data-target");
  const updateCount = () => {
    const current = +counter.innerText;
    const increment = Math.ceil(target / 200); // adjust speed here
    if (current < target) {
      counter.innerText = current + increment;
      setTimeout(updateCount, 20);
    } else {
      counter.innerText = target;
    }
  };
  updateCount();
};

// Reveal counters when in viewport
const revealCounters = () => {
  counters.forEach((counter) => {
    const rect = counter.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      counter.classList.add("visible");
      if (!counter.classList.contains("counted")) {
        runCounter(counter);
        counter.classList.add("counted");
      }
    }
  });
};

window.addEventListener("scroll", revealCounters);

// Fade-in text on scroll
const faders = document.querySelectorAll(".fade-in");

const revealText = () => {
  faders.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50 && rect.bottom > 0) {
      el.classList.add("visible");
    }
  });
};

window.addEventListener("scroll", revealText);

// Scroll to Top Button
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

