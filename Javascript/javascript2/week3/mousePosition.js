//const bodyPosition = document.querySelector('body')
let positionXArray = [];
let positionYArray = [];

const collectCoords = (event) => {
    positionXArray.push(event.clientX)
    positionYArray.push(event.clientY)
}

document.addEventListener('mousemove', collectCoords)
   

setTimeout(() => {
    document.removeEventListener('mousemove', collectCoords)
    const averageXPosition = positionXArray.reduce(
        (sum,positionX) => sum += positionX, 0
    ) / positionXArray.length;

    const averageYPosition = positionYArray.reduce(
        (sum,positionY) => sum += positionY, 0
    ) / positionYArray.length;

    console.log(averageXPosition, averageYPosition);
}, 3000);