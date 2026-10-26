export function createPost(username, text, imgUrl) {
    let articleList = document.querySelector("#articleListId");
    
    let rootElement = document.createElement("article");
    rootElement.classList.add("post");
    
    rootElement.innerHTML = `
        <header class="postHeader">
            <span class="username">${username}</span>
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
                <strong>${username}</strong> ${text}
            </p>

            <div class="commentsSection">
                <span class="timeAgo">2 UUR GELEDEN</span>
            </div>
        </footer>
    `;

    articleList.appendChild(rootElement);
}