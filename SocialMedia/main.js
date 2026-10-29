import { createPost } from './post.js';

async function fetchData() {
    let response = await fetch('data.json');
    let posts = await response.json();
    console.log(posts);

    for (const post of posts) {
        createPost(post.user, post.text, post.imgUrl, post.likes);
    }
}

fetchData();