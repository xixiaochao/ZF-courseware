/**
 * Created by Administrator on 2018/8/1.
 */
var $outer=$("#outer");
var outer=$("#outer")[0];
var $swiper=$("#swiper");
var $focus=$("#focus");
var $oImg;
var $oImgLength;

$.ajax({
    url:"data.json",
    async:false,
    type:"get",
    success:function (data) {
        bindData(data);
        console.log(data);
    }
});

function bindData(data) {
    var imgStr=``;
    var liStr=``;
    $.each(data,function () {
        console.log(this);
        imgStr+=`<img data-src="${this.img}">`;
        liStr+=`<li></li>`;
    })
    $swiper.html(imgStr);
    $focus.html(liStr);
    $("#focus li").eq(0).addClass("select");
    $oImg=$("#swiper img");
    $oImgLength=$oImg.length;
    lazyImg();
    outer.time=setInterval(autoMove,1500);
}

function lazyImg() {
    $oImg.each(function (index) {
        var that=this;
        var trueAddress=$(this).attr("data-src");
        var newImg=new Image;
        newImg.src=trueAddress;
        $(newImg).load(function (index) {
            that.src=trueAddress;
            index===0?$(that).fadeIn():null;
            newImg=null;
        });
    })
}

outer.step=0;
function autoMove(n) {
    outer.step++;
    typeof n!=="undefined"?outer.step=n:null;
    outer.step>$oImgLength-1?outer.step=0:null;
    $oImg.eq(outer.step).fadeIn().siblings().fadeOut();
    $("#focus li").eq(outer.step).addClass("select").siblings().removeClass("select");
}

$("#outer").hover(function () {
    clearInterval(outer.time);
},function () {
    outer.time=setInterval(autoMove,1500);
});

$("#focus li").hover(function () {
    autoMove($(this).index());
});

$("#left").click(function () {
    outer.step-=2;
    if(outer.step<=-1){
        outer.step+=$oImgLength;
    }
    autoMove();
});

$("#right").click(function () {
    autoMove();
});
