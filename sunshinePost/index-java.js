document.addEventListener("DOMContentLoaded", function() {
    
    const postData = JSON.parse(localStorage.getItem("postData"));

    if (postData) {
        const postContainer = document.createElement("div");

        const titleElement = document.createElement("h2");
        titleElement.textContent = postData.title;
        postContainer.appendChild(titleElement);

        const postElement = document.createElement("p");
        postElement.textContent = postData.post;
        postContainer.appendChild(postElement);

        if (postData.picture) {
            const pictureElement = document.createElement("img");
            pictureElement.src = postData.picture;
            pictureElement.alt = "Post Image";
            postContainer.appendChild(pictureElement);
        }

        
        const leftDiv = document.querySelector(".left");
        leftDiv.appendChild(postContainer);
    } else {
        const errorElement = document.createElement("p");
        errorElement.textContent = "No post data found.";
        document.querySelector(".left").appendChild(errorElement);
    }
});