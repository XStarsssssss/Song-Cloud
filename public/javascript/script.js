let currentIndex = 0;
const imageContainer = document.getElementById('imageContainer');
const imageWidth = 110; 

function scrollCarousel(direction) {
  currentIndex += direction;
  if (currentIndex < 0) {
    currentIndex = 0;
  } else if (currentIndex >= imageContainer.children.length) {
    currentIndex = imageContainer.children.length - 1;
  }
  imageContainer.scrollTo({
    left: currentIndex * imageWidth,
    behavior: 'smooth'
  });
}
let currentIndex1 = 0;
const imageContainer1 = document.getElementById('imageContainer1');
const imageWidth1 = 110; 

function scrollCarousel1(direction) {
  currentIndex1 += direction;
  if (currentIndex1 < 0) {
    currentIndex1 = 0;
  } else if (currentIndex1 >= imageContainer1.children.length) {
    currentIndex1 = imageContainer1.children.length - 1;
  }
  imageContainer1.scrollTo({
    left: currentIndex1 * imageWidth,
    behavior: 'smooth'
  });
}
let currentIndex2 = 0;
const imageContainer2 = document.getElementById('imageContainer2');
const imageWidth2 = 110; 

function scrollCarousel2(direction) {
  currentIndex2 += direction;
  if (currentIndex2 < 0) {
    currentIndex2 = 0;
  } else if (currentIndex2 >= imageContainer2.children.length) {
    currentIndex2 = imageContainer2.children.length - 1;
  }
  imageContainer2.scrollTo({
    left: currentIndex2 * imageWidth,
    behavior: 'smooth'
  });
}
function toggleFavorite(button) {
  button.classList.toggle('active');
  button.innerHTML = button.classList.contains('active') ? '&#x2665;' : '&#x2661;';
}










