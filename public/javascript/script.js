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
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search'); 
  const highlightSections = document.querySelectorAll('.highlight-section'); 

  searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase().trim(); 
      
      highlightSections.forEach((section) => {
          const songName = section.querySelector('.song-name')?.textContent.toLowerCase() || ''; 
          const artistName = section.querySelector('.artist')?.textContent.toLowerCase() || ''; 
          
          
          if (songName.includes(query) || artistName.includes(query)) {
              section.style.display = ''; 
          } else {
              section.style.display = 'none'; 
          }
      });

      
      if (query === '') {
          highlightSections.forEach((section) => section.style.display = '');
      }
  });
});

let favorites = [];


function toggleFavorite(button) {
    const highlight = button.closest('.highlight'); 
    const songName = highlight.querySelector('.song-name').textContent; 
    const artist = highlight.querySelector('.artist').textContent; 
    const imgSrc = highlight.querySelector('.image img').src; 

    const favoriteSong = {
        name: songName,
        artist: artist,
        img: imgSrc
    };

    
    const songIndex = favorites.findIndex(song => song.name === songName && song.artist === artist);

    if (songIndex === -1) {
       
        favorites.push(favoriteSong);
        button.textContent = '❤️'; 
    } else {
        
        favorites.splice(songIndex, 1);
        button.textContent = '♡'; 
    }

    updateFavoritesSection();
}

// Function to update the favorites section dynamically
function updateFavoritesSection() {
    const favoritesSection = document.querySelector('.favorites-section');

    // Clear existing favorite items
    favoritesSection.innerHTML = `
        <h2>Your Favorites</h2>
        ${favorites.length === 0 ? '<p>No favorites added yet.</p>' : ''}
    `;

    // Add each favorite song to the favorites section
    favorites.forEach(song => {
        const favoriteItem = document.createElement('div');
        favoriteItem.classList.add('favorite-item');

        favoriteItem.innerHTML = `
            <div class="image">
                <img src="${song.img}" alt="${song.name}">
            </div>
            <div class="song-details">
                <p class="song-name">${song.name}</p>
                <p class="artist">${song.artist}</p>
            </div>
        `;

        favoritesSection.appendChild(favoriteItem);
    });
}










