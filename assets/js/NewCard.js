
/*==================================================
 Creates new card to the player/computer
==================================================*/
function NewCard() {
    setTimeout(() => {

        //* creates div that everything is inside of
        const NewDiv = document.createElement("div");
        NewDiv.classList.add("card")
        NewDiv.classList.add("sidecards")

        if(number.start == 1) {
            const imgdia = document.createElement("img");
            imgdia.src = "./assets/img/Card 2.svg";
            NewDiv.append(imgdia);
        }
        else {
            //* background of the card
            const imgbg = document.createElement("img");
            imgbg.src = "assets/img/Card.svg";
            NewDiv.append(imgbg);

            //* diamond shape on card
            const imgdia = document.createElement("img");
            imgdia.src = "assets/img/Diamonds.svg";
            imgdia.classList.add("diamond")
            NewDiv.append(imgdia);
        }

        //* top number of card
        const h3top = document.createElement("h3");
        h3top.classList.add("top");
        h3top.append(cardnumber);
        NewDiv.append(h3top);

        //* bottom number of card
        const h3bottom = document.createElement("h3");
        h3bottom.classList.add("bottom");
        h3bottom.append(cardnumber);
        NewDiv.append(h3bottom);
        
        if(deeler.person == true) {
            Person.append(NewDiv); // adds card to player
        }
        if(deeler.person == false) {
            if(rotated == true) {
                Computer.append(NewDiv) // adds card to computer
            }
            if(rotated == false) {
                Computer.prepend(NewDiv) // adds card to computer
                rotated = true;
            }
        }
    }, time.full)
}