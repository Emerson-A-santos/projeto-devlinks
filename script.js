function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    //pega a tag img
    const img = document.querySelector("#profile img")

    //subistituir a imagem
    if (html.classList.contains("light")) {
        img.setAttribute("src", "./assets/Avatar.png")
     }else {
        img.setAttribute("src", "./assets/avatar-light.png")
     }
}
