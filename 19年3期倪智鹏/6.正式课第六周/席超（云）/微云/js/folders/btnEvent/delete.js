/** 
 * 获取元素  删除
*/
const del = document.getElementById('del');
const tanbox = document.getElementById('tanbox');
const confbtn = tanbox.getElementsByClassName('conf-btn')[0];
const yes = confbtn.children[0];
const no = confbtn.children[1];

del.onclick = function(){
    if(seleEleArr.length == 0){
        alert('请选择一个或多个文件夹')
    }else{
        tanbox.style.display = 'block';

        //点击确定
        yes.onclick = function(){
            //删除原数据中的相应的项。
            seleEleArr.forEach(e=>{
                delete data[e.id];//他本身需要删掉
            })

            seleEleArr.length = 0;//暂存数据的数组归0
            
            tanbox.style.display = 'none';
            render(breadNav.getElementsByTagName('span')[0].dataset.id*1);//页面重新渲染
            tree.appendChild(renderTree(-1, num));//树重新渲染
        }

        //点击取消
        no.onclick = function(){
            tanbox.style.display = 'none';
        }
    }
}