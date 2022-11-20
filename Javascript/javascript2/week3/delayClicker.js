const delayButton = document.querySelector('#delayButtonMarkup');
console.log()
delayButton.addEventListener('click', function(){
    setTimeout(delayTime, 3000);
});

function delayTime() {
    console.log('This text was delayed by 3 seconds');
}

// delayButton.addEventListener('click', function() {
//     setTimeout(function() {
//         console.log('This text was delayed by 3 seconds');
//     }, 3000);
// })