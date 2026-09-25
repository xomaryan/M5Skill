let articleList = document.querySelector("#articleListId");



function createPost(username, text, imgUrl) {
    let rootElement = document.createElement("article");
    rootElement.classList.add("post");
    
    rootElement.innerHTML = `
        <header class="postHeader">
                    <span class="username">${title}</span>
                </header>

                <figure class="postImage">
                    <img src="${imgUrl}" alt="kat">
                </figure>

                <footer class="postFooter">
                    <div class="buttons">
                        <div class="left-buttons">
                            <button class="btn-icon" aria-label="Likes">❤️</button>
                            <button class="btn-icon" aria-label="Reageren">💬</button>
                            <button class="btn-icon" aria-label="Delen">✈️</button>
                        </div>
                        <button class="btn-icon" aria-label="Opslaan">🔖</button>
                    </div>

                    <p class="likesText"><strong>142 Likes</strong></p>

                    <p class="postText">
                        <strong>naam</strong>${text}
                    </p>

                    <div class="commentsSection">
                        <span class="timeAgo">2 UUR GELEDEN</span>
                    </div>
                </footer>
        `;

        articleList.appendChild(rootElement);
}

createPost(
    "naam",
    "https://www.cats.org.uk/media/yhxbyvoy/230215case104.jpg",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi non qui repudiandae obcaecati unde dolor quo nobis saepe alias nisi blanditiis cumque maxime, rem sit a quibusdam ea! Tempore, laudantium?"
);