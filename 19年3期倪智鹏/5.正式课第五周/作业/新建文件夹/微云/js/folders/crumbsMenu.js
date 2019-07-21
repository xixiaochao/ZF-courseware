/**
 * 面包屑
 */
function renderMenu(id){
    breadNav.innerHTML = '';
    let arr = getParents(id);//找到一堆祖先级数据
    let arr2 = getChild(id);//找一级儿子
    if(arr){
        arr.forEach((ele,index,all)=>{
            //如果索引不等于全部的长度减一
            if(index!=all.length-1){
                let a = document.createElement('a');
                a.href = 'javascript:;';
                a.innerHTML = ele.title;
                a.onclick = function(){
                    arr2 && arr2.forEach(ele=>ele.checked=false);
                    render(ele,id);
                    renderMenu(ele,id);
                }
                breadNav.appendChild(a);
            }else{
                let span = document.createElement('span');
                span.innerHTML = ele.title;
                span.dataset.id = ele.id;
                breadNav.appendChild(span);
            }
        });
    }
}
renderMenu(0);