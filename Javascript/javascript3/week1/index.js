const imageNew = document.getElementById('imgmark');
let newLink;

fetch('https://yesno.wtf/api/')
    .then(response => response.json())
    .then(yesOrNoData => {
        console.log(yesOrNoData);
        // HERE IS WHERE YOU WRITE YOUR CODE!!!!!!!!
        newLink = yesOrNoData.image
        imageNew.setAttribute('src', newLink)

    });


fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(yesOrNoData => {
        console.log(yesOrNoData);
        // HERE IS WHERE YOU WRITE YOUR CODE!!!!!!!!
        yesOrNoData.forEach(element => {
            const h3Html = document.createElement('h3');
            h3Html.innerHTML = element.id + ' -> ' + element.title;
            document.body.appendChild(h3Html)
        });
    });