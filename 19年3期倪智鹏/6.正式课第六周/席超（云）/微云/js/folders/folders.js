/** 渲染数据里的文件夹 */

/** 
 *  获取元素
*/
const folderBox = document.getElementsByClassName('folder-content')[0];//文件大盒子
const folders = folderBox.getElementsByClassName('folders')[0];//文件夹存储位置
const checkall = folderBox.getElementsByClassName('checkall')[0].children[0];//全选标签i
const fEmpty = folderBox.getElementsByClassName('f-empty')[0];//空的文件
const breadNav = folderBox.getElementsByClassName('bread-nav')[0];//面包屑 全选

const {children,
    getChild,
    getChildren,
    getParent,
    getParents,
    addAttr,
    targetP,
    crash} = Tools;//工具类
let seleEleArr = [];//全选元素数组
addAttr('num',[]); //给数据添加属性num，默认为[]

/**
 *  渲染，传值
 *  创建一个装DOM节点的容器，html.appendChild(要插入到DOM节点)
 */
function render(id){
    folders.innerHTML = ''//只要渲染就把数据清空
    seleEleArr.length = 0;//没有子级就把暂无文件元素打开
    let ary = getChild(id)//如果有子级，就渲染
    if(ary){
        checkall.className = ary.every(ele=>ele.checked) ? 'checked':'';//全选
        fEmpty.style.display = 'none';
        ary.forEach((ele,i)=>{
            if(ele.checked){
                //捕获被选中的数据
                seleEleArr.push(ele);
            }

            //文件夹盒子
            let div = document.createElement('div');
            div.className = ele.checked ? 'file-item active' : 'file-item';
            div.dataset.id = ele.id;

            //创建图片
            let img = new Image();
            img.src = './img/folder-b.png';
            img.ondblclick = function(){//双击图片
                render(ele.id);//渲染文件夹
                renderMenu(ele.id);//渲染面包屑
                ary.forEach(ele=>ele.checked=false);//清除元素选中状态（默认未选中）
            }
            
            //文件夹的名字
            let span = document.createElement('span');
            span.className = 'folder-name';
            span.innerHTML = ele.title;

            //重命名：创建文本输入框
            let input = document.createElement('input');
            input.type = 'text';
            input.className = 'editor';
            input.value = ele.title;

            //是否选中状态
            let is = document.createElement('i');
            is.className = ele.checked ? 'checked' : '';//判断元素是否为选中状态，赋值给i
            is.onclick = function(){
                //默认是未选中的状态，取反赋值
                ele.checked = !ele.checked;
                render(id);//渲染
            }

            //往div里面追加元素节点
            div.appendChild(img);
            div.appendChild(span);
            div.appendChild(input);
            div.appendChild(is);
            //把创建的元素添加到folders中
            folders.appendChild(div);
        })
    }else{
        fEmpty.style.display = 'block';
        checkall.className = '';
    }
}
render(0);

