console.log(`start`)

const x = fetch('https://yesno.wtf/api')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(`Answer: ${data.answer}`);
    });


console.log(typeof x)
console.log(x)

//log helloo after 5 seconds
setTimeout(() => {
    console.log(`Hellooo`)
}, 5000);

console.log('bye');

//promises
function waitForThreeSeconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve();
        }, 3000);
    })
}

waitForThreeSeconds().then(() => {
    console.log(`3 seconds finished`);
})

//creating promise
const wait = (time) => {
    return new Promise((resolve, reject) => {
        if(typeof time !== 'number') {
            reject(`time must be a number`);
        }

        setTimeout(() => {
            resolve(time);
        }, time);
    }).catch(err => console.log(err))
}
//using the promise
wait(1000).then(() => console.log(`finished`));

wait('w')
