// deck and score
const Person = document.getElementById("PersonGrid");
const Computer = document.getElementById("ComputerGrid");
const PersonScore = document.getElementById("PersonScore");
const ComputerScore = document.getElementById("ComputerScore");

// falling card
const move = document.getElementById("move");
const card1 = document.getElementById("card1");

//btns
document.getElementById("start").addEventListener("click", start);
document.getElementById("hit").addEventListener("click", hit);
document.getElementById("stand").addEventListener("click", stand);

// endscreen
const End = document.getElementById("EndScrean");
const EndText = document.getElementById("EndText");

//variabler
var number = 0;
var temp = {person:0,computer:0};
var starting = false;
var standing = false;
var deeler = {person: false}
var time = {full: 2000, half: 1000}
var text = "";


move.style.animation = "none";
card1.style.animation = "none";

End.style.animation = "none";

//button functions
function start() {
    document.getElementById("hit").style.cursor = "default";
    document.getElementById("stand").style.cursor = "default";
    if(number >= 2){
        deeler.person = true;
    }
    if(number == 4){
        starting = true;
    }
    if(starting == false){
        if(number != 4) {
            FadeIn();
            number++
            setTimeout(() => {
                start()
            }, time.full)
        }
    }
}
function hit() {
    if(starting == true){
        FadeIn();
    }
}
function stand() {
    if(starting == true){
        starting = false;
        standing = true;
        deeler.person = false;
        stands2();
    }
}

function stands2() {
    // datorn drar mer kort
    if(temp.computer <= 15){
        FadeIn();
        setTimeout(() => {
            stands2()
        }, time.full)
    }
    // ifall datorn blir fet
    else if(temp.computer >= 22){
        if(temp.person >= 22) {
            draw();
            EndScreen();
        }
        else {
            win();
            EndScreen();
        }
    }
    // ifall spelaren blir fet
    else if(temp.person >= 22) {
        lose();
        EndScreen();
    }
    // om ingen blir fet
    else{
        if(temp.person > temp.computer) {
            win();
            EndScreen();
        }
        else if(temp.person < temp.computer) {
            lose();
            EndScreen();
        }
        else {
            draw();
            EndScreen();
        }
    }
}

function EndScreen() {
    EndText.innerHTML = text;
    End.style.animation = 'none';
    End.offsetHeight; /* trigger reflow */
    End.style.animation = null;
}

function win() {
    text = "YOU WIN";
}
function lose() {
    text = "YOU LOSE";
}
function draw() {
    text = "DRAW";
}


function FadeIn() {
    GetNumber();
    FallingCard();
    NewCard();
}

function GetNumber() {
    cardnumber = Math.floor(Math.random() * 10)+1; //generates a random number between 1 and 10
    setTimeout(() => {
        if(deeler.person == true){ // adds score to the player
            temp.person = temp.person + cardnumber;
            PersonScore.innerHTML = temp.person;
            if(temp.person >= 21) { // checks if player should stand automaticly (if 21 and above)
                setTimeout(() => {
                    stand();
                }, time.full)
            }
        }
        if(deeler.person == false){ // adds score to the computer
            temp.computer = temp.computer + cardnumber;
            ComputerScore.innerHTML = temp.computer;
        }
    }, time.half)
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

function NewCard() {
    setTimeout(() => {
        const NewDiv = document.createElement("div");
        NewDiv.classList.add("card")
        NewDiv.classList.add("sidecards")

        const imgbg = document.createElement("img"); // the background of the card
        imgbg.src = "assets/img/Card.svg";
        NewDiv.append(imgbg);

        const imgdia = document.createElement("img"); // diamond shape on card
        imgdia.src = "assets/img/Diamonds.svg";
        imgdia.classList.add("diamond")
        NewDiv.append(imgdia);

        const h3top = document.createElement("h3"); // top number of card
        h3top.classList.add("top");
        h3top.append(cardnumber);
        NewDiv.append(h3top);

        const h3bottom = document.createElement("h3"); // bottom number of card
        h3bottom.classList.add("bottom");
        h3bottom.append(cardnumber);
        NewDiv.append(h3bottom);
        
        if(deeler.person == true) {
            Person.appendChild(NewDiv); // adds card to player
        }
        if(deeler.person == false) {
            Computer.appendChild(NewDiv) // adds card to  computer
        }
    }, time.full)
}