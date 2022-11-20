const dogImage = document.createElement('img');
setInterval(() => {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(dogFanData => {
        dogImage.setAttribute('src', dogFanData.message);
        document.body.appendChild(dogImage);
        //console.log(dogFanData);
    })
}, 2000);

fetch('https://dog.ceo/api/breeds/list/all')
    .then(response => response.json())
    .then(dogBreedsData => {
       const dogBreedsList = Object.keys(dogBreedsData.message);
       const randomIndex = Math.floor((Math.random() * dogBreedsList.length) + 1);
        fetch(`https://dog.ceo/api/breed/${dogBreedsList[randomIndex]}/images/random`)
            .then(response => response.json())
            .then(dogRandomImage => {
                const dogBreedImage = document.createElement('img');
                dogBreedImage.setAttribute('src', dogRandomImage.message);
                document.body.appendChild(dogBreedImage);
                const breedName = document.createElement('p');
                breedName.innerHTML = dogBreedsList[randomIndex];
                document.body.appendChild(breedName);
            })

        console.log(dogBreedsData);
        console.log(dogBreedsList)
        console.log(randomIndex)
    })

