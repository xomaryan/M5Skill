let articleList = document.querySelector("#articleListId");

function createPost(title, imgUrl, text) {

let rootElement = document.createElement("article");
rootElement.classList.add("post");

    rootElement.innerHTML = `
        <header class="postHeader">
            <h2>${title}</h2>
        </header>
            <figure class="postImage">
                <img src="https://www.cats.org.uk/media/yhxbyvoy/230215case104.jpg" alt="img"></figure>

            <footer class="postFooter">
                <div class="buttons">
                    <button class="Likes">Likes</button>
                    <button class="Comments">Comments</button>

                    <p class="postText">
                        <strong>Naam:</strong> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus deserunt, asperiores quas voluptatibus impedit, sapiente quisquam iste quaerat iusto itaque fugiat consectetur, molestiae repudiandae fuga. Maxime delectus soluta quasi voluptas.
                    </p>
                </div>
            </footer>
    `;
    articleList.appendChild(rootElement);
}

createPost(
    "Naam",
    "https://www.cats.org.uk/media/yhxbyvoy/230215case104.jpg",
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus deserunt, asperiores quas voluptatibus impedit, sapiente quisquam iste quaerat iusto itaque fugiat consectetur, molestiae repudiandae fuga. Maxime delectus soluta quasi voluptas."
);
