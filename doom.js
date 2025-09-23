function Mudarcor(novaCor) {
        var elemento = document. getElementbyid("para1");
        elemento.style.backgroundcolor = novaCor;
        elemento.style.display = 'inline';
    };

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

        