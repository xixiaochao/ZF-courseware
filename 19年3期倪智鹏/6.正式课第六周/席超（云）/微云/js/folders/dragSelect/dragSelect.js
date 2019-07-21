/**
 * 获取元素  选框碰撞
 */
const kuang = folderBox.getElementsByClassName('kuang')[0];
/**
 * 点击全选
 */
checkall.onclick = function(){
    let id = breadNav.getElementsByTagName('span')[0].id*1;//获取span的id
    let ary = getChild(id);//通过获取的id去找这个id下的子级数据
    this.classList.toggle('checked');//点的时候切换checked
    //循环子级数据，把子级数据的checked变成和checkall的class一直的布尔值
    ary && ary.forEach(ele=>{
        ele.checked = this.classList.contains('checked');
    });
    render(id);//重新渲染数据
}

/**
 * 鼠标选框碰撞
 */
fBox.onmousedown =(e)=>{
    let ll = document.getElementsByClassName('tree-menu')[0].clientWidth;
    let tt = document.getElementsByClassName('breadmenu')[0].clientHeight + head.clientHeight ;
    let box = document.createElement('div');
    box.className = 'kuang';
    fBox.append(box)   //  选框添加到页面
    let l = e.pageX 
    let t = e.pageY  

    //文件夹碰撞
    let divs = fBox.getElementsByClassName('folders')[0].querySelectorAll('div');  //全部的文件夹
    fBox.onmousemove = (e)=>{
        let left = e.pageX;
        let top = e.pageY;

        box.style.left = Math.min(l-ll,e.pageX-ll) + 'px';  //
        box.style.top = Math.min(t-tt,e.pageY-tt) + 'px';
        box.style.width = Math.abs(e.pageX -l) + 'px';
        box.style.height = Math.abs(e.pageY -t) + 'px';
        box.style.display = 'block'
        
        //文件碰撞 勾选
        for(let i=0; i<divs.length ; i++){
            let lll =  box.offsetLeft;
            let ttt =  box.offsetTop;
            let left1 = lll +  box.offsetWidth;
            let top1 = ttt +  box.offsetLeft;

            let l2 = divs[i].offsetLeft ;//box1的左边
            let t2 = divs[i].offsetTop ;//box1的上边
            let r2 = l2 + divs[i].offsetWidth;//box1的右边
            let b2 = t2 + divs[i].offsetHeight;//box1的下边
            if( left1 < l2 || top1 < t2 || lll > r2 || ttt > b2){
                divs[i].lastChild.className = 'none'
                for(let j in data){
                    if(data[j].title == divs[i].children[1].innerText ){//通过当前项的文字 判断修改checked
                        data[j].checked = false;       
                    }
                }
                
            }else {
                divs[i].lastChild.className = 'checked';
                for(let j in data){
                    if(data[j].title == divs[i].children[1].innerText ){//通过当前项的文字 判断修改checked
                        data[j].checked = true;       
                    }
                }
            }
        }
        return false   //阻止默认事件
    }
    document.onmouseup = (e)=>{
        fBox.onmousemove = document.onmouseup = null;
        box.remove();   //清除选框
    } 

}