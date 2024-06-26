const themeSelector = document.querySelector("#themeSelector");

function changeTheme() {
//check to see what the current value of our select is. The current value is conveniently found in themeSelector.value!
const selectedTheme= themeSelector.value

if (selectedTheme === "dark"){
    
    const body = document.querySelector("body");
    body.setAttribute("class", "dark");
    document.body.appendChild(body)

    const img = document.quearySelector("logo");
    img.setAttribute("src", "mission\byui-logo_white.png");
    document.body.appendChild(img)

} else {

    const body = document.querySelector("body");
    body.setAttribute("class", "");
    document.body.appendChild(body)

    const img = document.querySelector("logo");
    img.setAttribute("src", "mission\byui-logo.png");
    document.body.appendChild(img)
}

}
// add eventlistener to the themeSelector element here. Use the changeTheme function as the event handler function.
themeSelector.addEventListener('change', changeTheme);