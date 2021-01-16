export let teamsWinsOfRound = []
export let newArray = []
export let resultThird = []
export default class WorldCup {

    constructor(name, teams=[]) {
        this.name = name
        this.matchDaySchedule = []
        this.setUpTeams(teams)
        this.summaries = []
      
    }

    setUpTeams(NameOfTeams) {
        this.teams = [...NameOfTeams]
    }

    numberOfMatchesPerMatchDay(matchDay){
        const numberOfMatchesPerMatchDay = this.teams.length / 2
        for (let j = 0; j < numberOfMatchesPerMatchDay; j++) {
            const match = ['Equipo uno', 'Equipo dos']
            matchDay.push(match)   
        }
    }

    initScheldule(round) {
        const numberofMatchDays = 1
        for (let i = 0; i < numberofMatchDays; i++) {
            const matchDay = []
            this.numberOfMatchesPerMatchDay(matchDay)
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

    matchDayTeamOne(matchDay){
        const teamNames = this.getTeamNamesForSchedule()
        const maxTeamOne = teamNames.length - 2
        let teamIndex = 0
        matchDay.forEach(match => {
            match[0] = teamNames[teamIndex]
            teamIndex++
            if (teamIndex > maxTeamOne) {
                teamIndex = 0
            }
        });
    }

    setTeamOne(round) {
        round.forEach(matchDay => {
            this.matchDayTeamOne(matchDay);
        });
    }

    matchDayTeamTwo(matchDay){
        const teamNames = this.getTeamNamesForSchedule();
        const maxTeamTwo = teamNames.length - 2
        let teamIndex = maxTeamTwo
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
    }

    setTeamTwo(round) {
        round.forEach(matchDay => {
            this.matchDayTeamTwo(matchDay)
        });
    }

    isMatchDayNumberPair(matchDayNumber, firstMatch, lastTeamName){
        if (matchDayNumber % 2 == 0) {
            firstMatch[1] = firstMatch[0]
            firstMatch[0] = lastTeamName 
        } else {
            firstMatch[1] = lastTeamName
        }
    }

    fixLastTeamSchedule(round) {
        let matchDayNumber = 1
        const teamNames = this.getTeamNamesForSchedule()
        const lastTeamName = teamNames[teamNames.length -1]
        round.forEach(matchDay => {
            const firstMatch = matchDay[0]
            this.isMatchDayNumberPair(matchDayNumber, firstMatch, lastTeamName)
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

    matchDay(matchDay){
        const matchDaySummary = {
            results: []
        }
        for (const match of matchDay) {
            const result = this.playMatchs(match)
            matchDaySummary.results.push(result)
        }

        if (matchDaySummary.results.length === 2) {

            matchDaySummary.results.forEach(result => {

                if (result.teamGoalsOne < result.teamGoalsTwo) {
                    newArray.push(result.teamOne)   
                } else {
                    newArray.push(result.teamTwo)
                }
        });

        const result2 = this.playMatchs(newArray)

        resultThird.push(result2)
           
        }
      
        this.summaries.push(matchDaySummary)

    }
    
    startWoldCup(){
        for (const matchDay of this.matchDaySchedule) {   
            this.matchDay(matchDay); 
        }
    }

    checkWhoWin(result){
        if (result.teamGoalsOne > result.teamGoalsTwo) {
            console.log(`${result.teamOne} ${result.teamGoalsOne} - ${result.teamGoalsTwo} ${result.teamTwo}  => ${result.teamOne}`);
            teamsWinsOfRound.push(result.teamOne)   
        } else {
            console.log(`${result.teamOne} ${result.teamGoalsOne} - ${result.teamGoalsTwo} ${result.teamTwo}  => ${result.teamTwo}`);
            teamsWinsOfRound.push(result.teamTwo)
        }
    }

    getSummaries(){
        let count = 1
       
        teamsWinsOfRound = []
        this.summaries.forEach(sumary =>{  
            sumary.results.forEach(result =>{
                this.checkWhoWin(result)    
            })
            count++
        })
      
        console.log('             ');
     
    }

    playNewRound(){
        this.scheduleMatchDays()
        this.startWoldCup()
        this.getSummaries()
        
    }

    playMatchs(match) {
        throw new Error('playWorldCup method not implemented yet')
    }

}