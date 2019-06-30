var initialObj = {
	string: 'Vasya',
	number: 30,
	boolean: true,
	undefined: undefined,
	null: null,
	array: [1, 2, 3],
	object: {
		string2: 'Petrov',
		object2: {
			array2: [{}, {}]
		},
		object3: {}
	},
	method: function () {
		alert('Hello');
	}
};


function cloneDeep(obj) {
	var emptyObj = {};

	for (var key in obj) {
		var currentVariable = obj[key];

		if (Array.isArray(currentVariable)) {
			emptyObj[key] = [];

			for (var i = 0; i < currentVariable.length; i++) {
				if (typeof (currentVariable[i]) == 'object' && !Array.isArray(currentVariable[i]) && !!currentVariable[i]) {
					emptyObj[key].push(cloneDeep(currentVariable[i]));
					continue;
				}
				emptyObj[key].push(currentVariable[i]);
			}

			continue;
		}

		if (typeof (currentVariable) == 'object') {
			emptyObj[key] = cloneDeep(currentVariable);
			continue;
		}

		emptyObj[key] = currentVariable;
	}

	return emptyObj;
}

var clonedObj = cloneDeep(initialObj);

clonedObj.object.object2.array2[1].name = 'Vasya';
clonedObj.array.push(2);

console.log(initialObj);
console.log(clonedObj);