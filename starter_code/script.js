var userPoint = 0;
var aiPoint = 0;

// This function returns the selection of the computer
function getAISelection() {
    //TODO: randomly choose between 'rock', 'paper', or 'scissors'
    var random = Math.random();
    if (random < 1/3){
        return 'rock';
    }
    if (random < 2/3){
        return 'scissors';
    }
        return 'paper';
    
}

// This function picks the winner
function pickWinner(userValue, aiValue) {
    //TODO: pick the correct winner: user or ai
    //TODO: Add one point for the winner
    if(userValue == aiValue){
        return 'draw';
    }
    // && and
    // || or
    if(userValue === 'rock' && aiValue === 'scissors' ||
       userValue === 'paper' && aiValue === 'rock' ||
       userValue === 'scissors' && aiValue === 'paper'){
        userPoint++
        return 'user'
    }
   aiPoint += 1;
   return 'ai'
    
}

// This function sets the scoreboard with the correct points
function setScore() {
  $('#userPoint').text(userPoint);
  $('#aiPoint').text(aiPoint);
}

// This function captures the click and picks the winner
function evaluate(evt) {
    var userValue = evt.target.getAttribute('id');
    var aiValue = getAISelection();

    var winner = pickWinner(userValue, aiValue);

    if ( 'user' === winner ) {
        $('#message').delay(50).text('You have won!, Click a box to play again');
    } else if ( winner === 'draw' ) {
        $('#message').delay(50).text('Draw! Click a box to play again');
    } else {
        $('#message').delay(50).text('You have lost!, Click a box to play again');
    }
}

// This function runs on page load
$(document).ready(function(){

});
