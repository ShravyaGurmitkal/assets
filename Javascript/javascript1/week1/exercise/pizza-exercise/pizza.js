console.log("I love pizza");
let favPizza;
let price;

console.log(`New pizza order: ${favPizza}. The price of the pizza is: ${price}`)

let noOfPizzas;
let famSizePizza;
const totalPrice = noOfPizzas*price;

if (famSizePizza === true) {
    console.log(`New pizza order: ${noOfPizzas} family size pizza ${favPizza}. Total cost for the order is: ${2*totalPrice}`);
} else {
    console.log(`New pizza order: ${noOfPizzas} Normal pizza ${favPizza}. Total cost for the order is: ${totalPrice}`);
}
