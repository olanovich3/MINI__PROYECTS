import "./style.css";

const players = [
  {
    name: "Jose",
    number: 77,
    nickname: "Pipero",
    image: "π",
  },
  {
    name: "Carlos",
    number: 55,
    nickname: "Lorry",
    image: "π",
  },
  {
    name: "Diego",
    number: 10,
    nickname: "Diegogol",
    image: "π",
  },
  {
    name: "Carlos",
    number: 33,
    nickname: "Olano",
    image: "π₯Έ",
  },
  {
    name: "Sergio",
    number: 44,
    nickname: "Falsini",
    image: "π",
  },
  {
    name: "AndrΓ©s",
    number: 1,
    nickname: "Perita",
    image: "π€ ",
  },
  {
    name: "Sergio",
    number: 3,
    nickname: "Scotty",
    image: "π« ",
  },
  {
    name: "Rodrigo",
    number: 99,
    nickname: "Rodman",
    image: "π¬",
  },
  {
    name: "Ruben",
    number: 7,
    nickname: "Buba",
    image: "π",
  },
  {
    name: "Andy",
    number: 9,
    nickname: "The Panther",
    image: "π₯°",
  },
  {
    name: "Ivo",
    number: 44,
    nickname: "Kaiser",
    image: "π",
  },
  {
    name: "Rafael",
    number: 23,
    nickname: "Tarty",
    image: "π₯³",
  },
  {
    name: "Carlos",
    number: 69,
    nickname: "Poli",
    image: "π€",
  },
  {
    name: "Carlos",
    number: "00",
    nickname: "Herniolo",
    image: "π",
  },
  {
    name: "Pablo",
    number: 21,
    nickname: "Fundas",
    image: "π",
  },
  {
    name: "David",
    number: 13,
    nickname: "Torrijo",
    image: "π",
  },
  {
    name: "Alvaro",
    number: 64,
    nickname: "Espi",
    image: "π",
  },
  {
    name: "Enrique",
    number: "No number",
    nickname: "The Mister",
    image: "π€",
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
