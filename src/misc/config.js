const words = [
  "hill",
  "flower",
  "ocean",
  "street",
  "museum",
  "game",
  "night",
  "sky",
  "bollywood",
  "diwali",
  "holi",
  "fun",
  "chess",
  "night sky",
  "night forest",
  "casino",
  "birds",
  "lantern"
];

export const chooseOneWord = () => {
  return words[Math.floor(Math.random() * words.length)];
};
