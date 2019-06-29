function Animal(name) {

	var self = this;
	this._foodAmount = 50;

	this._formatFoodAmount = function () {
		return this._foodAmount + ' гр.';
	}

	this.dailyNorm = function (amount) {
		if (!arguments.length) return this._formatFoodAmount();

		if (amount < 50 || amount > 500) {
			return 'Недопустимое количество корма.';
		}

		this._foodAmount = amount;
	};

	this.name = name;
	this.feed = function () {
		return 'Насыпаем в миску ' + self.dailyNorm() + ' корма.';
	};
}


function Cat() {
	Animal.apply(this, arguments);

	var animalFeed = this.feed;
	this.feed = function () {
		console.log(animalFeed() + '\nКот доволен ^_^');
		return this;
	}

	this.stroke = function () {
		console.log('Гладим кота.');
		return this;
	};
}

var barsik = new Cat('Барсик');

console.log(barsik.feed().stroke().stroke().feed().stroke());