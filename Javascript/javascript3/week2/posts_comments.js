async function getPostsAndComments() {
    const postsResult = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    const posts = await postsResult.json();

    const commentsResult = await fetch(`https://jsonplaceholder.typicode.com/comments`);
    const comments = await commentsResult.json();

    for(const post of posts) {
        const commentsArray = comments.filter(comment => post.id === comment.postId ).map(comment => comment.body);
        console.log(post.id, commentsArray)
        appendDetailsToHtml(post, commentsArray);
    }
}

function appendDetailsToHtml(post, commentsArray) {
    const h1 = document.createElement('h1');
    h1.textContent = post.title;
    const p = document.createElement('p');
    p.textContent = post.body;
    document.body.appendChild(h1);
    document.body.appendChild(p);
    const ul = document.createElement('ul');
    document.body.appendChild(ul);

    for (const comment of commentsArray) {
        const li = document.createElement('li');
        li.textContent = comment;
        ul.appendChild(li);
    } 
}

getPostsAndComments();