var curr_price = new Array(100).fill(0);
var prev_price = new Array(100).fill(0);
var percentage_change = new Array(100).fill(0);

function initPrice() {
    for(let i=0; i<100; i++) {
        curr_price[i] = Math.round((Math.random()*100+1)*100)/100
    }
}


function getPrice() {
    var ele = document.getElementsByClassName('grid-item');
    for(let i in ele) {
        prev_price[i] = curr_price[i];
        curr_price[i] += (Math.random()*0.1) - 0.05;
        curr_price[i] = Math.round(curr_price[i]*100)/100;
        percentage_change[i] = ( (curr_price[i] - prev_price[i])*100 )/(prev_price[i])
        ele[i].innerHTML = `
            Company: ` + String(i) + `<br>` +
            String(curr_price[i]) + `
        `
        if(percentage_change[i] >= 0.01) {
            ele[i].style.color = "green";
        }
        else if(percentage_change[i] <= -0.01) {
            ele[i].style.color = "red";
        }
        else {
            ele[i].style.color = "skyblue";
        }
    }
}

initPrice();
setInterval(getPrice, 1000);