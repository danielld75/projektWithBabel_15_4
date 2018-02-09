"use strict";

//zadanie 1.
var hello = "Hello";
var world = "World";
var sentence = hello + " " + world + "!";
console.log(sentence);
//zadanie 2.
var multiply = function multiply() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return a * b;
};
console.log(multiply(5));
//zadanie 3.
// const average = (...numbs) => {
//   let sum = 0;
//   numbs.forEach(numb => sum += numb);
//   return(sum / numbs.length);
// };
var average = function average() {
  for (var _len = arguments.length, numbers = Array(_len), _key = 0; _key < _len; _key++) {
    numbers[_key] = arguments[_key];
  }

  return numbers.reduce(function (sum, number) {
    return (sum + number) / numbers.length;
  });
};
console.log(average(1, 3, 6, 6));
console.log(average(1, 3));
console.log(average(1));
//zadanie 4
var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
average.apply(undefined, grades);
//zadanie 5
var datas = [1, 4, 'Iwona', false, 'Nowak'];
var firstName = datas[2],
    lastName = datas[4];

console.log(firstName);
console.log(lastName);
