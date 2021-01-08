

import WorldCup from './WorldCup.js'

export default class PointsWorldCup extends WorldCup {
    constructor(name, teams=[], config={}) {
        super(name, teams, config)
    }

    produceGoalsMatch(){
        return Math.round(Math.random() * 10)
    }

    playWoldCup(match){
        const teamGoalsOne = this.produceGoalsMatch()
        const teamGoaolsTwo = this.produceGoalsMatch()
        return {
            teamOne: match[0],
            teamGoalsOne,
            teamTwo: match[1],
            teamGoaolsTwo
        }
    }

    updateTeamsResults(){

    }

    getStandings() {
        
    }
}