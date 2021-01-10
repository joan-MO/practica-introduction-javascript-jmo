

import WorldCup from './WorldCup.js'

export default class PointsWorldCup extends WorldCup {
    constructor(name, teams=[]) {
        super(name, teams)
    }

    produceGoalsMatch(){
        return Math.round(Math.random() * 10)
    }

    playMatchs(match){
        let teamGoalsOne = this.produceGoalsMatch()
        let teamGoalsTwo = this.produceGoalsMatch()
        while(teamGoalsOne === teamGoalsTwo) {
            teamGoalsOne = this.produceGoalsMatch()
            teamGoalsTwo = this.produceGoalsMatch()
        }
        return {
            teamOne: match[0],
            teamGoalsOne,
            teamTwo: match[1],
            teamGoalsTwo
        }
    }
}