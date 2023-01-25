import "./style.css";

const players = [
  {
    name: "Jose",
    number: 77,
    nickname: "Pipero",
    image: "😀",
  },
  {
    name: "Carlos",
    number: 55,
    nickname: "Lorry",
    image: "😁",
  },
  {
    name: "Diego",
    number: 10,
    nickname: "Diegogol",
    image: "😏",
  },
  {
    name: "Carlos",
    number: 33,
    nickname: "Olano",
    image: "🥸",
  },
  {
    name: "Sergio",
    number: 44,
    nickname: "Falsini",
    image: "😂",
  },
  {
    name: "Andrés",
    number: 1,
    nickname: "Perita",
    image: "🤠",
  },
  {
    name: "Sergio",
    number: 3,
    nickname: "Scotty",
    image: "🫠",
  },
  {
    name: "Rodrigo",
    number: 99,
    nickname: "Rodman",
    image: "😬",
  },
  {
    name: "Ruben",
    number: 7,
    nickname: "Buba",
    image: "😜",
  },
  {
    name: "Andy",
    number: 9,
    nickname: "The Panther",
    image: "🥰",
  },
  {
    name: "Ivo",
    number: 44,
    nickname: "Kaiser",
    image: "😎",
  },
  {
    name: "Rafael",
    number: 23,
    nickname: "Tarty",
    image: "🥳",
  },
  {
    name: "Carlos",
    number: 69,
    nickname: "Poli",
    image: "🤔",
  },
  {
    name: "Carlos",
    number: "00",
    nickname: "Herniolo",
    image: "😇",
  },
  {
    name: "Pablo",
    number: 21,
    nickname: "Fundas",
    image: "😋",
  },
  {
    name: "David",
    number: 13,
    nickname: "Torrijo",
    image: "😚",
  },
  {
    name: "Alvaro",
    number: 64,
    nickname: "Espi",
    image: "😛",
  },
  {
    name: "Enrique",
    number: "No number",
    nickname: "The Mister",
    image: "🤓",
  },
];

const printPlayers = (item) => {
  const container = document.querySelector("#app");
  for (const gamers of item) {
    container.innerHTML += `
    <figure>
    <h2>${gamers.image}</h2>
    <h3>${gamers.nickname}</h3>
    <h3>${gamers.number}</h3>
    <h4>${gamers.name}</h4>
    </figure>

    `;
  }
};

printPlayers(players);
