const modeButton = document.getElementById('modebutton');

modeButton.addEventListener("click", modeChangefunction);

function modeChangefunction() {
    const bodyElement = document.querySelector('body');
    if (bodyElement.style.backgroundColor === 'black' && bodyElement.style.color === 'white') {
        bodyElement.style.backgroundColor = "white";
        bodyElement.style.color = "black";
        modeButton.innerText = 'Change mode to Dark';
    } else  {
        bodyElement.style.backgroundColor = "black";
        bodyElement.style.color = "white";
        modeButton.innerText = 'Change mode to light';
    }
}