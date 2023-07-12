function openClose() {
    let headerLinks = document.getElementById("responsive-header-links");
    headerLinks.classList.toggle("open-header-links"); 
}

let toggleButton = document.getElementById("toggle-btn");

toggleButton.addEventListener("click", openClose);