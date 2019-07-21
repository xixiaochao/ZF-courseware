const tanbox = document.getElementById('tanbox');
const aa = tanbox.getElementsByTagName('a');
const del = document.getElementById('del');
const hsz = [];//这个可以做回收站

del.onclick = function(){
    if(seleEleArr.length){
        //alert('选了'+seleEleArr.length)

        tanbox.style.display = 'block';
        aa[0].onclick = function(){
            seleEleArr.forEach(e => {
                if('create' in data[e.id]){
                  //  console.log('父级的num'+ data[data[e.id].pid].num);
                 //   log(data[e.id].create);

                    delete data[data[e.id].pid].num[data[e.id].create];
                  //  log(data[data[e.id].pid].num);
                    
                }
                delete data[e.id];
                
            });
            hsz.push(...seleEleArr);
            render(breadNav.getElementsByTagName('span')[0].dataset.id*1);
            tanbox.style.display = 'none';
        }
        aa[1].onclick = function(){
            tanbox.style.display = 'none';
        }
    }else{
        alert('没有选')
    }
}