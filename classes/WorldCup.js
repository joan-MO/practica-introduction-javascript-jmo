export let newArray = []

export default class WorldCup {

    constructor(name, teams=[]) {
        this.name = name
        this.matchDaySchedule = []
        this.setUpTeams(teams)
        this.summaries = []
        //this.newArray = []
    }

    setUpTeams(NameOfTeams) {
        this.teams = [...NameOfTeams]
    }

    initScheldule(round) {
        const numberofMatchDays = 1
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
        const newRound = this.createRound()
        this.matchDaySchedule = this.matchDaySchedule.concat(newRound)
    }

    createRound() {
        const newRound = []
        this.initScheldule(newRound)
        this.setTeamOne(newRound)
        this.setTeamTwo(newRound)
        this.fixLastTeamSchedule(newRound)       
        return newRound
    }

    getTeamForName() {
        return this.teams.find(team => team == this.name)
    }

    startWoldCup(){
        for (const matchDay of this.matchDaySchedule) {
            const matchDaySummary = {
                results: []
            }
            for (const match of matchDay) {
                const result = this.playMatchs(match)
                matchDaySummary.results.push(result)
            }
            this.summaries.push(matchDaySummary)
        }
    }

    playMatchs(match) {
        throw new Error('playWorldCup method not implemented yet')
    }

    getSummaries(){
        let count = 1
        newArray = []
        this.summaries.forEach(sumary =>{
            //console.log(`Resumen ${count}`)
            sumary.results.forEach(result =>{
               
                console.log(`${result.teamOne} ${result.teamGoalsOne} - ${result.teamTwo} ${result.teamGoalsTwo}`);
                
                //console.log(result);
                
                if (result.teamGoalsOne > result.teamGoalsTwo) {
                    newArray.push(result.teamOne)   
                } else {
                    newArray.push(result.teamTwo)
                }
            })
            count++
        })
        console.log('\n');
       //console.log(newArray);
    }

    playNewRound(){
        this.scheduleMatchDays()
        this.startWoldCup()
        this.getSummaries()
    }
}