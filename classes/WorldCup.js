export default class WorldCup {

    constructor(name, teams=[], config={}) {
        this.name = name
        this.matchDaySchedule = []
        this.setup(config)
        this.setUpTeams(teams)
        this.summaries = []
    }

    setup(config){
        const defaultConfig = { rounds: 1}
        this.config = Object.assign(defaultConfig, config)
    }

    setUpTeams(NameOfTeams) {
        this.teams = [...NameOfTeams]
    }

    initScheldule(round) {
        const numberofMatchDays = this.teams.length - 1
        const numberOfM
    }

    startWoldCup(){
        for (const matchDay of this.matchDaySchedule) {
            const matchDaySummary = {
                results: [],
                //standings: undefined
            }
            for (const match of matchDay) {
                const result = this.playWoldCup(match)
                //this.updateTeamsResults(result)
                matchDaySummary.results.push(result)
            }
            //this.getStandings()
            //matchDaySummary.standings = this.teams.map(team => Object.assign({}, team))
            this.summaries.push(matchDaySummary)
        }
        
    }

    getStandings(){
        throw new Error('getStandings method not implemented yet')
    }

    updateTeamsResults(){
        throw new Error('updateTeamsResults method not implemented yet')
    }

    playWoldCup(match) {
        throw new Error('playWorldCup method not implemented yet')
    }
}