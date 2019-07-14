//   Задание 1:
var arr = ['Anton', 'Maksim', 'Vadim'];

function getArr(array) {
	return array.map(function (newArr) {
		var obj = { name: newArr }
		return obj;
	});
}

console.log(getArr(arr));


//   Задание 2:
var arr = ['00', '13', '24'];

function getArr(array) {
	return array.reduce(function (sum, current) {
		return sum + ' : ' + current;
	}, 'Текущее время');
}

console.log(getArr(arr));


//   Задание 3:
var str = 'Ит-академия';

function getStr(string) {
	var sum = 0;
	var vowels = ['а', 'о', 'и', 'е', 'ё', 'э', 'ы', 'у', 'ю', 'я'];

	string = string.toLowerCase().split('');

	string.forEach(function (item) {
		if (vowels.indexOf(item) != -1) {
			sum++;
		}
	});

	return sum;
}

console.log(getStr(str));


//   Задание 4:
var str = 'Разработка веб-приложений на JavaScript. В завершении курса создадите собственный выпускной проект — браузерную игру! Работать с мультимедийными возможностями браузеров — SVG и Canvas, создавать производительную графику и мультимедиа?';

function getText(text) {
	var result = '';

	text = text.split(/[.!?]/);

	for (var j = 0; j < text.length; j++) {
		text[j] = text[j].trim();
	}

	for (var i = 0; i < text.length; i++) {
		if (text[i].length == 0) {
			continue;
		}

		result += text[i] + ' ' + text[i].split(/[,:;-]/).join('').split(' ').join('').length + '\n';
	}

	return result;

}

console.log(getText(str));


// Задание 5 *:
var str = 'Разработка веб-приложений на JavaScript. Мы изучаем JavaScript! Давайте приступим к разработке на JavaScript.';

function searshText(text) {
	var result = {};

	text = text.toLowerCase().split(/[.,?!]/).join('').split(' ');

	text.forEach(function (item) {
		if (result[item] == undefined) {
			result[item] = 1;
		} else {
			result[item]++;
		}
	});

	var newText = text[0];

	for (var key in result) {
		if (result[key] > result[newText]) {
			newText = key;
		}
	}

	return 'Максимальное число повторений у слова \'' + newText + '\' - ' + result[newText];
}

console.log(searshText(str));