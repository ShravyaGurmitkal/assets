let numbers = [12, 10, 20, 3, 11];
numbers.push(26);
numbers.unshift(15);
console.log(numbers.length);
console.log(numbers);
numbers.shift();
numbers.pop();
console.log(numbers.length);
console.log(numbers);

console.log("for loop");
for (let index = 0; index < numbers.length; index++) {
    console.log(numbers[index]);
}

console.log("for of loop");
for (const number of numbers) {
    console.log(number);
}

console.log(".tostring()");
for (const number of numbers) {
    console.log(number.toString());
}

console.log(".join()");
console.log(numbers.join(';'));

console.log(numbers.includes(17));

//arrays exer-2
const fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
const shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
alert( fruits.length ); // ?