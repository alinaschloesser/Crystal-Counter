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
var $computerGuess = $("<div>").html("<h4>" + $randomGuess + "<h4>");
$("#winLoss").append($computerGuess);

//capture button click

// $(#crylstalOne).click(function() {
            //     $userScore = parseInt($userScore) + parseInt($randomOne);

            // })




//add button clicks to user score
var $score = $("<div>").html("<h4>" + $userScore + "<h4>");
$("#userScore").append($score);

//track win/loss
var $wins = $("<div>").html("Games won: " + $gamesWon);
$("#winLoss").append($wins);
var $losses = $("<div>").html("Games lost: " + $gamesLost);
$("#winLoss").append($losses);
