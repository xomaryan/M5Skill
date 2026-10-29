export function createPost(username, text, imgUrl, initialLikes) {
    let articleList = document.querySelector("#articleListId");
    
    let rootElement = document.createElement("article");
    rootElement.classList.add("post");
    
    rootElement.innerHTML = `
        <header class="postHeader">
            <span class="username">${username}</span>
        </header>

        <figure class="postImage">
            <img src="${imgUrl}" alt="${username} post image">
        </figure>

        <footer class="postFooter">
            <div class="buttons">
                <div class="left-buttons">
                    <button class="btn-icon like-btn" aria-label="Likes">❤️</button>
                    <button class="btn-icon" aria-label="Reageren">💬</button>
                    <button class="btn-icon" aria-label="Delen">✈️</button>
                </div>
                <button class="btn-icon" aria-label="Opslaan">🔖</button>
            </div>

            <p class="likesText"><strong class="likesCount">${initialLikes}</strong> Likes</p>

            <p class="postText">
                <strong>${username}</strong> ${text}
            </p>

            <div class="commentsSection">
                <span class="timeAgo">2 UUR GELEDEN</span>
            </div>
        </footer>
    `;

    // --- Like functionaliteit ---
    let likeBtn = rootElement.querySelector(".like-btn");
    let likesCountSpan = rootElement.querySelector(".likesCount");
    
    let currentLikes = initialLikes;
    let isLiked = false;

    likeBtn.addEventListener("click", () => {
        if (!isLiked) {
            currentLikes++;
            isLiked = true;
            likeBtn.classList.add("liked"); // Maakt het hartje actief/anders
        } else {
            currentLikes--;
            isLiked = false;
            likeBtn.classList.remove("liked");
        }

        likesCountSpan.textContent = currentLikes;
    });

    articleList.appendChild(rootElement);
}