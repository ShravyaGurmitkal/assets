//Area of Circle
const pi = 3.14

function getCircleArea(radius) {
    return pi * radius * radius;
}

areaCircle = getCircleArea(5);
console.log(`Area of Circle = ${areaCircle}`)

//celcius To Fahreneit
function celciusToFahreneit(celcius) {
    celcius = (celcius / 5) * 9 + 32;
    return celcius;
}

fahrenheit = celciusToFahreneit(75);
console.log(`Temperature in fahrenheit is ${fahrenheit}F`)
