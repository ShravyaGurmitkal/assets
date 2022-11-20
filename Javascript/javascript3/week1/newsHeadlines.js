fetch('https://content.guardianapis.com/search?api-key=1dc9de95-207e-465a-a34a-e49eea13ec7e')
    .then(response => response.json()) 
    .then(guardianData => {
        console.log(guardianData)
        console.log(guardianData.response)
        console.log(guardianData.response.results)
        guardianData.response.results.forEach(element => {
            const newsH2 =  document.createElement('h3');
            newsH2.innerHTML = element.webTitle;
           document.body.appendChild(newsH2);
        });
    })