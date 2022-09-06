const personagem = document.getElementById("personagem")
const personagemEstilosCSS = getComputedStyle(personagem)

const bloco = document.getElementById("bloco")
const blocoEstilosCSS = getComputedStyle(bloco)

const personagemPular = () => {    
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

const perdeu = setInterval(()=>{
    let gameWidth = parseInt(getComputedStyle(document.getElementById("jogo")).width)
    let rightPersonagem = parseInt(personagemEstilosCSS.right.split("px")[0])
    let leftPersonagem = gameWidth - rightPersonagem
    let leftBloco = parseInt(personagemEstilosCSS.left.split("px")[0])
    
    console.log(gameWidth);
    console.log(rightPersonagem);
    console.log(leftPersonagem);
    if(leftBloco >= leftPersonagem) {
        console.log('perdeu');
        return true
    } else {
        return false
    }
}, 1000);