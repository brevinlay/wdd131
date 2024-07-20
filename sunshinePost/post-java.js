document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {

        const title = document.getElementById("title").value;
        const post = document.getElementById("post").value;
        const picture = document.getElementById("pictureUpload").files[0];
        
        
        const reader = new FileReader();
        reader.onload = function(event) {
            const pictureDataUrl = event.target.result;

            const postData = {
                title: title,
                post: post,
                picture: pictureDataUrl
            };

            localStorage.setItem("postData", JSON.stringify(postData));

            window.location.href = "index.html";
        };

        if (picture) {
            reader.readAsDataURL(picture);
        } else {
            const postData = {
                title: title,
                post: post,
                picture: null
            };
            localStorage.setItem("postData", JSON.stringify(postData));
            window.location.href = "index.html";
        }
    });
});