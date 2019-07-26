/**
 * Created by Administrator on 2018/7/28.
 */
let box = document.getElementById("box");
let uls = box.getElementsByTagName("ul");
let imgs = document.getElementsByTagName("img");
uls = [...uls];
let bodyH = null;

function bind(n) {
    for (var i = 0; i < n; i++) {
        uls.sort(function (a, b) {
            return utils.css(a, "height") - utils.css(b, "height");
        })
        uls[0].innerHTML += `<li style="height: ${utils.getRandom(280, 350)}px;">
            <img src="img/loading.gif" photo="img/${utils.getRandom(1, 27)}.jpg" alt="">
            <a href="javascript:;">点击查看详情</a>
        </li>`;
        bodyH = uls[1].offsetHeight;
    }
}
bind(20);
fn();
window.onscroll = fn;
function fn() {
    let winScroll = utils.win("scrollTop");
    let winH = utils.win("clientHeight");
    if (winScroll + winH > bodyH) {
        bind(20);
    }
    for (var i = 0; i < imgs.length; i++) {
        lazy(imgs[i]);
    }
}

function lazy(ele) {
    let winScroll = utils.win("scrollTop");
    let winH = utils.win("clientHeight");
    let imgH = utils.css(ele, "height")/2;
    let imgT = utils.offset(ele).top;
    if (winScroll + winH > imgH + imgT) {
        let newImg = new Image();
        let url = ele.getAttribute("photo");
        newImg.src = url;
        newImg.onload = function () {
            ele.src = this.src;
        }
    }
}