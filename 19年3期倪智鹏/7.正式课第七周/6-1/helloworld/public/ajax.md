# ajax

* 安装node
    > https://nodejs.org/en/

```
1.在服务器下千万不要把建立中文的文件夹

2.运行的时候，使用localhost/xx.html运行，千万不要双击或者直接用编辑器打开(*只有把文件放到public目录下才能使用localhost)

3.运行文件的时候，一定要开服务器。

* 找到当前文件夹按住shift + 鼠标右键  输入node app

* 把当前文件夹放到vscode中，然后点击感叹号，找到终端 输入node app






json  -> '{"name":"于海洋"}'  || '[1,2,"3"]'

XML -> 
    <person>
        <name>于海洋</name>
        <hobby>跟着倪老师学习js</hobby>
    </person>

```

### AJAX

> Asynchronous(异步) Javascript(js) And(和) XML(可扩展标记语言)
> 异步的js和xml

> 前后端数据交互的技术

### 目的:从后台拿数据

### 难点
> 拿到数据之后做什么，如何处理

* 后端的代码是同步执行的，一句话一句话执行，上面的代码执行完才执行下面的代码， 也就是说上面的代码没有执行完会阻塞下面代码的执行，那么这样会导致页面中因为某块数据没有加载完成而影响整个页面的显示

* 全局刷新（用户体验较差）

* js引擎、gui引擎、事件引擎、请求引擎

### url

```
    url:
        http://localhost:80/3_ajax.html?page=1#hash=xy;

    协议:
        http://  超文本传输协议
        file://  本地文件传输协议
        https:// 比http更加安全
        ftp: 文件传输协议

    域名:ip的别名
        localhost  
        14.215.177.39  baidu 

    端口:
        放在域名后面的
        服务器默认端口为80

    文件路径:
        3_ajax.html

    查询信息:
        ?page=1 & id=0

        一个参数与另一个参数用&符分割

    hash信息:
        #hash=xy
```

# 输入url回车之后发生了什么事?
<!-- https://www.cnblogs.com/tisikcci/p/5866753.html -->

http://www.ruanyifeng.com/blog/2012/05/internet_protocol_suite_part_i.html

> DNS去解析url找到对应的服务器

> 通过端口访问对应的服务

> http请求

> 三次握手和四次挥手,要保证有效请求

> 响应 -> http状态码

> gui渲染页面


# ajax的交互模型(打电话模式)

> 1.有一部电话
> 2.输入号码
> 3.发送(按绿按钮)
> 4.等待
> 5.通话

#get和post
> 1.get:通过url的方式进行请求

```
   get:(应用场景数据渲染)
    缺点:
        会通过浏览器的缓存机制，缓存你的url的访问记录(相对不安全)
        url的长度是有限制的，每个浏览器都不一样，不能传输体积较大的文件
        中文需要通过encodeURI转码



    优势:
        速度快 -> 3步就能请求到数据
```

```
post：(用户信息，上传视频...)


    参数不会被浏览器缓存，相对安全
    请求方式是走的服务器，理论上来说体积可以无限大（一般后台人员会限制）
    在发送之前需要设置请求头

    速度相对get要慢。

```

