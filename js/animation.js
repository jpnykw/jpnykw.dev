window.onload = function() {
	document.getElementById('back-btn').addEventListener('click', () => { scroll_page(0) });
	Array.from(document.getElementsByTagName('button')).map((dom, index) => {
		dom.addEventListener('click', () => {
			scroll_page(index);
		});
	});
};

function scroll_page(id) {
	let scroll_to = [0, 1305, 1825, 3970][id],
		now_scroll = window.pageYOffset,
		speed = 13;
	
	let loop = setInterval(() => {
		now_scroll += (scroll_to - now_scroll) / speed;
		window.scrollTo(0, now_scroll);
		
		if (Math.abs(now_scroll - scroll_to) < 0.1) {
			clearInterval(loop);
		}
	}, 10);
}
