const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryEl = document.querySelector(".gallery");

// const makeImageInGallery = ({ url, alt }) => {
//   return `<li class="gallery-item"><img class="gallery--image" src="${url}" alt="${alt}"/></li>`;
// };

// const insetImageInGallery = images.map(makeImageInGallery).join("");
// galleryEl.insertAdjacentHTML("afterbegin", insetImageInGallery);
// console.log(insetImageInGallery);

const makeImageInGallery = ({ url, alt }) => {
  const makeItem = document.createElement("li");
  makeItem.insertAdjacentHTML(
    "beforeend",
    `<img class='gallery--image' src='${url}' alt='${alt}'/>`
  );
  makeItem.classList.add("gallery-item");
  return makeItem;
};
const insetImageInGallery = images.map(makeImageInGallery);

galleryEl.append(...insetImageInGallery);
