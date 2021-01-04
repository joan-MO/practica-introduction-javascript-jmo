import WorldCup from './classes/WorldCup.js'

const config = { rounds: 1 }
const worldcupteams = ['Spain','England','Japan']
const worldcup2014 = new WorldCup('World Cup Brazil', worldcupteams,config )

console.log(worldcup2014);

const teamNames = worldcup2014.teams.map(team => team)



teamNames.forEach(function(equipo){
    console.log(equipo);
})