//自执行函数
~function () {
    class ajaxClass {
        //=>AJAX四步操作：send ajax
        init() {
            //这里的this就是实例example
            let xhr = new XMLHttpRequest();
            xhr.onreadystatechange = () => {
                if (xhr.readyState === 4 && /^(2|3)\d{2}$/.test(xhr.status)) {
                    let result = xhr.responseText;
                    //dataType的处理
                    try {
                        switch (this.dataType.toUpperCase()) {
                            case 'TEXT':
                            case 'HTML':
                                break;
                            case 'JSON':
                                result = JSON.parse(result);
                                break;
                            case 'XML':
                                result = xhr.responseXML;
                        }
                    } catch (e) {
                        console.log(e.message);
                    }
                    this.success(result);
                }
            };
            //=>data的处理
            if (this.data !== null) {
                this.formatData();
                if (this.isGET) {
                    //如果是get请求
                    this.url += this.querySymbol() + this.data;
                    this.data = null;
                }
            }
            //=>cache的处理
            this.isGET ? this.cacheFn() : null;
            xhr.open(this.method, this.url, this.async);
            xhr.send(this.data);
        }

        //把传递的对象格式data转换为字符串格式类型
        formatData() {
            //this指向当前实例example
            //检测this.data是否是一个对象
            if ({}.toString.call(this.data) === '[object Object]') {
                let obj = this.data,
                    str = ``;
                for (let key in obj) {
                    str += `${key}=${obj[key]}&`;
                }
                str = str.replace(/&$/, '');//把末尾的&进行替换
                this.data = str;
            }
        }

        cacheFn() {
            //this指向当前实例example
            !this.cache ? this.url += `${this.querySymbol}_=${Math.random()}` : null;
        }

        //符号查询
        querySymbol() {
            //this孩纸指向当前实例example
            return this.url.indexOf('?') > -1 ? '&' : '?';
        }
    }

    //=>参数初始化 init parameters
    window.ajax = function ({
                                url = null,
                                method = 'GET',
                                type = null,
                                data = null,
                                dataType = 'JSON',
                                cache = true,
                                async = true,
                                success = null
                            } = {}) {
        let example = new ajaxClass();//example就是ajaxClass的实例
        /*['url','method','data','dataType','cache','async','success'].forEach((item)=>{
            if(item==='method'){
            _this.method = type===null?method:type;
            return;
        }if(item === 'success'){
            _this.success = typeof success === 'function'?success:new Function();
            return;
        }
            _this[item] = eval(item);
        })*/
        example.url = url;
        example.method = type === null ? method : type;
        example.data = data;
        example.dataType = dataType;
        example.async = async;
        example.success = typeof success === 'function' ? success : new Function();
        example.isGET = /^(GET|DELETE|HEAD)$/i.test(example.method);
        example.init();//执行init方法
        return example;
    };
}();


ajax({
    url: 'product.json',
    method: 'post',
    cache: false,
    data: {
        name: 'zhangsan',
        age: 18
    },
    dataType: 'text',
    success: result => {
        console.log(result);
    }
});