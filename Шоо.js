// Togloom duussan esehiig hadgalah 
var isNewGame;
var activePlayer;
var scores;
var roundScore;
var diceDom = document.querySelector(".dice");
initGame();
function initGame(){
isNewGame = true;

// Toglogchiin eeljiig hadgalah huvisagch
activePlayer = 0;
// Toglogchiin tsugluulsan onoog hadgalah huvisagch
scores = [0,0];
// Toglogchiin eeljindee tsugluulj bga onoog hadgalah huvisagch
roundScore = 0;
// Shoonii ali talaaraa buusniig hadgalah huvisagch.1-6 toog buuj bgag sanamsargui baidliig hadgalah huvisagch
// *****document.querySelector(".dice").style.display = "none";
// <div class="player-score" id="score-0">43</div>
document.getElementById('score-0').textContent = "0";
document.getElementById('score-1').textContent = "0";
document.getElementById('current-0').textContent = "0";
document.getElementById('current-1').textContent = "0";
document.getElementById("name-0").textContent = "Player 1";
document.getElementById("name-1").textContent = "Player 2";

document.querySelector(".player-0-panel").classList.remove("winner");
document.querySelector(".player-1-panel").classList.remove("winner");

document.querySelector(".player-0-panel").classList.remove("active");
document.querySelector(".player-1-panel").classList.remove("active");

document.querySelector(".player-0-panel").classList.add("active");

diceDom.style.display = "none";
}
// roll-dice tovch darhad ashiglah function bichih
document.querySelector('.btn-roll').addEventListener('click', function(){
if (isNewGame) {
    var diceNumber = Math.floor(Math.random()*6) + 1;
    diceDom.style.display = "block";
    diceDom.src = "dice-" + diceNumber + ".png";
    //buusan too n 1 ees ih baival idevhtei toglogchiin onoog nemegduulne 
if (diceNumber !== 1){
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;   
} else {
    switchToNextplayer();
} 
} else {
    alert("Та хожилоо тоглоомыг дахин эхлүүлнэ үү")
}
});
// HOLD tovchiig idevhjuuleh
document.querySelector(".btn-hold").addEventListener("click", function(){
if (isNewGame) {
    scores[activePlayer] = scores[activePlayer] + roundScore;
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
if (scores[activePlayer] >= 20){
    isNewGame = false;
    document.getElementById("name-" + activePlayer).textContent = 'WINNER!!!';
    document.querySelector(".player-" + activePlayer + "-panel").classList.add("winner");
    document.querySelector(".player-" + activePlayer + "-panel").classList.remove("active");
} else {
    switchToNextplayer();
}
} else {
    alert("Та хожилоо тоглоомыг дахин эхлүүлнэ үү")
}
})
function switchToNextplayer() {
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0)
// eeljiig solig code
document.querySelector('.player-0-panel').classList.toggle("active");
document.querySelector('.player-1-panel').classList.toggle("active");
diceDom.style.display = 'none';
}
document.querySelector(".btn-new").addEventListener("click", initGame);
alert()
