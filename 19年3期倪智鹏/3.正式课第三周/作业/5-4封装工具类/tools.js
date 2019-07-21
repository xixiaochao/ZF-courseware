let tools = (function() {
  //单位数补零
  function toDouble(n) {
    return n < 10 ? "0" + n : n;
  }

  //求和
  function sumNum(arr, attr) {
    let num = 0;
    if (attr) {
      arr = arr.map(e => e[attr]);
    }
    arr.forEach(item => {
      num += item;
    });
    return num;
  }

  //倒计时 （日、时、分、秒）
  function countDown(str, callback) {
    let newTime = new Date(str);
    let timer = null;
    timer = setInterval(() => {
      let oldTime = new Date();
      let s = Math.floor((newTime - oldTime) / 1000);
      //已经过了未来时间
      if (s < 0) {
        clearInterval(timer);
      } else {
        let day = Math.floor(s / 86400);
        day %= 86400;
        let hour = Math.floor(s / 3600);
        hour %= 3600;
        let mi = Math.floor(s / 60);
        s %= 60;
        let str =
          toDouble(day) +
          "天" +
          toDouble(hour) +
          ":" +
          toDouble(mi) +
          ":" +
          toDouble(s);
        //如果传入了函数，就调用函数
        //callback && callback(str);
        if (callback && typeof callback === "function") {
          callback(str);
        }
      }
    }, 1000);
  }

  //获取Css
  function getCss(obj, attr) {
    if (typeof obj === "string") {
      obj = document.querySelector(obj);
    }
    if (!obj) return null;
    return parseFloat(getComputedStyle(obj)[attr]);
  }

  //设置Css
  //单位：px/em/rem/vh/vm/%
  //普通的设置都是px，默认为px
  function setCss(obj, ...arg) {
    //不带单位的
    let reg = /opacity|fontSize|weight|zIndex/;
    let toType = Object.prototype.toString;
    if (typeof obj === "string") {
      obj = document.querySelector(obj);
    }
    if (!obj) return null;
    if (arg.length === 1 && toType.call(arg[0] === "[object Object]")) {
      for (let attr in arg[0]) {
        obj.style[attr] = arg[0][attr];
      }
    }
    if (arg.length === 2) {
      //如果属性不为带单位的就直接赋值即可
      if (reg.test(arg[0])) {
        obj.style[arg[0]] = arg[1];
        //如果直接是数字的，那么默认为px
      } else if (typeof arg[1] === "number") {
        obj.style[arg[0]] = arg[1] + "px";
      } else if (toType.call(arg[1] === "[object Object]")) {
        obj.style[arg[0]] = arg[1].num + arg[1].dw;
      } else {
        obj.style[arg[0]] = arg[1];
      }
    }
  }

  return {
    toDouble,
    sumNum,
    countDown,
    getCss,
    setCss
  };
})();
