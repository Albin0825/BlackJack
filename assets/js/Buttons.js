
/*==================================================
 Btn
==================================================*/
document.getElementById("start").addEventListener("click", start);
document.getElementById("hit").addEventListener("click", hit);
document.getElementById("double").addEventListener("click", double);
document.getElementById("stand").addEventListener("click", stand);
document.getElementById("surr").addEventListener("click", surr);

/*==================================================
 Start
==================================================*/
function start() {
    if(beting == true && standing == false) {
        //* makes the button disapear or appear
        document.getElementById("start").style.display = "none";
        document.getElementById("hit").style.display = "inline-block";
        document.getElementById("double").style.display = "inline-block";
        document.getElementById("stand").style.display = "inline-block";
        document.getElementById("surr").style.display = "inline-block";

        if(number.start == 2){
            deeler.person = true;
        }
        else if(number.start == 3){
            deeler.person = false;
        }
        else if(number.start == 4){
            deeler.person = true;
        }
        if(number.start == 5){
            starting = true;
            //* changes the cursor
            document.getElementById("hit").style.cursor = "pointer";
            document.getElementById("double").style.cursor = "pointer";
            document.getElementById("stand").style.cursor = "pointer";
            document.getElementById("surr").style.cursor = "pointer";
        }
        if(starting == false){
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
        stands2();
    }
}

function stands2() {
    //* datorn drar mer kort
    if(temp.computer < 17 && temp.person <= 20){
        FadeIn();
        setTimeout(() => {
            stands2()
        }, time.full)
    }
    //* ifall datorn blir fet
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
    //* ifall spelaren blir fet
    else if(temp.person >= 22) {
        lose();
        EndScreen();
    }
    //* om ingen blir fet
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
        money.innerHTML = number.money;
        ChipsScore.innerHTML = number.bet;
        setTimeout(() => {
            location.reload();
        }, time.full)
    }
}