// Задание 1:
function filterArr(arr) {
	return arr.filter(function (number) {
		return number > 0;
	});

}

console.log(filterArr([-1, 0, 2, 34, -2]));


// Задание 2:
var arr = [-1, 0, 2, 34, -2];

function oneNum(arr) {
	return arr.find(function (obj) {
		return obj > 0;
	});
}

console.log(oneNum(arr));



// Задание 3:
function isPalindrome(str) {
	return str.toLowerCase() == str.split('').reverse().join('').toLowerCase();
}

console.log(isPalindrome('шалаШ'));
console.log(isPalindrome('привет'));


// Задание 4:
function areAnagrams(arr1, arr2) {
	return arr1.split('').sort().join('').toLowerCase() == arr2.split('').sort().join('').toLowerCase();
}

console.log(areAnagrams('кот', 'отк'));
console.log(areAnagrams('кот', 'атк'));
console.log(areAnagrams('кот', 'отко'));


// Задание 5:
function divideArr(arr, arrLen) {
	var newArr = [];

	while (arr.length > 0) {
		newArr.push(arr.splice(0, arrLen));
	}

	return newArr;
}

console.log(divideArr([1, 2, 3, 4], 2));
console.log(divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3));