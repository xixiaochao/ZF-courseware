/*轮播图*/
var carousel_data;
var carousel_swiper = document.getElementById("carousel_swiper");
var carousel_focus = document.getElementById("carousel_focus");
var carousel_oLis = carousel_focus.getElementsByTagName("li");
var carousel_oA = carousel_swiper.getElementsByTagName("a");
var carousel_oSpan=carousel_swiper.getElementsByTagName("span");

var xhr = new XMLHttpRequest();
xhr.open("get","json/data.json",false);
xhr.onreadystatechange = function () {
    if(xhr.readyState===4&&/^2\d{2}$/.test(xhr.status)){
        carousel_data= utils.toJSON(xhr.responseText);
    }
}
xhr.send();
console.log(carousel_data);

function bindData() {
    let str = ``;
    let strLi=``;
    for (let i = 0; i < carousel_data.length; i++) {
        let cur = carousel_data[i];
        str+=`<a href="javascript:;"><img src="${cur.imgs}" alt="">
<span>${cur.span}</span>
</a>`
        strLi += `<li></li>`
    }
    carousel_swiper.innerHTML = str;
    carousel_focus.innerHTML = strLi;
    carousel_oLis[0].classList.add("select");
    carousel_oSpan[0].classList.add("spanSelect");
    carousel_swiper.appendChild(carousel_oA[0].cloneNode(true))
}
bindData();

let timer = setInterval(autoMove,2000);
let step = null;
function autoMove(n) {
    step++;
    if(typeof n==="number"){
        step = n;
    }
    if(step===6){
        // zfAnimate(oA,{left:0},100);
        utils.css(carousel_swiper,"left",0);
        step =0;
        autoMove();
        return;
    }
    zfAnimate(carousel_swiper,{left:-660*step},100);
    changeTip(step);
}
function changeTip(n) {
    for(let i=0;i<carousel_oLis.length;i++){
        if(n===i){
            carousel_oLis[i].classList.add("select");
            carousel_oSpan[i].classList.add("spanSelect");
        }else{
            carousel_oLis[i].classList.remove("select");
            carousel_oSpan[i].classList.remove("spanSelect");
        }
        if(n===5){
            carousel_oLis[0].classList.add("select");
            carousel_oSpan[0].classList.add("spanSelect");
        }
    }
}
for(let i=0;i<carousel_oLis.length;i++){
    carousel_oLis[i].index = i;
    carousel_oLis[i].onclick = function () {
        autoMove(this.index);
    }
}