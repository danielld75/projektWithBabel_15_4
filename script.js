//zadanie 1.
const hello = "Hello";
const world = "World";
const sentence = `${hello} ${world}!`;
console.log(sentence);
//zadanie 2.
const multiply = (a = 1, b = 1) => a * b;
console.log(multiply(5));
//zadanie 3.
const average = (...numbs) => {
  let sum = 0;
  numbs.forEach(numb => sum += numb);
  return(sum / numbs.length);
};
average(1, 3, 6, 6);
average(1, 3);
average(1);
//zadanie 4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
average(...grades);
//zadanie 5
const datas = [1, 4, 'Iwona', false, 'Nowak'];
const [ , ,firstName, ,lastName] = datas;
console.log(firstName);
console.log(lastName);