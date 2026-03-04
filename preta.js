function irParaMomentos() {
    window.location.href = "momentos.html";
}

function irParaCarta() {
    window.location.href = "carta.html";
}

function voltarHome() {
    window.location.href = "index.html";
}

function mostrarSurpresa() {
    const surpresa = document.getElementById("surpresa");

    surpresa.innerHTML = `
        <div class="versiculo-box">
            <strong>Um versículo que representa o que eu sinto por você:</strong><br><br>

            "As muitas águas não podem apagar o amor;
            os rios não conseguem levá-lo na correnteza.
            Se alguém oferecesse todas as riquezas da sua casa para adquirir o amor,
            seria totalmente desprezado."
            
            <br><br>
            ❤️ Cantares 8:7 ❤️
            
            <br><br>
            <em>
            É assim que eu quero te amar… 
            Um amor que nada apaga,
            nada destrói,
            nada separa.
            </em>

            <br><br>

          <h3 style="margin-top:15px;">
    Entre todos os tesouros do mundo,
    você é o meu verdadeiro One Piece. ❤️🏴‍☠️  Se amar você for minha maior aventura,
    então eu quero navegar por essa vida inteira ao seu lado.
    Porque meu verdadeiro tesouro sempre vai ser você. 💍
</h3>
        </div>
    `;

    surpresa.classList.add("fade-in");
}

/* Corações subindo */
function criarCoracao() {
    const heart = document.createElement("span");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    document.querySelector(".hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 10000);
}

setInterval(criarCoracao, 300);

/* Animação suave dos cards */
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("mostrar");
        }, index * 400); // aparece um depois do outro
    });
});

document.addEventListener("click", function iniciarMusica() {
    const musica = document.getElementById("musica");
    if (musica) {
        musica.volume = 0.3; // volume suave
        musica.play();
    }
    document.removeEventListener("click", iniciarMusica);
});