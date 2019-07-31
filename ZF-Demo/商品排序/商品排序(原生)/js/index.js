/**
 * Created by Administrator on 2018/7/18.
 */
//1、获取元素
var header = document.getElementById("header");//获取header元素
var btn = header.getElementsByTagName("a");//获取a标签点击按钮
var list = document.getElementById("shopList")//获取商品列表元素

//2、ajax
var data = null;//定义空对象
var xhr = new XMLHttpRequest();//发起ajax请求
xhr.open("get", "json/product.json", false);//打开(get请求方式，路径，同步)
xhr.onreadystatechange = function () {//监听请求状态
    if (xhr.readyState == 4 && xhr.status == 200) {
        data = JSON.parse(xhr.responseText);//JSON转换成字符串赋给data
    }
}
xhr.send();//结束
console.log(data);

//3、绑定数据
function bindHtml() {
    let str = "";
    data.forEach(function (item) {
        str += `<li>
                <img src="${item.img}" alt="">
                <p>${item.title}</p>
                <p class="hot">热度：${item.hot}</p>
                <del>$9999</del>
                <span>￥${item.price}</span>
                <p class="time">上架时间：${item.time}</p>
                </li>`;
    })
    list.innerHTML = str;
}
bindHtml();

//4、商品排序
for (let i = 0; i < btn.length; i++) {
    btn[i].flag=-1;
    btn[i].onclick=function () {
        this.flag*=-1
        let value=this.getAttribute("attrName");
        sort.call(this,value);
        arrowColor.call(this);
        clear.call(this);
    }
}
//排序
function sort(value) {
    if(value=="time"){
        data.sort(function (a,b) {
            return new Date(a[value])-new Date(b[value])*this.flag;
        }.bind(this));
    }else{
        data.sort(function (a,b) {
            return (a[value]-b[value])*this.flag;
        }.bind(this));
    }
    bindHtml();
}
//根据排序改变箭头颜色
function arrowColor() {
    let up=this.children[0];
    let down=this.children[1];
    if(this.flag>0){//升序
        up.classList.add('bg');
        down.classList.remove('bg');
    }else{//降序
        down.classList.add('bg');
        up.classList.remove('bg');
    }
}

//清除
function clear() {
    console.log(this);
    for (var i = 0; i < btn.length; i++) {
        if(btn[i] != this){
            btn[i].children[0].classList.remove('bg');
            btn[i].children[1].classList.remove('bg');
            btn[i].flag=-1;
        }
    }
}

