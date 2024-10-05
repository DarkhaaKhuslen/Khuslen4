var time = document.getElementsByTagName('h1')[0];
var second=0, minute=0, hour=0, drum=0;
var ol = document.getElementsByTagName('ol')[0];
// start time
function watch(){
    drum++;
    if(drum>99){
        second++;
        drum=0;
    if(second>59){
        minute++;
        second=0;
        if(minute>59){
            hour++;
            minute=0;
        }
    }
}
    // ternary operator ? :
    var s = second<10 ? "0"+second : second ; 
    var m = minute<10 ? "0"+minute : minute ; 
    var h = hour<10 ? "0"+hour : hour ; 
    var d = drum<10 ? "0"+drum : drum ;
    time.innerText = h+":"+m+":"+s+":"+d;
}
var a;
function start(){
    a = setInterval(watch,10);
    document.getElementsByTagName('button')[0].disabled=true;
    document.getElementsByTagName('button')[1].disabled=false;
}
function stop(){
    clearInterval(a);
    document.getElementsByTagName('button')[0].disabled=false;
    document.getElementsByTagName('button')[1].disabled=true;
}
function restart(){
    ol.innerText="";
    second=0;
    minute=0;
    hour=0;
    drum=0;
    time.innerText = "00:00:00:00";
    clearInterval(a);
    document.getElementsByTagName('button')[0].disabled=false;
}
function lap(){
    var li = document.createElement('li');
    li.innerText=time.innerText;
    console.log(li);
    ol.append(li);
}
