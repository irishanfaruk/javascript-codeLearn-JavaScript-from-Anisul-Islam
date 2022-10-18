//create a function called highestScore that will 
// Receive a 1d arry called scores
//return the highest score
function highestScore(scores) {
    var max = scores[0];
    for (var i = 1; i < scores.length; i++) {
        if (max < scores[i]) {
            max = scores[i];
        }
    }
    return max;
}
var x = [50, 10, 40, 66, 70, 20, 34, 58, 102]
var maxScore = highestScore(x)
console.log(maxScore)