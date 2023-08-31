function toggleMode() {
  const html = document.documentElement;

  // if (html.classList.contains("light")) {
  // html.classList.remove("light");
  // } else {
  // html.classList.add("light");
  // }
  html.classList.toggle('light')

    // pegar a tag img
    // condição: se estiver light mode, adicionar a imagem light, se estiver sem light mode - manter a imagem normal
    // substituir a imagem

    const img = document.querySelector("#profile img") 
        if (html.classList.contains("light")) {
        // se estiver light mode, adicionar a imagem light.
            img.setAttribute('src', './assets/avatar-light.png')
        } else {
            img.setAttribute('src', './assets/avatar.png')
        }

}
