//User is taken to front page that says trivia game and has a start button
//WHen start button is clicked, start button is removed, questions are displayed
//Users can only select one option per question, there newest option clicked is the one which is stored
//When time expires, or user clicks "done", they are taken a results page.
//Questions dissapear on results, number of questions they got right, questions they got wrong, and questions the skipped are tallied.

//Setting timer
var triviaGameElement = document.getElementById("trivia-game");
triviaGameElement.style.display = "block";
var game = document.getElementById("game");
game.style.display = "none";
var resultsElement = document.getElementById("results");
resultsElement.style.display = "none";
var correct_answers = 0;
var winElement = document.getElementById("correct answers");
var incorrect_answers = 0;
var lossElement = document.getElementById("incorrect answers");
var unanswered = 0;
var unsolvedElement = document.getElementById("unanswered");
var myVar;
var timer = document.getElementById("timer");
var count = 45;
var start = document.getElementById("start-button");
var game = document.getElementById("game");
var done = document.getElementById("done");
start.addEventListener("click",()=>{
    myVar = setInterval(myTimer, 1000);
    game.style.display = "block";
    triviaGameElement.style.display = "none";

})

function myTimer(){
    count--;
    timer.innerHTML = count;
    if(count === 0){
        clearInterval(myVar);
        endGame();
    }
}

//done button
done.addEventListener("click",(event)=>{
    event.preventDefault();
    endGame(event);
})
function endGame(){
    resultsElement.style.display = "block";
    game.style.display = "none";

//scores are tallied
    for(var i = 1; i < 12; i++) {
        if(game["answer" + i].value==="1"){
            correct_answers ++;           
        }else if(game["answer" + i].value==="0"){
            incorrect_answers ++;
        }else if(game["answer" + i].value===""){
            unanswered ++;
        }
    }

    winElement.innerHTML = correct_answers;
    lossElement.innerHTML = incorrect_answers;
    unsolvedElement.innerHTML = unanswered;

}

