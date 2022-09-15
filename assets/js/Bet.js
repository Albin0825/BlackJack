
/*==================================================
 Btn
==================================================*/
document.getElementById("chip2.5").addEventListener("click", function(){chip(2.5)});
document.getElementById("chip5").addEventListener("click", function(){chip(5)});
document.getElementById("chip10").addEventListener("click", function(){chip(10)});
document.getElementById("chip50").addEventListener("click", function(){chip(50)});
document.getElementById("chip100").addEventListener("click", function(){chip(100)});

/*==================================================
 Start
==================================================*/
function chip(num) {
    if(number.bet + num <= 500 && number.money >= num && standing == false) {
        //* cahnges the amount of money you have
        number.money -= num;
        showMoney()
        //* cahnges the bet you have set in
        number.bet += num;
        showBet();
        //* makes it so you can press start
        beting = true
        document.getElementById("start").style.cursor = "pointer";
    }
}