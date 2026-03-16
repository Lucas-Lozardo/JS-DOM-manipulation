const html = document.querySelector("html");
const btnFoco = document.querySelector(".app__card-button--foco");
const btnCurto = document.querySelector(".app__card-button--curto");
const btnLongo = document.querySelector(".app__card-button--longo");
const banner = document.querySelector(".app__image");
const titulo = document.querySelector(".app__title");
const btns = document.querySelectorAll(".app__card-button");
const startPauseBtn = document.querySelector("#start-pause");
const musicaFocoInput = document.querySelector("#alternar-musica"); //# por ser ID.
const iniciarOuPausarBtn = document.querySelector("#start-pause span");
const imgIniciarOuPausarBtn = document.querySelector(".app__card-primary-butto-icon")
const tempoNaTela = document.querySelector("#timer");
const musica = new Audio("/sons/luna-rise-part-one.mp3");
const audioTempoIniciar = new Audio("/sons/play.wav");
const audioTempoParar = new Audio("/sons/pause.mp3");
const audioTempoFinalizado = new Audio("/sons//beep.mp3");

let tempoDecorridoEmSegundos = 1500;
let intervaloId = null;

musica.loop = true;

musicaFocoInput.addEventListener("change", () => {
    if (musica.paused) {
        musica.play();
    }else{
        musica.pause()
    }
})

btnFoco.addEventListener("click", () => {
    tempoDecorridoEmSegundos = 1500;
    alterarContexto("foco");
    btnFoco.classList.add("active");
});

btnCurto.addEventListener("click", () => {
    tempoDecorridoEmSegundos = 300;
    alterarContexto("descanso-curto");
    btnCurto.classList.add("active");
});

btnLongo.addEventListener("click", () => {
    tempoDecorridoEmSegundos = 900;
    alterarContexto("descanso-longo");
    btnLongo.classList.add("active");
});


function alterarContexto(contexto){
    mostrarTempo();
    btns.forEach(function (btn){
        btn.classList.remove("active")
    })

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

//-------TEMPORIZADOR-------
const contagemRegressiva = () => {
    if (tempoDecorridoEmSegundos <= 0) {
        audioTempoFinalizado.play()
        alert("Tempo finalizado!");
        zerarTemporizador();
        return;
        
    }
    tempoDecorridoEmSegundos -= 1;
    mostrarTempo();
}

startPauseBtn.addEventListener("click", iniciarOuPausar);

function iniciarOuPausar(){
    if(intervaloId){
        audioTempoParar.play();
        zerarTemporizador();
        return;
    }

    intervaloId = setInterval(contagemRegressiva, 1000);
    audioTempoIniciar.play();
    iniciarOuPausarBtn.textContent = "Pausar"
    imgIniciarOuPausarBtn.setAttribute("src", "/imagens/pause.png");
}

function zerarTemporizador(){
    clearInterval(intervaloId);
    iniciarOuPausarBtn.textContent = "Começar"
    imgIniciarOuPausarBtn.setAttribute("src", "/imagens/play_arrow.png");
    intervaloId = null;
}

function mostrarTempo(){
    const tempo = new Date(tempoDecorridoEmSegundos * 1000);
    const tempoFormatado = tempo.toLocaleTimeString("pt-BR", {minute: "2-digit", second: "2-digit"})
    tempoNaTela.innerHTML = `${tempoFormatado}`;
}

mostrarTempo()
