function waitForSpecifiedTime(time) {
    return new Promise ((resolve, reject) => {
        if(isNaN(time)) {
            reject('Time must be a number');
        }

        setTimeout(() => {
            resolve(`waited for ${time} seconds`);
        }, time * 1000);
    })
}


waitForSpecifiedTime(4).then(response => console.log(response))
    .catch((error) => console.log(error));

waitForSpecifiedTime('s').then(response => console.log(response))
    .catch((error) => console.error(error));