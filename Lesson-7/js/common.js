var icon = document.querySelector('.js-icon');
var hb = document.querySelector('.js-header-bottom');

icon.addEventListener('click', function() {
	icon.classList.toggle('active');
	hb.classList.toggle('active');
});