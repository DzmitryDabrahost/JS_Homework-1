var form = document.getElementById('form');
var input_x = document.getElementsByTagName('input')[0];
var input_y = document.getElementsByTagName('input')[1];
var button = document.getElementsByTagName('button')[0];

form.onkeyup = function () {
	input_x.value && input_y.value ? button.disabled = false : button.disabled = true;
};

button.addEventListener('click', function (e) {
	e.preventDefault();

	if (isNaN(input_x.value) || isNaN(input_y.value) || input_x.value < 1 || input_x.value > 10 || input_y.value < 1 || input_y.value > 10) {
		return alert('Эй, тут ошибочка');
	}

	var container = document.querySelector('.container');
	var table = document.createElement('table');

	for (var i = 1; i <= input_x.value; i++) {
		var tr = document.createElement('tr');

		for (var j = 1; j <= input_y.value; j++) {
			var td = document.createElement('td');

			if (i % 2 == j % 2) {
				td.classList.add('black');
			}

			tr.appendChild(td);
		}

		table.appendChild(tr);
	}

	container.innerHTML = '';
	container.appendChild(table);

	table.onclick = function () {
		var tdReverse = table.getElementsByTagName('TD');

		for (var i = 0; i < tdReverse.length; i++) {
			tdReverse[i].classList.toggle('black');
		}
	}
});