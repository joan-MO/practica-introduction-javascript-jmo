export default class WorldCup {

    constructor(name, teams=[], config={}) {
        this.name = name
        this.matchDaySchedule = []
        this.setup(config)
        this.setUpTeams(teams)
    }

    setup(config){

    }

    setUpTeams(NameOfTeams) {
        this.teams = [...NameOfTeams]
        
    }
}