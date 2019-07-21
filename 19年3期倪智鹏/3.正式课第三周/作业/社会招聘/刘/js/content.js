(function(){
	let title = document.getElementById('title');
	let bottom = document.getElementById('bottom');
	let contentDl = bottom.getElementsByTagName('dl')[0];
	let hashId = window.location.hash.split('=')[1];
	let dataTexts = data.sh.text //获取社招的text
	let dataTextx = data.xy.text; //获取校园招聘text
	let dataText = hashId.substr(0,7);
	let sh = 'data.sh';
	if(dataText == sh){
		dataText = dataTexts;
	}else{
		dataText = dataTextx;
	}
	let num = hashId.substr(-1);
	let contzw = dataText[num-1].zw;//职位
	let contdy = dataText[num-1].dy;//待遇
	let contdd = dataText[num-1].dd;//地点
	let contjy = dataText[num-1].jy;//经验
	let contxl = dataText[num-1].xl;//学历
	let contsj = dataText[num-1].sj;
	let contInfo = dataText[num-1].info[0].l;
	title.innerHTML +=`<p>${contzw}</p>
			<div class="simple">${contdy}<span>/</span>${contdd}<span>/</span>${contjy}<span>/</span>${contxl}<span>/</span>2名 <time>${contsj}</time></div>`;
		contInfo.forEach(item =>{
			contentDl.innerHTML +=`<dd>${item}</dd>`;
		});
})();
