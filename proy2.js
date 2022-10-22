let contador = 0;

const valor = document.querySelector('#valor');
const botones = document.querySelectorAll('.boton');

botones.forEach(boton => {
  boton.addEventListener('click', function(e) {

    const estilos = e.currentTarget.classList;

    if(estilos.contains('disminuir')) {
      contador--;
    }
    else if(estilos.contains('incrementar')) {
      contador++;
    }
    else {
      contador = 0;
    }
      valor.textContent = contador;

      // vamos a cambiar los colores 

      if(contador > 0) {
        valor.style.color = '#00FF00';
      }
      if(contador < 0) {
        valor.style.color = '#FF0000';
      }
      if(contador == 0){
        valor.style.color = '#C0C0C0';
      }
  })
})