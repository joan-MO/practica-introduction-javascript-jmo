import WorldCup from './classes/PointsWorldCup.js'
import { newArray } from './classes/WorldCup.js';
//import { cup } from './classes/WorldCup.js'

//const config = { rounds: 4 }
const worldcupteams = ['Spain','England','Japan','Mexico','Polish','France','Brazil','Chinese','Canada','USA','Italy', 
'Germany','Patata','Piedra','Tijeras','Pomelo']
const match1 = new WorldCup('match1', worldcupteams )

console.log(`===============================================
===== COMIENZO DE LA FASE DE ELIMINATORIAS ======
===============================================\n`);

console.log(`===== OCTAVOS DE FINAL =====\n`);

match1.playNewRound()

console.log('===== CUARTOS DE FINAL =====\n');

const match2 = new WorldCup('match2', newArray)
match2.playNewRound()

console.log("===== SEMIFINALES =====\n");

const match3 = new WorldCup('match3', newArray)
match3.playNewRound()

console.log("===== FINAL =====\n");

const match4 = new WorldCup('match4', newArray)
match4.playNewRound()

console.log('===============================================\n');

console.log(`${newArray} campeón del mundo`);
console.log('===============================================');

