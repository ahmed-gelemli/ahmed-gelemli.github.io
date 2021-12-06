function navToggle() {
	var x = document.getElementById("mobile_links");
	if (x.style.height === '') {
		x.style.height = "50vw";
	} else {
		x.style.height = '';
	}
}

function scrollBottom() {
	window.scrollTo(0,document.body.scrollHeight);
}