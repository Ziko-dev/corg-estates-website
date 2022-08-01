let toggleButton = document.getElementsByClassName("toggle-btn")[0]  
let navBar = document.getElementsByClassName("nav-content")[0]

toggleButton.addEventListener('click', () => {
navBar.classList.toggle('active')
})
