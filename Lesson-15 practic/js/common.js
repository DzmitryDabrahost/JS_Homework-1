// практическое задание
var container = document.getElementById('containers');

var paragraph_1 = document.createElement('p');
var paragraph_2 = document.createElement('p');

paragraph_1.innerHTML = 'Hello, this is <a href="#"> link 1 </a> and <a href="#"> link 2 </a>';
paragraph_2.innerHTML = 'Hello, this is <a href="https://vk.com/rudensk"> my vk </a> and <a href="https://www.instagram.com/antonyermakovich/"> my instagram </a>';

container.appendChild(paragraph_1);
container.appendChild(paragraph_2);


var button = document.getElementsByTagName('button')[0];

button.addEventListener('click', function () {
	for (var i = 0; i < paragraph_1.children.length; i++) {
		paragraph_1.children[i].classList.toggle('active');
	}
});

container.onclick = function (e) {
	if (e.target.tagName == 'A' && e.target.parentElement == paragraph_2) {
		e.preventDefault();

		if (localStorage.getItem(e.target.innerText)) {
			return alert(localStorage.getItem(e.target.innerText));
		}

		localStorage.setItem(e.target.innerText, e.target.getAttribute('href'));
		alert('Сслыка сохранена');
	}
};

window.onload = function () {
	localStorage.clear();
}