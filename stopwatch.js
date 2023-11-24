let startbtn=document.querySelector("#startbtn");
let stopbtn=document.querySelector("#stopbtn");
let resetbtn=document.querySelector("#resetbtn");

startbtn.onclick=function(){
    console.log("start button was clicked");
    watchstart();
}

stopbtn.onclick=function(){
    console.log("stop button was clicked");
    watchstop();
}

resetbtn.onclick=function(){
    console.log("reset button was clicked");
    watchreset();
}

let [seconds,minutes,hours] = [0,0,0];
let displaytime=document.querySelector("#display");
let timer=null;

function stopwatch(){
    seconds++;
    if(seconds==60){
        seconds=0;
        minutes++;
        if(minutes==60){
            minutes=0;
            hours++;
        }
    }
    if(hours<10){
        h="0"+hours;
    }else{
        h=hours;
    }
    
    if(minutes<10){
        m="0"+minutes;
    }else{
        m=minutes;
    }
    
    if(seconds<10){
        s="0"+seconds;
    }else{
        s=seconds;
    }    

    displaytime.innerHTML=h+":"+m+":"+s; 
}

function watchstart(){
    if(timer!==null){
        clearInterval(timer);
    }
    timer=setInterval(stopwatch,1000);
}

function watchstop(){
    clearInterval(timer);
}

function watchreset(){
    clearInterval(timer);
    [seconds,minutes,hours] = [0,0,0];
    displaytime.innerHTML="00:00:00";
}

