//1. vue数据驱动，主要操作的是数据

//2. for, for in, for of, forEach的区别(4个)
//1) for可以循环数组、字符串，但是不能循环对象，for 中， i是索引
//2) forEach是数组的方法，只能遍历数组，但不支持return，不管有没有写return，返回都是undefined
//3) for in可以循环数组、字符串、对象，for in中，key是属性名(索引)，属性名(索引) in 数组/字符串/对象，key会变成字符串类型; 只有for in可以遍历出所有的可枚举属性，也可以遍历出数组的私有属性
//4) for of只能循环数组，不能循环对象，for of中，val是值，值 of 数组
/*let arr = [1,2,3];
arr.c=3;
console.log(arr);   //[1,2,3,c:3]
for (let i = 0; i < arr.length; i++) {   //编程式
    console.log(arr[i]);    // 1  2  3
}
let a = arr.forEach(function (item,index,ary) {  //声明式，不关心如何实现
    console.log(item);    //1  2  3
    return {b:1};
})
console.log(a);   //undefined
for (let key in arr){
    console.log(key);  //0  1  2  c
    console.log(typeof key); // string  string  string  string
}
for (let val of arr){
    console.log(val);  // 1  2  3
    console.log(typeof val);  //number  number  number
}
console.log(arr);*/

//3. Object.keys(obj); 将对象obj的key(属性名，字符串格式)作为新的数组
/*let obj={school:'zf',age:8};
console.log(Object.keys(obj));  //[ 'school', 'age' ]
for (let val of Object.keys(obj)){
    console.log(val);  //'school'   'age'
    console.log(obj[val]);  //'zf'   8
    console.log(typeof obj[val]);  //string  number
}*/

//4. 数组的方法
//1) filter;  过滤数组； 原有数组是否改变：不变；  返回结果：过滤后的新数组；  回调函数的返回结果：如果返回true，表示这一项放到新数组中； （可以用于删除数组内容）
//2) map; 映射  原有数组是否改变：不变； 返回结果：映射后的新数组；  回调函数中返回什么，这一项就是什么； （可以用于更新数组内容）
//3) forEach; 遍历数组； 原有数组是否改变：不变；  返回结果：undefined;
//4) includes; 查找数组成员是否存在； 返回一个boolean;  原有数组是否改变：不变；
//5) find;  返回找到的那一项； 原有数组是否改变：不变；   回调函数中返回true表示找到了，找到后停止循环，找不到返回undefined
//6) some;  找true，找到true后停止， 返回true; 找不到返回false;  原有数组是否改变：不变
/*let ary=[1,2,3];
let a =ary.some(function (item,index) {
    return item ===4;
})
console.log(a);*/
//7) every; 找false，找到false后停止，返回false; 找不到返回true;  原有数组是否改变：不变
//8）reduce; 收敛；  原有数组是否改变：不变；  返回叠加后的结果；   回调函数返回的结果作为下一次prev的值;   参数：第一个是回调函数，第二个是默认指定第一次的prev;
/*let ary=[[1,2],[3,4],[5,6]];
console.log(ary.join(""));  // "1,23,45,6"
console.log(ary.join(","));  // "1,2,3,4,5,6"
let newary = ary.reduce(function (prev,next) {
    console.log(prev, next);  //[1,2]  [3,4]    [1,2,3,4]  [5,6]
    return prev.concat(next)
})
console.log(newary);*/  // [1,2,3,4,5,6]

//5.箭头函数
/*function a(b) {
    return function (c) {
        return b+c;
    }
}
a(1)(2);
let a = b => c => b+c;*/

//6. Vue.js是一套构建用户界面的渐进式框架
//1)框架：拥有完整的解决方法
//2)渐进式：通过组合，完成一个完整的框架;
//2.1)vue全家桶 vuejs + vue-router + vuex +axios

//7. 渐进式的理解
//1) 声明式渲染（无需关心如何实现）
//2) 组件系统
//3) 客户端路由(vue-router)
//4) 大规模状态管理(vuex)
//5) 构建工具(vue-cli)

//8. vue的特点
//1)核心只关注视图层(view)
//2)易学，轻量，灵活的特点
//3)适用于移动端项目
//4)渐进式框架

//9. Vue的两个核心点
//1) 响应的数据变化: 当数据发生改变--> 视图的自动更新
//2) 组合的视图组件：
//2.1) ui页面映射为组件树
//2.2) 划分组件可维护、可复用、可测试

//10. MVVM:  双向的
//1) M: Model数据模型 (Vue)
//2) V: View视图模板 (DOM)
//3) VM: View-Model 视图模型 (Plain JavaScript Objects6)

//11.vue的使用
//1) 引入vue, 引入vue后会给你一个Vue构造函数
//2) 创建一个Vue的实例 let vm = new Vue({}); 构造函数中，传一个对象
//3) 对象中，属性名为el的属性值代表vue能管理哪个部分
//4) 对象中，属性名为data的属性值是一个对象，里面的数据会被vm所代理
//5) {{Mustache}}, moustache 小胡子语法 表达式  可以放赋值 取值 三元运算符


//12. vue的指令
//1)只是dom上的行间属性,vue给这类属性赋予一定的意义，来实现特殊的功能，所有指令都以v-开头
//2)v-model 指令可以在表单 <input>、<textarea> 及 <select> 元素上创建双向数据绑定(输入框的值改变了会影响数据，数据改变了也会影响输入框的值)。它会根据控件类型自动选取正确的方法来更新元素。它负责监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理。
//3)v-model 会忽略所有表单元素的 value、checked、selected 特性的初始值而总是将 Vue 实例的数据作为数据来源。你应该通过 JavaScript 在组件的 data 选项中声明初始值。
//4)v-text 更新元素的 textContent。
/*<span v-text="msg"></span>
<!-- 和下面的一样 -->
<span>{{msg}}</span>*/
//5)v-once 只绑定一次，当数据再次发生变化，不会导致页面刷新
//6)v-html 更新元素的innerHTML 。把html字符当作html渲染

//13. 插值
//1)文本
//1.1)数据绑定最常见的形式就是使用“Mustache”语法 (双大括号) 的文本插值：
//  <span>Message: {{ msg }}</span>
//1.2)Mustache 标签将会被替代为对应数据对象上 msg 属性的值。无论何时，绑定的数据对象上 msg 属性发生了改变，插值处的内容都会更新。
//1.3)通过使用 v-once 指令，你也能执行一次性地插值，当数据改变时，插值处的内容不会更新
//<span v-once>这个将不会改变: {{ msg }}</span>

//14. 
let obj={a:1,b:2};
Object.defineProperty(obj,'属性名',{
    configurable:false,   //是否可删除，true是可以，false是不可以
    writable:false,       //是否可重新复制，true是可以，false是不可以
    enumerable:false,    //是否可枚举，true是可以，false是不可以
    value:1,
    get(){  //获取obj的属性会触发get方法

    },
    set(){  //设置obj的属性会触发set方法

    }

});


















