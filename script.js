const places = [
  {
    id: 1,
    name: "Valletta Waterfront, Malta",
    description:
      "Valletta Waterfront is a historic promenade located in Valletta, the capital city of Malta. Built in the 18th century, it originally served as a quay for merchants and ships arriving at the Grand Harbour. Today, it is known for its beautiful Baroque architecture, colorful waterfront buildings, restaurants, and stunning views of the harbor.",
    src: "images/Valletta Waterfront, Malta.jpg",
  },
  {
    id: 2,
    name: "Ibrahim Rauza, Bijapur (Vijayapura), India",
    description:
      "Ibrahim Rauza is a historic monument located in Vijayapura (formerly Bijapur), Karnataka, India. Built in the 17th century, it serves as the tomb of Sultan Ibrahim Adil Shah II and his family. The monument is admired for its elegant Indo-Islamic architecture, intricate stone carvings, graceful arches, and beautifully landscaped gardens. It is often considered one of the finest examples of Deccan Islamic architecture and is believed to have inspired elements of the Taj Mahal.",
    src: "images/Ibrahim Rauza, Bijapur (Vijayapura), India.jpg",
  },
  {
    id: 3,
    name: "Hawa Mahal (Palace of Winds), Jaipur, India",
    description:
      "Hawa Mahal is one of the most famous landmarks in Jaipur, Rajasthan, India. Built in 1799 by Maharaja Sawai Pratap Singh, this magnificent palace is known for its unique pink sandstone façade and hundreds of small windows called jharokhas. These windows allowed royal women to observe street festivals and daily life without being seen by the public.",
    src: "images/Hawa Mahal (Palace of Winds), Jaipur, India.jpg",
  },
  {
    id: 4,
    name: "Mehrangarh Fort, Jodhpur, India",
    description:
      "Mehrangarh Fort is one of the largest and most magnificent forts in India, located in Jodhpur, Rajasthan. Built in 1459 by Rao Jodha, the founder of Jodhpur, the fort stands on a rocky hill overlooking the city. It is famous for its massive walls, grand palaces, intricate carvings, and rich collection of royal artifacts that reflect the history of the Rathore dynasty.",
    src: "images/Mehrangarh Fort, Jodhpur, India.jpg",
  },
  {
    id: 5,
    name: "Ahsan Manzil (Pink Palace), Dhaka, Bangladesh",
    description:
      "Ahsan Manzil is a historic palace located in Dhaka, Bangladesh, on the banks of the Buriganga River. Built in the 19th century, it served as the official residence of the Nawabs of Dhaka. The palace is famous for its distinctive pink façade, grand dome, and elegant Indo-Saracenic architecture. Today, it functions as a museum showcasing the history and culture of the Nawab family and Dhaka's heritage.",
    src: "images/Ahsan Manzil (Pink Palace), Dhaka, Bangladesh.jpg",
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
