const html = document.querySelector("html");
const btnFoco = document.querySelector(".app__card-button--foco");
const btnCurto = document.querySelector(".app__card-button--curto");
const btnLongo = document.querySelector(".app__card-button--longo");
const banner = document.querySelector(".app__image");
const titulo = document.querySelector(".app__title");

const btn = document.querySelector(".app__card-button");

btnFoco.addEventListener("click", () => {
    alterarContexto("foco");

    
});

btnCurto.addEventListener("click", () => {
    alterarContexto("descanso-curto");
     
});

btnLongo.addEventListener("click", () => {
    alterarContexto("descanso-longo");
});


function alterarContexto(contexto){
    html.setAttribute("data-contexto", contexto);
    banner.setAttribute("src", `/imagens/${contexto}.png`);
    
    switch (contexto) {
        case "foco":
            titulo.innerHTML = `Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>`
            break;

        case "descanso-curto":
            titulo.innerHTML = `Que tal dar uma respirada?<br>
                <strong class="app__title-strong">Faça uma pausa curta!</strong>`
                break;

        case "descanso-longo":
            titulo.innerHTML = `Hora de voltar a superfície.<br>
                <strong class="app__title-strong">Faça uma pausa longa.</strong>`
            break;
        
        default:
            break;
    }
}

const pg = document.getElementById
