fetch('http://api.open-notify.org/astros.json')
    .then(response => response.json())
    .then( astronutsData => {
        console.log(astronutsData);

        fetch(`https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json`)
            .then(response => response.json())
            .then(moviesData => console.log(moviesData));
    })


async function getData() {
    const astronutsRes = await fetch('http://api.open-notify.org/astros.json')
    const astronutsJson = await astronutsRes.json();
    console.log(astronutsJson);

    const moviesRes = await fetch('https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json')
    const moviesJson = await moviesRes.json();
    console.log(moviesJson);
}

getData()