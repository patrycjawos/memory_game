const cardsColors = ["red", "red", "green", "green", "blue", "blue", "brown", "brown", "yellow", "yellow", "gray", "gray", "cadetblue", "cadetblue", "violet", "violet", "lightgreen", "lightgreen"];

let cards = document.querySelectorAll("div");
cards = [...cards]; //18
const clickCard = function () {
  console.log("działa")
};
const init = function () {
  cards.forEach(function (card) {
    const position = Math.floor(Math.random() * cardsColors.length);
    card.classList.add(cardsColors[position]);
    cardsColors.splice(position, 1);

    setTimeout(function () {
      cards.forEach(function (card) {
        card.classList.add("hidden")
        card.addEventListener("click", clickCard)
      })
    },2000)
  })
}

init()