let id = window.location.hash.split("=")[1];
let sh = data.sh.text[id];
let l = data.sh.text[id].info[0].l;
console.log(sh);
title.innerHTML = `
				<p>${sh.zw}</p>
				<div class="simple">${sh.dy}
					<span>/</span>${sh.dd}
					<span>/</span>${sh.jy}
					<span>/</span>${sh.xl}
					<span>/</span>${sh.gz}
					<time>${sh.sj}</time>
				</div>
		`;
l.forEach(item => {
  bottom.innerHTML += `<dd>${item}</dd>`;
});
