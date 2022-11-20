fetch('http://api.open-notify.org/astros.json')
    .then(response => response.json())
    .then(astronutsData => {
        //console.log(response)
        console.log(astronutsData, astronutsData.number);
        const numberOfAstronuts = document.createElement('h2');
        numberOfAstronuts.innerHTML = `There are ${astronutsData.number} astronauts in space, they are:`
        document.body.appendChild(numberOfAstronuts)
        const astronutNameUl = document.createElement('ul');
        for(persons of astronutsData.people){
            const astronutNameli = document.createElement('li');
            astronutNameli.innerHTML = `Astronut_Name : ${persons.name} , Craft : ${persons.craft}` ;
            astronutNameUl.appendChild(astronutNameli);
            console.log(persons.name);
        }
        document.body.appendChild(astronutNameUl);
    });