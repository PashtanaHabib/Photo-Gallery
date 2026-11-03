const places = [
  {
    id: 1,
    name: "Herat Citadel (Qala Ikhtyaruddin)",
    description:
      "One of the oldest historical landmarks in Herat, famous for its impressive walls, ancient architecture, and rich cultural heritage.",
    src: "images/Herat Citadel (Qala Ikhtyaruddin).jpg",
  },
  {
    id: 2,
    name: "Great Mosque of Herat",
    description:
      "A magnificent historic mosque known for its beautiful blue and turquoise tiles, Islamic architecture, and stunning decorations.",
    src: "images/Great Mosque of Herat.jpg",
  },
  {
    id: 3,
    name: "Musalla Minarets",
    description:
      "Historic monuments from the Timurid era, admired for their artistic architecture and beautiful traditional tilework.",
    src: "images/Musalla Minarets.jpg",
  },
  {
    id: 4,
    name: "Gazargah Shrine (Khwaja Abdullah Ansari)",
    description:
      "A famous religious and historical site in Herat, known for its peaceful atmosphere, beautiful architecture, and spiritual significance.",
    src: "images/Gazargah Shrine (Khwaja Abdullah Ansari).jpg",
  },
  {
    id: 5,
    name: "Pul-e-Malan (Malan Bridge)",
    description:
      "An ancient bridge over the Hari River, recognized as an important historical landmark representing the engineering skills of the past.",
    src: "images/Pul-e-Malan (Malan Bridge).jpg",
  },
];

const imgs = document.querySelectorAll(".all-imgs img");
const currentImage = document.querySelector(".current-img");
const titleImage = document.querySelector(".image-title");
const description = document.querySelector(".image-desc");

console.log(imgs);
imgs.forEach((Image, index) => {
  Image.src = places[index].src;

  Image.addEventListener("click", function () {
    currentImage.src = places[index].src;
    titleImage.innerText = places[index].name;
    description.innerText = places[index].description;
    currentImage.classList.add("animate-imgs");

    setTimeout(function () {
      currentImage.classList.remove("animate-imgs");
    }, 400);
  });
});

currentImage.src = places[0].src;
titleImage.innerText = places[0].name;
description.innerText = places[0].description;
