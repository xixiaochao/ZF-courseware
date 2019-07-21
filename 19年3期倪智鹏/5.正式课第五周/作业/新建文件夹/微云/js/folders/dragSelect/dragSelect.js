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