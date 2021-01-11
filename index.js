import WorldCup from './classes/PointsWorldCup.js'
import { teamsWinsOfRound } from './classes/WorldCup.js';

const worldcupteams = ['Spain','England','Japan','Mexico','Polish','France','Brazil','Chinese','Canada','USA','Italy', 
'Germany','Patata','Piedra','Tijeras','Pomelo']
const roundOf16 = new WorldCup('roundOf16', worldcupteams )

console.log(`===============================================
===== START OF KNOCKOUT STAGE ======
===============================================\n`);

console.log(`===== ROUND OF 16 =====\n`);

roundOf16.playNewRound()

console.log('===== QUARTER-FINALS =====\n');

const quarterFinals = new WorldCup('quarterFinals', teamsWinsOfRound)
quarterFinals.playNewRound()

console.log("===== SEMI-FINALS =====\n");

const semiFinals = new WorldCup('semiFinals', teamsWinsOfRound)
semiFinals.playNewRound()

console.log("===== FINAL =====\n");

const final = new WorldCup('final', teamsWinsOfRound)
final.playNewRound()

console.log(`===============================================
${teamsWinsOfRound} champion of the world
===============================================`);

