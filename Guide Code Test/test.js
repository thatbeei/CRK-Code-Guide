/* window.addEventListener("load", ()=>guides(0, RVD)) */
var Rsave=0
var Asave=0
var Tsave=0

function showPage(boss) {
  document.querySelectorAll('.bosses > section').forEach(v => v.style.display = 'none');
  document.getElementById(boss).style.display = 'inline';
  document.getElementById("demo").innerHTML = "Selected Boss:" + boss;
}

function guides(idx, boss){
  u = '';
  for(let i in boss[idx])
    u += `<div class="guide3 guide" id="${i}"><img class="resize" alt="${i}" title="${i}" src="images/${i}.png"></img> <span>${boss[idx][i]}</span></div>`
  document.getElementById("guide").innerHTML = u;
}

const RVD = [{
  'Rebel': 'Choco/Apple Mix (CD Beasc) - 30% CD, Max CRIT%, ATK SPD and ATK - Whistle',
  'Black_Lemonade': 'Choco (Elec DMG/CD Beasc) - 14.1%+ ATK, 28%+/34% CD, 25%+ DMG Resist - Whistle',
  "Black_Raisin": "Choco/Apple Mix (Dark DMG/CD Beasc) - 28%+ Cooldown, Max CRIT% and Dark DMG",
  "Twizzly_Gummy": "Apple/Almond/Choco Mix (DMG Resist Beasc) - 10%+ Cooldown, Very High DMG Resist and 42% CRIT%",
  "Mystic_Flour": "Choco/Apple Mix (CD Beasc) - 35% CD, Max ATK, CRIT% and ATK SPD",
  "Timings": "Queue",
  "Treasures": "Watch, Scroll, Whistle"
},
{
  'Rebel': "Choco/Apple/Rasp Mix (CD Beasc) - 32.5-33.5% CD, 27% CRIT%, Max ATK AND <7.5% ATK SPD - Whistle",
  "Black_Lemonade": "Choco/Rasp Mix (Elec DMG/CD Beasc) -14.5%-16% CD, High DMG Resist and ATK - Whistle",
  "Mango": "Choco/Apple Mix (CD Beasc) - 35% CD, 27% CRIT%, No ATK SPD",
  "Twizzly_Gummy": "Choco/Almond/Apple Mix (DMG Resist/CD Beasc) Max DMG Resist, 13.8%/14.4% CD, 12%/19.5% CRIT%",
  "Mystic_Flour": "Choco/Apple/Rasp Mix (CD Beasc) - 35.1% CD, Max ATK, ATK SPD and CRIT%",
  "Timings": "Queue Mystic Flour, Queue Rebel, Cast Mango at last pillars/when Rebel hits stairs. Cast BL and Twizz when possible",
  "Treasures": "Watch, Rare Scythe, Whistle"
}
]
const AOD = [{
  "Twizzly_Gummy": "34.5% CRIT% and Max on as much ATK SPD as possible - Whistle, Robe",
  "Crème_Brûlée": "49.3% ATK SPD, 7.7% CD, Max ATK and CRIT% - Whistle, Robe, Scarf",
  "Mint_Choco": "45%+ CD, 12%+ ATK SPD",
  "Cream_Ferret": "38%+ CD, 10%+ ATK SPD",
  "Star_Coral": "38%+ CD, 10%+ ATK SPD",
  "Timings": "Queue Coral, Cast Cream Ferret, Queue Crème Brûlée, Keep Queueing Cookies to prevent Twizzly to cast. Cast Twizzly when last pillar dropped, Queue Coral. Make sure Crème Brûlée casts before Silence. Cast Twizzly when last pillar drops",
  "Treasures": "a"
},
{
  /* Nothing Else */
}
]
const TLA = [{
  "Pinecone": "Caramel/Kiwi Mix (ATK SPD Beasc) - High ATK SPD (adjust for BBP cast), 6%+ CD and Debuff Resist Focus - Robe",
  "Blueberry_Pie": "3 Rasp/2 Apple (Elec DMG Beasc) - High ATK, CRIT% and ATK SPD (adjust for BBP cast) - Whistle, Robe, Scarf",
  "Twizzly_Gummy": "Choco (CD Beasc) - 45%+ CD, High ATK SPD (Replace if you cannot get buff to stack)",
  "Frost_Queen": "Choco/Apple Mix (CD Beasc) - 44%+ CD, High CRIT% (No ATK if they steal scarf) - Whistle",
  "Cream_Ferret": "Choco (CD Beasc) - 51% CD",
  "Timings": "Queue Pinecone and cast Cream Ferret, Queue Twizzly and cast FQ when Glint is at 6/12, let BBP auto cast (BBP second cast at 00:27, BBP third at 00:11-00:09)",
  "Treasures": "Scythe, Scroll, Whistle"
},
{
  "Star_Coral": "whatever",
  "Pinecone": "a",
  "Treasures": '<br><img class="resize" alt="Whistle" src="https://www.bing.com/th?id=OIP.w2xSqtGbnbYG199hHoFffgAAAA&w=128&h=128&c=7&qlt=80&bgcl=fffffe&r=0&o=6&pid=MultiSMRSV2Source"></img>'
},
{
  "Oyster": "Over Twizzly -",
  "Rockstar": "Over Twizzly -",
  'Rebel': "Over Twizzly -",
  'Stormbringer': "Over Twizzly -",
  "Macaron": "Over Twizzly -",
  'Treasures': "Electric Scythe>Whistle - 5 Rasp BBP",
  "Timings": "Oyster:... Rockstar:... Rebel:... Stormbringer:... Macaron:..."
}
]