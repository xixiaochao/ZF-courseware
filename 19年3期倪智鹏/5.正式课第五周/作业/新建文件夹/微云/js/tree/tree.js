/**
 * 获取元素 树状菜单
 */
const treeMenu = document.getElementsByClassName('tree-menu')[0];
let num = 0;

function renderTree(pid, num) {
    treeMenu.innerHTML = "";
    let arr = getChild(pid);
    let ul = document.createElement('ul');
    num += 5;
    ul.style.paddingLeft = num + 'px';
    //有子级，循环子级
    arr && arr.forEach(e => {
        let ary = getChild(e.id);
        let li = document.createElement('li');
        li.onclick = function (ev) {
            render(e.id);
            renderMenu(e.id);
            ev.cancelBubble = true;//阻止冒泡
        }
        let div = document.createElement('div');
        div.className = `tree-title ${ary?'tree-ico':''}`;
        let span = document.createElement('span');
        span.className = `${ary?'open':''}`;
        span.innerHTML = `<i></i>${e.title}`;
        span.onclick = function () {
            let ul = this.parentNode.nextElementSibling;
            if(ul){
                if(ary && !span.classList.toggle('open')){
                    //移除open 返回false，再true。添加open，返回true，再成为false
                    ul.style.display = 'none';
                }else{
                    ul.style.display = 'block';
                }
            }
        }
        div.appendChild(span);
        li.appendChild(div);
        if (ary) {
            li.appendChild(renderTree(e.id, num))
        }
        ul.appendChild(li);
    })
    return ul;
}

treeMenu.appendChild(renderTree(-1, num));