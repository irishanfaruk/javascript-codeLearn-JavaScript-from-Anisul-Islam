//Create a function called highestRunScorer that will
//Receive a 2nd array called playerInfo
//Based on highest scroe, return the name of the player 

function highestRunScorer(playerInfo) {
    var hightestScore = playerInfo[0][0]
    var hightestScore = playerInfo[0][1]
    for (var i = 1; i < playerInfo.length; i++) {
        if (hightestScore < playerInfo[i][1]) {
            hightestScore = playerInfo[i][1]
            hightestScore = playerInfo[i][0]
        }
    }
    return hightestScore;
}

var playerInfo = [
    ['Virat Kholi', 125],
    ['MS Dhoni', 80],
    ['Joe Root', 145],
    ['Maxwell', 61],
    ['Mohammad Rezwan', 120]
]
var topScorer = highestRunScorer(playerInfo);
console.log(topScorer)