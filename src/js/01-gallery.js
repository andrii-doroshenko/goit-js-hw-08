// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from "./gallery-items";
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector("div.gallery");
galleryList.insertAdjacentHTML("beforeend", createGalleryMarkup());

function createGalleryMarkup() {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}"/>
</a></div>`;
    })
    .join("");
}

//todo simpleLightBox library
let gallery = new SimpleLightbox(".gallery .gallery__item", {
  captionsData: "alt",
  captionDelay: 250,
});
