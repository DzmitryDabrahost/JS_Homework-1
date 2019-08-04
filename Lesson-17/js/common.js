var button = document.querySelector('.button');
var container = document.querySelector('.container');

button.addEventListener('click', function (e) {
	var target = e.target;
	var m = container.querySelector('.min');
	var s = container.querySelector('.sec');
	var ms = container.querySelector('.ms');

	var timer = setInterval(function () {
		if (button.dataset.value != 'stop') {
			clearInterval(timer);
		}

		if (+ms.innerHTML < 99) {
			if (+ms.innerHTML < 9) {
				ms.innerHTML = '0' + (+ms.innerHTML + 1);
			} else {
				ms.innerHTML = +ms.innerHTML + 1;
			}
		} else if (+s.innerHTML < 59) {
			ms.innerHTML = '00';

			if (+s.innerHTML < 9) {
				s.innerHTML = '0' + (+s.innerHTML + 1);
			} else {
				s.innerHTML = +s.innerHTML + 1;
			}
		} else if (+m.innerHTML < 59) {
			s.innerHTML = '00';

			if (+m.innerHTML < 9) {
				m.innerHTML = '0' + (+m.innerHTML + 1);
			} else {
				m.innerHTML = +m.innerHTML + 1;
			}
		} else {
			ms.innerHTML = '00';
			s.innerHTML = '00';

			if (+m.innerHTML < 9) {
				m.innerHTML = '0' + (+m.innerHTML + 1);
			} else {
				ms.innerHTML = '00';
				s.innerHTML = '00';
				m.innerHTML = +m.innerHTML + 1;
			}

			clearInterval(timer);
			button.style.display = 'none';
			btnSave.style.display = 'none';
		}
	}, 10);

	if (target.dataset.value == 'start' || target.dataset.value == 'resume') {
		target.innerHTML = 'Приостановить';
		target.dataset.value = 'stop';
	} else {
		target.innerHTML = 'Возобновить';
		target.dataset.value = 'resume';
	}

	if (container.children.length < 4) {
		container.insertAdjacentHTML('beforeEnd', '<button class="save">Сохранить отметку</button>');
		container.insertAdjacentHTML('beforeEnd', '<button class="reset">Сбросить</button>');
	}

	var btnSave = document.querySelector('.save');
	var btnReset = document.querySelector('.reset');

	btnReset.addEventListener('click', function () {
		if (btnReset) {
			button.innerHTML = 'Запустить';
			button.dataset.value = 'start';

			btnReset.remove();
			btnSave.remove();

			clearInterval(timer);
			m.innerHTML = '00';
			s.innerHTML = '00';
			ms.innerHTML = '00';

			button.style.display = 'inline-block';

			var result = document.querySelectorAll('div.result');
			for (var i = 0; i < result.length; i++) {
				result[i].remove();
			}
		}
	});

	btnSave.addEventListener('click', function (e) {
		e.stopImmediatePropagation();

		container.insertAdjacentHTML('beforeEnd', '<div class="result"><h3>' + m.innerHTML + ':' + s.innerHTML + ':' + ms.innerHTML + '</h3></div>');
	});
});