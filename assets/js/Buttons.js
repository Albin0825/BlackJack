
/*-------------------------
 Btn
-------------------------*/
document.getElementById("start").addEventListener("click", start);
document.getElementById("hit").addEventListener("click", hit);
document.getElementById("stand").addEventListener("click", stand);

/*-------------------------
 Start
-------------------------*/
function start() {
    if(beting == true) {
        document.getElementById("start").style.cursor = "no-drop";
        document.getElementById("hit").style.cursor = "default";
        document.getElementById("stand").style.cursor = "default";
        if(number.start >= 2){
            deeler.person = true;
        }
        if(number.start == 4){
            starting = true;
        }
        if(starting == false){
            if(number.start != 4) {
                FadeIn();
                number.start++
                setTimeout(() => {
                    start()
                }, time.full)
            }
        }
    }
}

/*-------------------------
 Hit
-------------------------*/
function hit() {
    if(starting == true){
        FadeIn();
    }
}

/*-------------------------
 Stand
-------------------------*/
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
    if(temp.computer < 16 && temp.person <= 21){
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