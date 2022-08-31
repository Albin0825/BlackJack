const Person = document.getElementById("PersonGrid");
const back = document.getElementById("back");

var number = 2


GetNumber();
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
    const h2top = document.createElement("h2");
    h2top.classList.add("top");
    h2top.append(cardnumber);
    back.append(h2top);

    const h2bottom = document.createElement("h2");
    h2bottom.classList.add("bottom");
    h2bottom.append(cardnumber);
    back.append(h2bottom);
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