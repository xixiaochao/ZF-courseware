const create = document.getElementById('create');
create.onclick = function(){
    fEmpty.style.display = 'none';
    let id = breadNav.getElementsByTagName('span')[0].dataset.id*1;
    console.log(id);
    let div = document.createElement('div');
    let v = '';//默认的新建文件夹编号
    div.className = 'file-item';

    let img = new Image();
    img.src = 'img/folder-b.png';

    //重命名要用
    let input = document.createElement('input');
    input.type = 'text';
    input.className = 'editor';
    log(data[id]);
    if(!data[id].num.length){
        data[id].num.push(0);
    }else{
        /*
        [0,1,3]
        */
       for(let i=0;i<data[id].num.length+1;i++){
           if(data[id].num[i] === undefined){
               data[id].num[i] = i;
               v = i;
               break;
           }
       }
    }
    
    if(v === 0)v = '';
    input.value = '新建文件夹' + v;

    input.style.display = 'block';

    input.onblur = function(){
        let id = breadNav.getElementsByTagName('span')[0].dataset.id*1;
        let arr = getChild(id);
        let o = arr && arr.some(e=>e.title == this.value);
        if(o){
            console.log('又充了');
            this.value = '新建文件夹' + v;
            input.select();
            return;
            
        }
        let idn = +new Date;
        if(v === '')v = 0;
        data[idn] = {
            "id": idn,
            "pid": id,
            "title": input.value,
            "type": "file",
            "checked":false,
            "create":v,
            "num":[]
        }
        render(id);
    }
    let span = document.createElement('span');
    //是否选中
    let i = document.createElement('i');
    i.className = '';
    div.appendChild(img);
    div.appendChild(span);
    div.appendChild(input);
    div.appendChild(i);

    folders.appendChild(div);
    input.select();
}