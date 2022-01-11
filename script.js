let h = 0;
let m = 0;
let s = 0;
let ml = 0;

let time = 10;
let cron;

function start_stop(){
   if(document.getElementById("start_timer").innerHTML == "start"){
        cron = setInterval(() => {timer()}, time);
        document.getElementById("start_timer").style.backgroundColor = '#ff4400';
        document.getElementById("start_timer").innerHTML = 'stop';
   }else{
       clearInterval(cron);
        document.getElementById("start_timer").style.backgroundColor = '#00ffcc';
        document.getElementById("start_timer").innerHTML = 'start';
   }
}

function reset(){
    clearInterval(cron);
    
    h = 0;
    m = 0;
    s = 0;
    ml = 0;

    document.getElementById("timer").innerHTML = '00:00:00.00';

    document.getElementById("start_timer").style.backgroundColor = '#00ffcc';
    document.getElementById("start_timer").innerHTML = 'start';
}

function timer(){
    ml++;

    if(ml == 100){
        s++;
        ml = 0;
    }
    if(s == 60){
        m++;
        s = 0;
    }
    if(m == 60){
        h++;
        m = 0;
    }
    
    document.getElementById("timer").innerHTML = (h < 10 ? '0' + h : h) + ":" + (m < 10 ? '0' + m : m) + ":" + (s < 10 ? '0' + s : s) + "." + (ml < 10 ? '0' + ml : ml);
}
