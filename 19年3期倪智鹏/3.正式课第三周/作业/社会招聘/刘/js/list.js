(function() {
	let dataTexts = data.sh.text //获取社招的text
	let dataTextx = data.xy.text; //获取校园招聘text
	let dataNames = data.list[0].lx;//获取社会招聘名称
	let dataNamex = data.list[1].lx;//获取校园招聘名称
	let rightList = document.getElementById('rightList'); //右边显示的信息
	let pageNav = document.getElementById('pageNav'); //总页数
	let pagePrev = document.getElementById('prev'); //上一页
	let pageNext = document.getElementById('next'); //下一页
	let leftList = document.getElementById('leftList');
	let leftLis = leftList.getElementsByTagName('li')[0]; //社会招聘按钮
	let leftLix = leftList.getElementsByTagName('li')[1]; //校园招聘按钮
    let num = 0;

    //页面打开显示社会招聘信息
    fn(dataTexts,dataNames); 

    //校园招聘点击
	leftLix.onclick = function() { 
		num = 0; 
		this.className = 'active';
		leftLis.className = '';
		rightList.innerHTML = ''; 
		fn(dataTextx,dataNamex);
    };

    //社会招聘点击
	leftLis.onclick = function() { 
		num = 0;
		this.className = 'active';
		leftLix.className = '';
		rightList.innerHTML = '';
		fn(dataTexts,dataNames);
    };
	
	function fn(dataText,dataName) {
		dataText.forEach(item => { 
			num++;			
             let eachId = 'data.'+ dataName + num;
             (num < 10) ? (num = '0' + num):num;
			appendLi(num, item.zw, item.rs, item.sj, item.info[0].l, eachId); //传参		
			function appendLi(numLi, zw, rs, sj, l, id) {
				var sli = document.createElement('li'); 
				rightList.appendChild(sli); 
				sli.innerHTML += `<span class="num">${numLi}</span>
					<div class="list">
						<a href="content.html#id=${id}" id=${id}><span class="job">职位需求：${zw}</span><span>需求人数：${rs}</span><time>${sj}</time></a>
						<p><span class="text">岗位要求:${l}</span><a href="javascript:;">查看详情>></a></p>
					</div>`;
			}
		});

		tabPage({ //初始化页面
			pageMain: 'rightList', //右边信息
			pageNav: 'pageNav', //显示页数
			pagePrev: 'prev', //上一页
			pageNext: 'next', //下一页
			curNum: 4, //每页显示的条数 	
			activeClass: 'active', //高光显示的class 		
			ini: 0 //初始化显示的页面 		
		});

		function tabPage(tabPage) { //分页信息
			var pageMain = document.getElementById(tabPage.pageMain); //获取内容列表 
			var pageNav = document.getElementById(tabPage.pageNav); //获取分页 
			var pagePrev = document.getElementById(tabPage.pagePrev); //上一页 
			var pageNext = document.getElementById(tabPage.pageNext); //下一页 
			var curNum = tabPage.curNum; //每页显示数 
			var len = Math.ceil(pageMain.children.length / curNum); //计算总页数 
			var pageList = ''; //生成页码 
			var iNum = 0; //当前的索引值index 
			for(var i = 0; i < len; i++) {
				pageList += '<a href="javascript:;">' + (i + 1) + '</a>';
			}
			pageNav.innerHTML = pageList;
			pageNav.children[0].className = tabPage.activeClass; //头一页加高亮显示 
			for(var i = 0; i < pageNav.children.length; i++) {
				pageNav.children[i].index = i;
				pageNav.children[i].onclick = function() {
					for(var t = 0; t < pageNav.children.length; t++) {
						pageNav.children[t].className = '';
					}
					this.className = tabPage.activeClass;
					iNum = this.index;
					ini(iNum);
				}
			};
			//下一页 
			pageNext.onclick = function() {
				if(iNum == len - 1) {
					alert('已经是最后一页');
					return false;
				} else {
					for(var t = 0; t < pageNav.children.length; t++) {
						pageNav.children[t].className = '';
					}
					iNum++;
					pageNav.children[iNum].className = tabPage.activeClass;
					ini(iNum);
				}
			};
			//上一页 
			pagePrev.onclick = function() {
				if(iNum == 0) {
					alert('当前是第一页');
					return false;
				} else {
					for(var t = 0; t < pageNav.children.length; t++) {
						pageNav.children[t].className = '';
					}
					iNum--;
					pageNav.children[iNum].className = tabPage.activeClass;
					ini(iNum);
				}
			};
			//达到每页设定的信息数后，就显示在下一页
			function ini(iNum) {
				for(var i = 0; i < pageMain.children.length; i++) {
					pageMain.children[i].style.display = 'none';
				}
				for(var i = 0; i < curNum; i++) {
					if(pageMain.children[(iNum * curNum + i)] == undefined) {
						continue;
					}
					pageMain.children[(iNum * curNum + i)].style.display = 'block';
				}
			}
			ini(iNum);
		}
	};
})();