// the persons deck
const Person = document.getElementById("PersonGrid");
const Computer = document.getElementById("ComputerGrid");
const PersonScore = document.getElementById("PersonScore");

// falling card
const move = document.getElementById("move");
const card1 = document.getElementById("card1");

//btns
document.getElementById("start").addEventListener("click", start);
document.getElementById("hit").addEventListener("click", hit);
document.getElementById("stand").addEventListener("click", stand);

//variabler
var number = 0;
var temp = {person:0,computer:0};
var starting = false;
var standing = false;
var deeler = {person: false}
var time = {full: 2000, half: 1000}

//button functions
function start() {
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
        }
        else {
            win();
        }
    }
    // ifall spelaren blir fet
    else if(temp.person >= 22) {
        lose();
    }
    else{
        if(temp.person > temp.computer) {
            win();
        }
        else if(temp.person < temp.computer) {
            lose();
        }
        else {
            draw();
        }
    }
}

function win() {
    console.log("du van")
}
function lose() {
    console.log("du förlorade")
}
function draw() {
    console.log("ingen van???")
}


function FadeIn() {
    GetNumber();
    FallingCard();
    NewCard();
}

function GetNumber() {
    cardnumber = Math.floor(Math.random() * 10)+1;
    setTimeout(() => {
        if(deeler.person == true){
            temp.person = temp.person + cardnumber;
            PersonScore.innerHTML = temp.person;
            if(temp.person >= 21) {
                setTimeout(() => {
                    stand();
                }, time.full)
            }
        }
        if(deeler.person == false){
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

        const imgbg = document.createElement("img");
        imgbg.src = "assets/img/Card.svg";
        NewDiv.append(imgbg);

        const imgdia = document.createElement("img");
        imgdia.src = "assets/img/Diamonds.svg";
        imgdia.classList.add("diamond")
        NewDiv.append(imgdia);

        const h2top = document.createElement("h2");
        h2top.classList.add("top");
        h2top.append(cardnumber);
        NewDiv.append(h2top);

        const h2bottom = document.createElement("h2");
        h2bottom.classList.add("bottom");
        h2bottom.append(cardnumber);
        NewDiv.append(h2bottom);
        if(deeler.person == true) {
            Person.appendChild(NewDiv);
        }
        if(deeler.person == false) {
            Computer.appendChild(NewDiv)
        }
    }, time.full)
}



