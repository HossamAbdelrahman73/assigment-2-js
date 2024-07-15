"use strick";

let arrText = [
  {
    qoute: `“Be yourself; everyone else is already taken.”`,
    namePerson: `― Oscar Wilde`,
  },
  {
    qoute: `“Without music, life would be a mistake.”`,
    namePerson: `― Friedrich Nietzsche`,
  },
  {
    qoute: `“Insanity is doing the same thing, over and over again, but expecting different results.”`,
    namePerson: `― Narcotics Anonymous`,
  },
  {
    qoute: `“It is better to be hated for what you are than to be loved for what you are not.”`,
    namePerson: `― Andre Gide`,
  },
  {
    qoute: `“You've gotta dance like there's nobody watching,
Love like you'll never be hurt,
Sing like there's nobody listening,
And live like it's heaven on earth.”`,
    namePerson: `― William W. Purkey`,
  },
  {
    qoute: `“You only live once, but if you do it right, once is enough.”`,
    namePerson: `― Mae West`,
  },
  {
    qoute: `“A room without books is like a body without a soul.”`,
    namePerson: `― Marcus Tullius Cicero`,
  },
  {
    qoute: `“So many books, so little time.”`,
    namePerson: `― Frank Zappa`,
  },
];
function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.querySelector("button").addEventListener("click", function () {
  let x = randomRange(0, 7);
  display(x);
});

function display(x) {
  let cartona = `
   <p>${arrText[x].qoute}</p>
          <p>${arrText[x].namePerson}</p>
  `;
  document.getElementById("qoute").innerHTML = cartona;
}

