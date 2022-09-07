
/*-------------------------
 Deck and score
-------------------------*/
const Person = document.getElementById("PersonGrid");
const Computer = document.getElementById("ComputerGrid");
const PersonScore = document.getElementById("PersonScore");
const ComputerScore = document.getElementById("ComputerScore");
const ChipsScore = document.getElementById("ChipsScore");
const Money = document.getElementById("money");

/*-------------------------
 Falling card
-------------------------*/
const move = document.getElementById("move");
const card1 = document.getElementById("card1");

/*-------------------------
 End sceen
-------------------------*/
const End = document.getElementById("EndScrean");
const EndText = document.getElementById("EndText");

document.body.addEventListener("click", ambiance);

/*-------------------------
 variabler 
-------------------------*/
var number = {start: 0, bet:0, money: 500};
var temp = {person:0,computer:0};
var beting = false;
var starting = false;
var standing = false;
var deeler = {person: false}
var time = {full: 2000, half: 1000}
var text = "";
var once = false

/*-------------------------
 LocalStorage 
-------------------------*/
number.money = Number.parseInt(localStorage.getItem("LocalMoney"), 10)
if(isNaN(number.money)){
    number.money = 500;
}
console.log(Number.parseInt(localStorage.getItem("LocalMoney"), 10))

/*-------------------------
 Stops animation 
-------------------------*/
move.style.animation = "none";
card1.style.animation = "none";

End.style.animation = "none";

function ambiance() {
    if(once == false) {
        var bgaudio = new Audio('assets/audio/bg sound 3.mp3');
        bgaudio.volume = 0.06125;
        bgaudio.play();
        bgaudio.addEventListener('ended', function() {
            this.currentTime = 0;
            this.play();
        }, false);
        once = true;
    }
}


/*-------------------------
 ??? 
-------------------------*/
function FadeIn() {
    GetNumber();
    FallingCard();
    NewCard();
}

function FallingCard() {
    // Top number of card that is falling down
    document.getElementById("top").innerHTML = cardnumber;
    // Bottom number of card that is falling down
    document.getElementById("bottom").innerHTML = cardnumber;

    // Resets the animation
    move.style.animation = 'none';
    move.offsetHeight; /* trigger reflow */
    move.style.animation = null; 
    card1.style.animation = 'none';
    card1.offsetHeight; /* trigger reflow */
    card1.style.animation = null;
}



/*-------------------------
 End sceen
-------------------------*/
function win() {
    text = "YOU WIN";
    var audio = new Audio('./assets/audio/John Silke - Blackjack - Female Voice, You Win.wav');
    audio.play();
    number.money = number.money + (number.bet * 2);
    number.bet = 0;
    localStorage.setItem("LocalMoney", number.money);
    money.innerHTML = number.money;
    ChipsScore.innerHTML = number.bet;
}
function lose() {
    text = "YOU LOSE";
    var audio = new Audio('./assets/audio/John Silke - Blackjack - Female Voice, Dealer Wins.wav');
    audio.play();
    number.bet = 0;
    localStorage.setItem("LocalMoney", number.money);
    money.innerHTML = number.money;
    ChipsScore.innerHTML = number.bet;
}
function draw() {
    text = "DRAW";
    var audio = new Audio('./assets/audio/John Silke - Blackjack - Female Voice, You Lose.wav');
    audio.play();
    number.bet = 0;
    localStorage.setItem("LocalMoney", number.money);
    money.innerHTML = number.money;
    ChipsScore.innerHTML = number.bet;
}

function EndScreen() {
    EndText.innerHTML = text;
    End.style.animation = 'none';
    End.offsetHeight; /* trigger reflow */
    End.style.animation = null;
}