// 1. 操作谁先获取谁
let $hours = document.getElementById("hours");
let $minutes = document.getElementById("minutes");
// 每个1秒钟执行一次
setInterval(function(){
    // 得到当前时间
    let date = new Date();
    // 得到当前的小时
    let hours = date.getHours();
    let minutes = date.getMinutes();
    console.log(hours,minutes);
    set($hours,hours*30+minutes*.5);
    set($minutes,minutes*6);
},1000);
function set(ele,deg){
    if(ele.id === "hours"){
        deg = deg-5;
    }
    if(ele.id === "minutes" && deg < 180){
        deg = deg + 5;
    }
   // ele.style.transform = `rotate(${deg}deg)`;
   ele.style.transform = "rotate("+deg+"deg)"
}