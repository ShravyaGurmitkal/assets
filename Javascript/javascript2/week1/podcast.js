const podcasts = [{
    name: 'The mystery om of Johan Klausen Varbourg',
    imageUrl: 'https://picsum.photos/536/354'
},
{
    name: 'Tips about dogs with small legs',
    imageUrl: 'https://picsum.photos/536/354'
},
{
    name: 'You, me, we and us',
    imageUrl: 'https://picsum.photos/536/354'
},
{
    name: 'Breakfast news - Dinner edition'
}
];

const podcastsUl = document.createElement('ul');
document.body.appendChild(podcastsUl);

for (const podcast of podcasts) {
    const podcastli = document.createElement('li');
    const podcasth1Name = document.createElement('h1');
    const podcastImg = document.createElement('img');
    podcasth1Name.innerHTML = podcast.name;
    podcastli.appendChild(podcasth1Name);
    if (podcast.imageUrl !== undefined) {
        podcastImg.setAttribute('src', podcast.imageUrl);
    }
    podcastli.appendChild(podcastImg);
    podcastsUl.appendChild(podcastli);
}

