
// Iteration 8: Making scoreboard functional

let score=localStorage.getItem("score");
document.getElementById('score-board').innerText=score;
document.getElementById('play-again-button').addEventListener('click',function(){
    score = 0
    localStorage.setItem("score",score)
    location.href="./game.html"
})
