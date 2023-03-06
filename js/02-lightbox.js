import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');
//console.log(galleryItems);

galleryItems.forEach(item => {
    //console.log(item);
   const div = document.createElement('div');
    div.innerHTML = `
    <a class="gallery__item" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
    data-source="${item.original}"
    alt="${item.description}"
    />
    </a>`;
    galleryEl.append(div);
        });
const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
//console.log(lightbox);
lightbox.on('show.simplelightbox');