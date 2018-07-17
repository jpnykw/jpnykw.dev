window.onload = function() {
	// Set the number of years
	let year_text = document.getElementById('year').innerText, date = new Date();
	document.getElementById('year').innerText = year_text.replace('YY', `${my_year(date.getFullYear(), date.getMonth(), date.getDate())}`);

	document.getElementById('back-btn').addEventListener('click', () => { scroll_page(0) });
	Array.from(document.getElementsByTagName('button')).map((dom, index) => {
		dom.addEventListener('click', () => {
			scroll_page(index);
		});
	});
};

function my_year(year, month, date) {
	return year - 2002 - (month < 3 || (month > 2 && date < 5));
}

function scroll_page(id) {
	let scroll_to = [0, 1640, 2165, 3620][id],
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
