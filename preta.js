// ------------------ PUZZLE -------------------
const hearts = document.querySelectorAll(".heart");
const revealedMessage = document.getElementById("revealedMessage");

let wordsRevealed = [];

hearts.forEach(heart => {
    heart.addEventListener("click", function(){
            const word = heart.getAttribute("data-word");
                    wordsRevealed.push(word);
                            revealedMessage.textContent = wordsRevealed.join(" ");
                                    heart.style.opacity = "0.2";
                                            heart.style.pointerEvents = "none";

                                                    if(wordsRevealed.length === hearts.length){
                                                                revealedMessage.textContent += " 💖";
                                                                        }
                                                                            });
                                                                            });

                                                                            // ------------------ PORCENTAGEM DO AMOR -------------------
                                                                            const loveBtn = document.getElementById("loveBtn");
                                                                            const loveMessage = document.getElementById("loveMessage");

                                                                            loveBtn.addEventListener("click", function(){
                                                                                loveMessage.classList.add("show");
                                                                                    let valores = ["0%", "10%", "50%", "100%", "1000%", "1000000%", "∞%"];
                                                                                        let index = 0;
                                                                                            loveMessage.innerHTML = "Eu te amo " + valores[index] + " ❤️";

                                                                                                let intervalo = setInterval(()=>{
                                                                                                        index++;
                                                                                                                if(index < valores.length){
                                                                                                                            loveMessage.innerHTML = "Eu te amo " + valores[index] + " ❤️";
                                                                                                                                    } else {
                                                                                                                                                clearInterval(intervalo);
                                                                                                                                                        }
                                                                                                                                                            }, 500);
                                                                                                                                                            });

                                                                                                                                                            // ------------------ CONTADOR DE TEMPO -------------------
                                                                                                                                                            const timeTogether = document.getElementById("timeTogether");

                                                                                                                                                            // DATA DE INÍCIO (ano, mês-1, dia, hora, minuto, segundo)
                                                                                                                                                            const startDate = new Date(2026, 1, 13, 0, 0, 0); // 13/02/2026 00:00:00

                                                                                                                                                            function atualizarContador(){
                                                                                                                                                                const now = new Date();
                                                                                                                                                                    let diff = now - startDate; // diferença em ms

                                                                                                                                                                        const segundos = Math.floor(diff / 1000) % 60;
                                                                                                                                                                            const minutos = Math.floor(diff / (1000 * 60)) % 60;
                                                                                                                                                                                const horas = Math.floor(diff / (1000 * 60 * 60)) % 24;
                                                                                                                                                                                    const dias = Math.floor(diff / (1000 * 60 * 60 * 24));

                                                                                                                                                                                        timeTogether.textContent = `Estamos juntos há ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos ❤️`;
                                                                                                                                                                                        }

                                                                                                                                                                                        // Atualiza a cada segundo
                                                                                                                                                                                        setInterval(atualizarContador, 1000);
                                                                                                                                                                                        atualizarContador(); // inicializa imediatamente