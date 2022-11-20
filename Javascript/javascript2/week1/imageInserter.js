function appendImagetoElement (imageUrl, elementToAppendImageTo) {
    const image = document.createElement('img');
    image.setAttribute('src',imageUrl);
    elementToAppendImageTo.appendChild(image);
}

// Should append a img tag to the body with the picture from 'https://picsum.photos/536/354'
appendImagetoElement('https://picsum.photos/536/354', document.querySelector('body'));