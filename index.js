import axios from 'axios';
import WorldCup from './classes/PointsWorldCup.js'
import { resultThird, teamsWinsOfRound } from './classes/WorldCup.js';
import { url } from './data/data.js';

try {
    const response = await axios.get(url)
    const apiWorldCupJson = response.data.teams
    var deleteTeamsUnNecessarry = apiWorldCupJson.splice(0,16)
    const worldcupteams = deleteTeamsUnNecessarry.map(team => team.name)

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

    console.log('===== THIRD AND FOURTH PLACE =====\n');

    if (resultThird[0].teamGoalsOne > resultThird[0].teamGoalsTwo) {
        console.log(`${resultThird[0].teamOne} ${resultThird[0].teamGoalsOne} - ${resultThird[0].teamGoalsTwo} ${resultThird[0].teamTwo}  => ${resultThird[0].teamOne}\n`);
       
    } else {
        console.log(`${resultThird[0].teamOne} ${resultThird[0].teamGoalsOne} - ${resultThird[0].teamGoalsTwo} ${resultThird[0].teamTwo}  => ${resultThird[0].teamTwo}\n`);
        
    }

    console.log("===== FINAL =====\n");

    const final = new WorldCup('final', teamsWinsOfRound)
    final.playNewRound()

console.log(`===============================================
${teamsWinsOfRound} champion of the world 
===============================================`);

} catch(error) {
    console.error('ERROR', error);
}