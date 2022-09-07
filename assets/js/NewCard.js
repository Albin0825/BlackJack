
/*-------------------------
 Creates new card to the player/computer
-------------------------*/
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
            Computer.appendChild(NewDiv) // adds card to computer
        }
    }, time.full)
}