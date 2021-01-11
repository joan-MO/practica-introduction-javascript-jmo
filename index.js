import axios from 'axios';
import WorldCup from './classes/PointsWorldCup.js'
import { teamsWinsOfRound } from './classes/WorldCup.js';

const url = 'https://raw.githubusercontent.com/openfootball/world-cup.json/master/2014/worldcup.teams.json'

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

    console.log("===== FINAL =====\n");

    const final = new WorldCup('final', teamsWinsOfRound)
    final.playNewRound()

    console.log(`===============================================
    ${teamsWinsOfRound} champion of the world
    ===============================================`);

} catch(error) {
    console.error('ERROR', error);
}