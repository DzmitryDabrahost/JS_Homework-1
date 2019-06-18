//   Практическое задание 2:

function Cat(name) {
	var foodAmount = 50;

    this.name = name;

	formatFoodAmount = function() {
		return foodAmount + ' гр.';
	};

    this.feed = function() {
		console.log('Насыпаем в миску ' + formatFoodAmount() + ' корма.');
    };
}

var barsik = new Cat('Барсик');

console.log(barsik.name);

// barsik = null;

console.log(barsik.feed());




//   Практическое задание 3:

function Cat(name) {
	var foodAmount = 50;

    this.name = name;

	this.dailyNorm = function (x) {
		if (x < 50 || x > 500) {
			console.log('Ошибка...');
			return;
		} else if (x == undefined) {
			return formatFoodAmount();
		}

		foodAmount = x;

		return formatFoodAmount();
	};

	formatFoodAmount = function() {
		return foodAmount + ' гр.';
	};

    this.feed = function() {
		console.log('Насыпаем в миску ' + formatFoodAmount() + ' корма.');
    };
}

var barsik = new Cat('Барсик');

console.log(barsik.name);

// barsik = null;

console.log(barsik.feed());