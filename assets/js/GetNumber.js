
/*-------------------------
 Generate random number
-------------------------*/
function GetNumber() {
    cardnumber = Math.floor(Math.random() * 10)+1; //generates a random number between 1 and 10
    if(cardnumber == 1) {
        if(temp.computer + 11 <= 21 && deeler.person == false || temp.person + 11 <= 21 && deeler.person == true) {
            document.getElementById("top").innerHTML = "11";
            document.getElementById("bottom").innerHTML = "11";
            setTimeout(() => {
                var audio = new Audio('./assets/audio/John Silke - Blackjack - Female Voice, Ace.wav');
                audio.play();
            }, time.half)
            cardnumber = 11;
        }
    }
    setTimeout(() => {
        if(deeler.person == true){ // adds score to the player
            temp.person = temp.person + cardnumber;
            PersonScore.innerHTML = temp.person;

            // checks if player should stand automaticly (if 21 and above)
            if(temp.person >= 21) {
                setTimeout(() => {
                    stand();
                }, time.full)
            }
        }
        if(deeler.person == false){ // adds score to the computer
            temp.computer = temp.computer + cardnumber;
            ComputerScore.innerHTML = temp.computer;
        }
        if(temp.person >= 22 && deeler.person == true || temp.computer >= 22 && deeler.person == false) {
            var audio = new Audio('./assets/audio/John Silke - Blackjack - Female Voice, Bust.wav');
            audio.play();
        }
        else if(cardnumber == 11) {
        }
        else {
            var audio = new Audio('./assets/audio/John Silke - Blackjack - Female Voice, '+cardnumber+'.wav');
            audio.play();
        }
    }, time.half)
}