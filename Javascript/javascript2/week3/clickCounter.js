const firstButton = document.querySelector('#firstButtonMarkup');
const secondButton = document.querySelector('#secondButtonMarkup');
let clickCount = 0;


firstButton.addEventListener('click', function() {
    console.log(clickCount++);
});

secondButton.addEventListener('click', function() {
    console.log(clickCount++);
});

//firstButton.addEventListener('click', increaseCount)