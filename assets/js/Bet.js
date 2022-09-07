
/*-------------------------
 Btn
-------------------------*/
document.getElementById("chip5").addEventListener("click", chip5);
document.getElementById("chip10").addEventListener("click", chip10);
document.getElementById("chip50").addEventListener("click", chip50);
document.getElementById("chip100").addEventListener("click", chip100);

/*-------------------------
 Changes the money
-------------------------*/
Money.innerHTML = number.money + "$";

/*-------------------------
 Start
-------------------------*/
function chip5() {
    if(number.bet + 5 <= 500 && starting == false) {
        number.money -= 5;
        number.bet += 5;
        PrintChips();
    }
}

function chip10() {
    if(number.bet + 10 <= 500 && starting == false) {
        number.money -= 10;
        number.bet += 10;
        PrintChips();
    }
}

function chip50() {
    if(number.bet + 50 <= 500 && starting == false) {
        number.money -= 50;
        number.bet += 50;
        PrintChips();
    }
}

function chip100() {
    if(number.bet + 100 <= 500 && starting == false) {
        number.money -= 100;
        number.bet += 100;
        PrintChips();
    }
}
function PrintChips() {
    Money.innerHTML = number.money + "$";
    ChipsScore.innerHTML = number.bet;
    beting = true
}