function StartClock(){
  var nowTime;
  var hour=document.getElementById('hour');
  var min=document.getElementById('min');
  var sec=document.getElementById('sec');
  var clockId=setInterval(showTime,1000);
}

function showTime(){
    nowTime=new Date();
    hour.innerHTML=rondNum(nowTime.getHours());
    min.innerHTML=rondNum(nowTime.getMinutes());
    sec.innerHTML = rondNum(nowTime.getSeconds());
  }

function rondNum(num){
  return num<10?'0'+num:num;
}

(function(){showTime();StartClock();})();
