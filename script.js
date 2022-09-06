function personagemPular() {
    let personagem = document.getElementById("personagem")
    const personagemEstilosCSS = getComputedStyle(personagem)
    const posicaoDoBottom = personagemEstilosCSS.bottom.split("px")[0]
    if(posicaoDoBottom == "0") {
        const pularClasseCSS = "pula"
        personagem.classList.add(pularClasseCSS)
        const tempoDaAnimacao = parseInt(personagemEstilosCSS.animation.split("s")[0])
        setTimeout(()=>{
            personagem.classList.remove(pularClasseCSS)
        }, tempoDaAnimacao * 1000)
       
    }
}