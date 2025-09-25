document.addEventListener("DOMContentLoaded", () => {
    // Função para mudar a cor do para1
    window.mudarCor = function (novaCor) {
        const elemento = document.getElementById("para1");
        elemento.style.backgroundColor = novaCor;
        elemento.style.display = 'inline';
    };

    // Manipulação do círculo
    const rodri_circulo = document.getElementById('circulo');
    let tamanho_rodri = 1;

    rodri_circulo.addEventListener('dblclick', () => {
        rodri_circulo.style.borderRadius = `${tamanho_rodri}px`;
        rodri_circulo.style.width = `${tamanho_rodri * 2}px`;
        rodri_circulo.style.height = `${tamanho_rodri * 2}px`;
        tamanho_rodri += 30;
    });

    // Manipulação do formulário
    const form = document.getElementById('texto');
    const section = document.getElementById('sc');
    const p = section.querySelector('p');

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const input = form.querySelector('input');
        if (parseInt(input.value) < 24) {
            p.innerText = "Professor é mais velho";
            p.style.display = 'block';
        } else {
            p.innerHTML = '<h1> Olá Mundo </h1>';
            p.style.display = 'block';
        }
    });

    // Toggle das imagens
    const container = document.getElementById('fotos');
    const imagens = container.getElementsByTagName('img');

    const fotosOriginais = ["dioni.jpg", "ismael.jpg", "lucas.jpg"];
    const novasFotos = ["poliana.jpg", "kaua.jpg", "celso.webp"];

    let trocou = false;

    container.addEventListener('click', () => {
        if (!trocou) {
            for (let i = 0; i < imagens.length; i++) {
                imagens[i].src = novasFotos[i];
            }
            trocou = true;
        } else {
            for (let i = 0; i < imagens.length; i++) {
                imagens[i].src = fotosOriginais[i];
            }
            trocou = false;
        }
    });
});
