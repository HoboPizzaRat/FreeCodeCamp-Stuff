let footballTeam = {
  team: "Poopoo",
  year: 2000,
  headCoach: "Mac Kaiveri",
  players: [
    {
      name: "Kekkonen",
      position: "forward",
      isCaptain: true
    },
    {
      name: "Mac Ankka",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Pooh",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "kakkonen",
      position: "goalkeeper",
      isCaptain: false
    },
    {
      name: "Cucumber",
      position: "defender",
      isCaptain: false
    },
    {
      name: "News Duck",
      position: "defender",
      isCaptain: false
    }
  ]
}
const teamSpan = document.getElementById("team");
const yearSpan = document.getElementById("year");
const headCoachSpan = document.getElementById("head-coach");
teamSpan.textContent = footballTeam.team;
yearSpan.textContent = footballTeam.year;
headCoachSpan.textContent = footballTeam.headCoach;

const playersSelect = document.getElementById("players");
const playerCards = document.getElementById("player-cards");

function renderPlayerCards(players){
  return players.map((player) => {
    let isCaptain = player.isCaptain ? "(Captain) " : "";
    let name = player.name;
    let position = player.position;
    return `
      <div class="player-card">
        <h2>${isCaptain}${name}</h2>
        <p>Position: ${position}
      </div>
    `;
  }).join("");
}
playersSelect.addEventListener("change", () => {
  let value = playersSelect.value;
  console.log(value);
  if(value == "all"){
    playerCards.innerHTML = renderPlayerCards(footballTeam.players);
  }else{
    let filtered = footballTeam.players.filter((player) => player.position == value);
    playerCards.innerHTML = renderPlayerCards(filtered);
  }
});