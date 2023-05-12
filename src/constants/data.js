import images from './images';
const arts = [
  {
    cover: images.gallery01,
    name: "Ornamentum duorum",
    price: "40€",
    type: 'Available'
  },
  {
    cover: images.gallery02,
    name: "Maculose white",
    price: "25€",
    type: 'Unvailable'
  },
  {
    cover: images.gallery03,
    name: "Testa",
    price: "20€",
    type: 'Available'
  },
  {
    cover: images.gallery04,
    name: "Puella",
    price: "28€",
    type: 'ComingSoon'
  },

];

const team = [
  {
    imgUrl: images.team1,
    name: "Isabella Lee",
    position: "Artist"

  },
  {
    imgUrl: images.team2,
    name: " Mia Garcia",
    position: "Sales Assistant"

  },
  {
    imgUrl: images.team3,
    name: "Liam Patel",
    position: "Distributor"

  },
  {
    imgUrl: images.team4,
    name: "Chloe Kim",
    position: "Curator"

  }
];
const reviews = [
  {
    imgUrl: images.customer01,
    name: "Emily Carter",
    review: "I can't express enough how much I love the artwork I purchased from this artist. It's such a unique piece that really speaks to me. The colors and textures are so vibrant and rich. I'm thrilled to have it in my home and enjoy it every day"

  },
  {
    imgUrl: images.customer02,
    name: " Miguel Rodriguez",
    review: "The art exhibition I attended curated by this team was breathtaking. The variety of styles and mediums represented was impressive, and the pieces themselves were stunning. I left feeling inspired and with a newfound appreciation for the power of art."

  },
  {
    imgUrl: images.customer03,
    name: "Grace Lee",
    review: "I recently worked with this distributor to add some artwork to our office space, and I couldn't be happier with the result. The team was professional, communicative, and made the entire process seamless. "

  },

];

export default { arts, team, reviews };
