const Person = document.getElementById("PersonGrid");

const move = document.getElementById("move");
const card1 = document.getElementById("card1");

var number = 2


function GetNumber() {
    cardnumber = Math.floor(Math.random() * 10)+1;
    console.log(cardnumber)
}

FadeIn();
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

function NewCard() {
    setTimeout(() => {
        const NewDiv = document.createElement("div");
        NewDiv.classList.add("card")
        NewDiv.classList.add("sidecards")
        NewDiv.classList.add("card"+number)
        number++

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
        Person.appendChild(NewDiv);
    }, "3000")
}