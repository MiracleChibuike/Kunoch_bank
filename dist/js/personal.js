const parentContainer = document.querySelector('.parent');
	const loaderElement = document.getElementById('loader');
const loader = () => {
  setTimeout(() => {
    loaderElement.style.display = 'none';
    parentContainer.style.display = 'block';
  }, 3000)
};

document.addEventListener('DOMContentLoaded', loader);

