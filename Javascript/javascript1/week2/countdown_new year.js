console.log("Countdown to new year!");

//for loop
for (let num = 10; num >= 0; num--) {
    if (num === 10) {
        console.log('OMG it started');
    } else if (num === 0) {
        console.log('Happy new year!');
    }
    else {
        console.log(num);
    }
}

let num = 10;
//while loop
while (num >= 0) {
    if (num === 10) {
        console.log('OMG it started');
    } else if (num === 0) {
        console.log('Happy new year!');
    }
    else {
        console.log(num);
    }
    num--;   
}

//do while loop
num = 10;
do {
    if (num === 10) {
        console.log('OMG it started');
    } else if (num === 0) {
        console.log('Happy new year!');
    }
    else {
        console.log(num);
    }
    num--;
} while (num >= 0)