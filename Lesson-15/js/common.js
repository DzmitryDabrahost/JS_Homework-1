var table = document.getElementById('table');
var add = table.getElementsByClassName('add')[0];

add.onclick = function () {
	table.insertAdjacentHTML('afterBegin', '<tr><td></td><td></td><td></td></tr>');
}

table.addEventListener('click', function (e) {
	var input = document.createElement('input');
	var inputText;

	if (e.target == add || e.target.tagName != 'TD') {
		return;
	}

	inputText = e.target.innerHTML;
	e.target.innerHTML = '';
	e.target.appendChild(input);
	input.value = inputText;
	input.focus();

	var td = e.target;

	input.onblur = function () {
		var text = input.value;
		td.innerHTML = text;
	}

	input.onkeypress = function (event) {
		if (event.keyCode == 13) {
			input.blur();
		}
	}
});