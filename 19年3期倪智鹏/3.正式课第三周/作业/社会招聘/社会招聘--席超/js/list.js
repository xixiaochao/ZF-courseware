/*
    获取元素和数据
*/
let sh = data.sh.text;//社招数据
let xy = data.xy.text ;//校招数据
let hash = window.location.hash;//打开页面的时候获取hash值
let rightList = document.getElementById('rightList');//右边渲染的地方
let btns = document.getElementsByClassName('btn');
let tab = document.getElementById('leftList').getElementsByTagName('li');

//分页方法
const paging = (ary = [], page = 0, row = 4) => {
	let tempData = [...ary];//克隆数组       
	let total = Math.ceil(ary.length / row)//页数
	let pagNumber = page * row             
	let returnData = tempData.slice(pagNumber, pagNumber + row)//每页的数据
	return {
		returnData,
		total
	}   
}

sub(sh);
job(sh,0)  //渲染社招页面

//一个函数存放每页循环
function job(ary = [], page = 0, row = 4){
	let data = paging(ary, page, row).returnData; 
	let html = '';   //存放map渲染后的html
	//返回出来的每页的数据map循环
	data.map(function(item,index){
        console.log(item.rs);
        console.log(item);
		html +=`<li>
					<span class="num">${row*page+index + 1}</span>
					<div class="list">
                        <a href="content.html#id=${index}" id=${index}>
                            <span class="job">职位需求：${item.zw}</span>
                            <span>需求人数：${item.rs}名 ${item.xl}</span>
                            <time>${item.sj}</time>
                        </a>
                        <p>
                            <span class="text">岗位要求：${item.info[0].l}</span>
                            <a id='check' >查看详情>></a>
                        </p>
					</div>
				</li>`
	})
	rightList.innerHTML = html;
}

//下标方法
function sub (data){
	let html = '';
	//循环创建下面的下标
	for(let i=0; i< paging(data,0,4).total ; i++){
		html += `
			<a data-total='1' class='btn' href="javascript:;">${i +1}</a>
		`
	}
	//下标渲染到页面上
    nav.innerHTML = `<a data-total='on' href="javascript:;">&lt;</a>${html}<a data-total='up' href="javascript:;">&gt;</a>`;
}

//下标点击事件
for(let i=0; i<btns.length; i++){
    btns[i].onclick = ()=>{
        job(data1,i,4)
    }
}		
	
// 切换点击事件
for(let k=0; k<tab.length ;k++){
    tab[k].onclick =()=>{
	    for(let i=0; i<tab.length ;i++){
			tab[i].className = '';//清除默认样式
		}
		tab[k].className = 'active';//添加样式
		if(k == 0){
			job(sh,0,4)//社招数据，并且传页数和条数
			sub(sh);
			for(let i=0; i<btns.length; i++){
				btns[i].onclick = ()=>{	
				job(sh,i,4)
                }
            }
		}else{
			job(xy,0,4)//校园数据，并且传页数和条数
			sub(xy)
			for(let i=0; i<btns.length; i++){
				btns[i].onclick = ()=>{
					job(xy,i,4)//校园数据，根据当前索引传递每页条数
                }
            }
		}				
	}
}

