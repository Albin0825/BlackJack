
/*==================================================
 Btn
==================================================*/
document.getElementById("start").addEventListener("click", start);
document.getElementById("hit").addEventListener("click", hit);
document.getElementById("double").addEventListener("click", double);
document.getElementById("stand").addEventListener("click", stand);
document.getElementById("surr").addEventListener("click", surr);

document.getElementById("restart").addEventListener("click", restart);

/*==================================================
 Start
==================================================*/
function start() {
    if(beting == true && standing == false) {
        //* Saves the money so you can not cheat
        localStorage.setItem("LocalMoney", number.money + (number.bet / 2));


        //* makes the button disapear or appear
        document.getElementById("start").style.display = "none";
        document.getElementById("hit").style.display = "inline-block";
        document.getElementById("double").style.display = "inline-block";
        document.getElementById("stand").style.display = "inline-block";
        document.getElementById("surr").style.display = "inline-block";

        //* changes how gets cards
        if(number.start >= 2 && number.start < 5){
            if(deeler.person == true) {
                deeler.person = false;
            }
            else {
                deeler.person = true;
            }
        }
        else if(number.start == 5){
            starting = true;
            //* changes the cursor
            document.getElementById("hit").style.cursor = "pointer";
            document.getElementById("double").style.cursor = "pointer";
            document.getElementById("stand").style.cursor = "pointer";
            document.getElementById("surr").style.cursor = "pointer";
        }

        //* give cards
        if(number.start == 1){
            FallingCard()
            card1.style.animation = "none";
            NewCard()
            setTimeout(() => {
                number.start++
                start()
            }, time.full)
            console.log("i'm here")
        }
        else{
            if(number.start != 5) {
                FadeIn();
                number.start++
                setTimeout(() => {
                    start()
                }, time.full)
            }
        }
    }
}

/*==================================================
 Hit
==================================================*/
function hit() {
    if(starting == true){
        FadeIn();
    }
}

/*==================================================
 Double
==================================================*/
function double() {
    if(starting == true){
        FadeIn();
        starting = false;
        setTimeout(() => {
            stand()
        }, time.full)
    }
}

/*==================================================
 Stand
==================================================*/
function stand() {
    if(starting == true){
        starting = false;
        standing = true;
        deeler.person = false;
        rotated = false
        stands2();
    }
}

function stands2() {
    //* hide buttons
    document.getElementById("hit").style.display = "none";
    document.getElementById("double").style.display = "none";
    document.getElementById("stand").style.display = "none";
    document.getElementById("surr").style.display = "none";
    document.getElementById("restart").style.display = "inline-block";

    //* datorn drar mer kort
    if(temp.computer < 17 && temp.person <= 20){
        if(once.stand == false) {
            Computer.removeChild(Computer.children[0]);
            once.stand = true;
        }
        FadeIn();
        setTimeout(() => {
            stands2()
        }, time.full);
    }
    //* ifall datorn blir fet
    else if(temp.computer >= 22){
        if(temp.person >= 22) {
            draw();
            EndScreen();
            document.getElementById("restart").style.pointerEvents = "auto"
        }
        else {
            win();
            EndScreen();
            document.getElementById("restart").style.pointerEvents = "auto"
        }
    }
    //* ifall spelaren blir fet
    else if(temp.person >= 22) {
        lose();
        EndScreen();
        document.getElementById("restart").style.pointerEvents = "auto"
    }
    //* om ingen blir fet
    else{
        if(temp.person > temp.computer) {
            win();
            EndScreen();
            document.getElementById("restart").style.pointerEvents = "auto"
        }
        else if(temp.person < temp.computer) {
            lose();
            EndScreen();
            document.getElementById("restart").style.pointerEvents = "auto"
        }
        else {
            draw();
            EndScreen();
            document.getElementById("restart").style.pointerEvents = "auto"
        }
    }
}

/*==================================================
 Surr
==================================================*/
function surr() {
    if(starting == true){
        starting = false;
        standing = true;
        number.money = number.money + (number.bet / 2);
        number.bet = 0;
        localStorage.setItem("LocalMoney", number.money);
        showMoney()
        showBet()
        setTimeout(() => {
            location.reload();
        }, time.full)
    }
}

/*==================================================
 Restart
==================================================*/
function restart() {
    if(standing == true) {
        location.reload()
    }
}