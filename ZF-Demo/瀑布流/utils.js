/**
 * Created by Administrator on 2018/7/24.
 */
let utils = (function () {
    //1、获取可是窗口的高度和宽度
    function win(attr, value) {//attr属性名
        if (value == undefined) {
            return document.documentElement[attr] || document.body[attr];
        }
        document.documentElement[attr] = value;
        document.body[attr] = value;
    }

    //2、获取body的偏移量
    function offset(ele) {//ele元素标签
        let left = ele.offsetLeft;
        let top = ele.offsetTop;
        let parent = ele.offsetParent;
        while (parent.nodeName !== "BODY") {
            if (!/MSIE 8\.0/.test(navigator.userAgent)) {
                //如果不是IE8
                left += parent.clientLeft;
                top += parent.clientTop;
            }
            left += parent.offsetLeft;
            top += parent.offsetTop;
            parent = parent.offsetParent;
        }
        return {
            left: left,
            top: top
        }
    }

    //3、获取元素上的样式
    function getCss(ele, attr) {/*ele元素标签，attr样式*/
        var val;
        if ("getComputedStyle" in window) {
            val = getComputedStyle(ele)[attr];
        } else {
            val = ele.currentStyle[attr];
        }
        var reg = /^width|height|fontSize|margin|padding|top|left|right|bottom|opacity$/;
        if (reg.test(attr)) {
            if (!isNaN(parseFloat(val))) {
                val = parseFloat(val);
            } else {
                return ""
            }
        }
        return val;
    }

    //4、给单个元素设置一个样式
    function setCss(ele, attr, val) {
        if (attr === "opacity") {
            ele.style[attr] = val;
            ele.style["filter"] = "alpha(opacity=" + val * 100 + ")";
            return;
        }
        var reg = /^width|height|fontSize|(margin|padding)?(top|left|bottom|right)?$/ig;
        if (reg.test(attr)) {
            if (typeof val === "number") {
                val = val + "px";
            }
        }
        ele.style[attr] = val;
    }

    //5、批量给元素设置样式，传一个对象
    function setGroupCss(ele, obj) {
        if (Object.prototype.toString.call(obj) === '[object Object]') {
            for (let key in obj) {
                setCss(ele, key, obj[key])
            }
        }
    }

    //6、集合css
    function css(...arg) {
        if (arg.length === 3) {
            setCss(...arg);
        } else if (arg.length === 2) {
            if (Object.prototype.toString.call(arg[1]) === "[object Object]") {
                setGroupCss(...arg)
            } else {
                return getCss(...arg);
            }
        }
    }

    //7、获取 n 到 m 随机整数 n<m
    function getRandom(n, m) {
        n = Number(n);
        m = Number(m);
        if (!isNaN(n) && !isNaN(m)) {
            if (n > m) {
                [n, m] = [m, n];
            }
            return Math.round(Math.random() * (m - n) + n);
        }
    }

    return {
        win,
        offset,
        getCss,
        setCss,
        setGroupCss,
        css,
        getRandom
    }
})();