function Mudarcor(novaCor) {
        var elemento = document. getElementbyid("para1");
        elemento.style.backgroundcolor = novaCor;
        elemento.style.display = 'inline';
    };
const rodri_ciculo = document.getElementById('ciculo')
let tamanho_rodri = 1


const imagem = document.getElementById('foto')
let foto_t = false


imagem.addEventListener('click', ()=>{
   if (foto_t === false) {
       imagem.src = 'pokedex.png'
       foto_t = true       
   }else{
       imagem.src = 'foto.jpg'
   }
});



rodri_ciculo.addEventListener ('dblclick',()=>{
   rodri_ciculo.style.borderRadius = `${tamanho_rodri}px`;
   rodri_ciculo.style.width = `${tamanho_rodri*2}px`;
   rodri_ciculo.style.height = `${tamanho_rodri*2}px`;
   tamanho_rodri +=30;
})

    const form = document.getElementById('texto')
    const section = document.getElementById('sc')

    form.addEventListener("submit", (event)=>{
        event.preventDefault();
        var input=form.querySelector('input')
        if(parseInt(input.value) < 24 ){
            p.innerText = "Professor é mais velho"
            p.style.display = 'block'
            }else{
                var p = section.querySelector('p')
                p.innerHTML = '<h1> Olá Mundo </h1>'
                p.style.display = 'block'
            } 
        });

        const container = document.getElementById('fotos')
        const imagens = container.getElementsByTagName('img');
        container.addEventListener('click', () => {
            for (let i = 0; i < imagens.length; i++) {
                imagens[i].src = `baixados(${i = 5}).jpg`;
            }
        });
        

        