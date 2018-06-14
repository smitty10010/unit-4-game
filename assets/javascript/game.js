$(document).ready(function() {
    //set global variables
    var computerValue = 0;
    var playerValue = 0;
    var wins = 0;
    var loss = 0;

    //Game reset function
    var reset = function() {
        computerGuess();
        getCrystalValues();
        playerValue = 0;
    }

    $("#wins").text(" " + wins);
    $("#losses").text(" " + loss);

    //function for computer to select random number 19-120
    computerGuess = function() {
        guess = Math.floor(Math.random() * 102) + 19;
        computerValue = guess;
        $("#computer-guess").text(computerValue);

    }

    computerGuess();
    console.log(computerValue);

    //function or functions for selecting random number for crystals 1-12
    getCrystalValues = function() {
        for (i = 1; i <= 4; i++) {
            crystalValue = Math.floor(Math.random() * 12) + 1;
            //assign random crystal number to crystals
            $("#gem-" + i).attr("value", crystalValue);
            console.log(crystalValue);
        }
    }
    getCrystalValues();
    //make crystals on.click events
    $(".gems").on("click", function() {
        stringValue = $(this).attr("value");
        //once crystal is clicked user number incraments by value of crystals
        playerValue += parseInt(stringValue, 10);

        //if player value = computer value win counter goes up and game resets

        if (playerValue === computerValue) {
            wins++;
            $("#wins").text(" " + wins);
            reset();
            //if player value > computer value loss counter goes up and game resets 

        } else if (playerValue > computerValue) {
            loss++;
            $("#losses").text(" " + loss);
            reset();
        }
        $("#user-number").text(playerValue);

    })
});