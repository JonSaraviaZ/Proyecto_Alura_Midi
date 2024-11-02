function playSonido(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

for(let contador = 0;contador<listaDeTeclas.length; contador ++){ //let contador = 0 es el inicio del for. / contador < 9 es la condición / contador = contador + 1 es el incremento o decremento que pasará al realizar una acción
    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1];
    console.log(contador);

    const idAudio = `#sonido_${instrumento}`;
    console.log(idAudio);

    tecla.onclick = function (){
        playSonido(idAudio);
    };
    tecla.onkeydown = function(evento){

        //console.log(evento.code === 'Space'); // === verifican el valor y el tipo de dato
        if(evento.code === 'Space' || evento.code === 'Enter'){
            tecla.classList.add('activa');
        }
        console.log(evento.code === 'Space' || evento.code === 'Enter');
    }
    tecla.onkeyup = function(){
        tecla.classList.remove('activa');
    }
}