//vars

var $gamesWon = 0;
var $gamesLost = 0;
var $userScore = 0;

//random number funtion for crystals 
//random 1-3, 1-5, 3-9, 5-10 
var $randomOne = Math.floor(Math.random() * 3) + 1;
var $randomTwo = Math.floor(Math.random() * 5) + 1;
var $randomThree = Math.floor(Math.random() * (9 - 3 + 1)) + 3;
var $randomFour = Math.floor(Math.random() * (10 - 5 + 1)) + 5;

//random number for computer guess
// 20-65

var $randomGuess = Math.floor(Math.random() * (90 - 10 + 1)) + 10;

function compGuess() {
    var $computerGuess = $("<div>").html("<h4>" + $randomGuess + "<h4>");
    $("#winLoss").append($computerGuess);
    console.log($randomGuess);
};
compGuess();

//capture button click
//crystalOne
$("#crystalOne").click(function() {
    $userScore = parseInt($userScore) + parseInt($randomOne);
    $("#userScore").html("<h4>" + $userScore + "<h4>");
    console.log($userScore);
});
// crystalTwo
$("#crystalTwo").click(function() {
    $userScore = parseInt($userScore) + parseInt($randomTwo);
    $("#userScore").html("<h4>" + $userScore + "<h4>");
    console.log($userScore);
});

// crystalThree

$("#crystalThree").click(function() {
    $userScore = parseInt($userScore) + parseInt($randomThree);
    $("#userScore").html("<h4>" + $userScore + "<h4>");
    console.log($userScore);
});

// crystalFour

$("#crystalFour").click(function() {
    $userScore = parseInt($userScore) + parseInt($randomFour);
    $("#userScore").html("<h4>" + $userScore + "<h4>");
    console.log($userScore);
});



//add button clicks to user score
var $score = $("<div>").html("<h4>" + $userScore + "<h4>");
$("#userScore").append($score);

//track win/loss
function printWins() {
    var $wins = $("<div>").html("Games won: " + $gamesWon);
    $("#winLoss").append($wins);
    var $losses = $("<div>").html("Games lost: " + $gamesLost);
    $("#winLoss").append($losses);
};
printWins();

//wins

if (parseInt($userScore) === parseInt($randomGuess)) {
    alert("You got it!");
    $gamesWon++;
    printWins();
    compGuess();
}
if (parseInt($userScore) > parseInt($randomGuess)) {
    alert("Bummer! Too Much!");
    $gamesLost++;
    printWins();
    compGuess();
}
