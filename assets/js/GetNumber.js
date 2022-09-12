
/*==================================================
 Generate random number
==================================================*/
function GetNumber() {
    //* Generates a random number between 1 and 10
    cardnumber = Math.floor(Math.random() * 10)+1;

    //* Checks if it is a 1 or a 11
    if(cardnumber == 1) {
        if(temp.computer + 11 <= 21 && deeler.person == false || temp.person + 11 <= 21 && deeler.person == true) {
            document.getElementById("top").innerHTML = "11";
            document.getElementById("bottom").innerHTML = "11";
            cardnumber = 11;
        }
    }

    setTimeout(() => {
        //* Adds score to player
        if(deeler.person == true){
            temp.person = temp.person + cardnumber;
            PersonScore.innerHTML = temp.person;

            //* Checks if player should stand automaticly (if 21 and above)
            if(temp.person >= 21) {
                setTimeout(() => {
                    stand();
                }, time.full)
            }
        }

        //* Adds score to computer
        if(deeler.person == false){
            temp.computer = temp.computer + cardnumber;
            ComputerScore.innerHTML = temp.computer;
        }

        //* Audio
        if(temp.person >= 22 && deeler.person == true || temp.computer >= 22 && deeler.person == false) {
            var audio = new Audio('./assets/audio/John Silke - Blackjack - Female Voice, Bust.wav');
            audio.play();
        }
        else if(cardnumber == 1 || cardnumber == 11) {
            var audio = new Audio('./assets/audio/John Silke - Blackjack - Female Voice, Ace.wav');
            audio.play();
        }
        else {
            var audio = new Audio('./assets/audio/John Silke - Blackjack - Female Voice, '+cardnumber+'.wav');
            audio.play();
        }
    }, time.half)
}