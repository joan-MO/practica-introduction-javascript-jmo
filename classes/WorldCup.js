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
        const numberOfMatchesPerMatchDay = this.teams.length / 2
        for (let i = 0; i < numberofMatchDays; i++) {
            const matchDay = []
            for (let j = 0; j < numberOfMatchesPerMatchDay; j++) {
                const match = ['Equipo uno', 'Equipo dos']
                matchDay.push(match)   
            }
          round.push(matchDay)
        }
    }

    getNamesofTeam(){
        return this.teams.map(team=> team)
    }

    getTeamNamesForSchedule() {
        const teamNames = this.getNamesofTeam()
        if (teamNames.length % 2 == 0) {
           return teamNames;
        } else {
            return [...teamNames, null];
        }
    }

    setTeamOne(round) {
        const teamNames = this.getTeamNamesForSchedule()
        const maxTeamOne = teamNames.length - 2
        let teamIndex = 0
        round.forEach(matchDay => {
            matchDay.forEach(match => {
                match[0] = teamNames[teamIndex]
                teamIndex++
                if (teamIndex > maxTeamOne) {
                    teamIndex = 0
                }
            });
        });
    }

    setTeamTwo(round) {
        const teamNames = this.getTeamNamesForSchedule();
        const maxTeamTwo = teamNames.length - 2
        let teamIndex = maxTeamTwo
        round.forEach(matchDay => {
            let firstMatchFound = false
            matchDay.forEach(match => {
                if (!firstMatchFound) {
                    firstMatchFound = true
                } else {
                    match[1] = teamNames[teamIndex]
                    teamIndex--
                    if (teamIndex < 0) {
                        teamIndex = maxTeamTwo
                    }
                }
            });
        });
    }

    fixLastTeamSchedule(round) {
        let matchDayNumber = 1
        const teamNames = this.getTeamNamesForSchedule()
        const lastTeamName = teamNames[teamNames.length -1]
        round.forEach(matchDay => {
            const firstMatch = matchDay[0]
            if (matchDayNumber % 2 == 0) {
                firstMatch[1] = firstMatch[0]
                firstMatch[0] = lastTeamName 
            } else {
                firstMatch[1] = lastTeamName
            }
            matchDayNumber++
        });
    }

    scheduleMatchDays(){
        for (let i = 0; i < this.config.rounds; i++) {
            const newRound = this.createRound()
            if (i % 2 != 0) {
                for (const matchDay of newRound) {
                    for (const match of matchDay) {
                        const teamOne = match[0]
                        match[0] = match[1]
                        match[1] = teamOne
                    }
                }
            }
            this.matchDaySchedule = this.matchDaySchedule.concat(newRound)
        }
    }

    createRound() {
        const newRound = []
        this.initScheldule(newRound)
        this.setTeamOne(newRound)
        this.setTeamTwo(newRound)
        this.fixLastTeamSchedule(newRound)       
        return newRound
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
            console.log(this.summaries);
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