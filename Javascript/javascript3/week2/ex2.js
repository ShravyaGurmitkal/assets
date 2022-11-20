//https://yesno.wtf/api

fetch('https://knajskdskj.jasdk')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(`Answer: ${data.answer}`);
    })
    .catch(err => console.error(err));