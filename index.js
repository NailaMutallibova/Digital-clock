var hour = document.querySelector('.hour');
var minute = document.querySelector('.minute');
var second = document.querySelector('.second');
var start = document.querySelector('.start');
var stop = document.querySelector('.stop');
var reset = document.querySelector('.reset');
var secondA=0;
var minuteB=0;
var hourC=0;
var period=0;

start.onclick=function(){

    setInterval(function(){
        secondA++
        hour.innerText=hourC
        minute.innerText=minuteB
        second.innerText=secondA
        if(secondA==60){
            minuteB++
            secondA=0
            second.innerText=secondA
            secondA++
            second.innerText=secondA
        }
        else if(minuteB==60){
            hourC++
            minuteB=0
            minute.innerText=minuteB
            minuteB++
            minute.innerText=minuteB
        }
        if(secondA>9 ){
           second.innerText=secondA   
        }else {
            second.innerText='0'+secondA  
        }
        if(minuteB>9){
            minute.innerText=minuteB
        }else{
            minute.innerText='0'+minuteB
        }
        if(hourC>9 ){
            hour.innerText=hourC
        }else{
            hour.innerText='0'+hourC
        }

    },1000)    
}

stop.onclick=function(){
    period++
    clearInterval(period)
}

reset.onclick=function(){
     secondA=0;
     minuteB=0;
     hourC=0;
     hour.innerText=hourC
     minute.innerText=minuteB
     second.innerText=secondA
    
}
