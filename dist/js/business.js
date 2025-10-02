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


const parentContainer = document.querySelector('.parent');
	const loaderElement = document.getElementById('loader');
const loader = () => {
  setTimeout(() => {
    loaderElement.style.display = 'none';
    parentContainer.style.display = 'block';
  }, 3000)
};

document.addEventListener('DOMContentLoaded', loader);



