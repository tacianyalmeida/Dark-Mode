function darkMode() {
    const pagina = document.body
    pagina.classList.toggle("darkMode")

    const botao = document.querySelector("button")
    const isdarkMode = document.body.classList.contains("darkMode");

    if(isdarkMode == true ){
    botao.textContent = "Modo claro"
    }else{
        botao.textContent = "Modo Escuro"

    }
}