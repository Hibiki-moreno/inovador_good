//Animaciones 
nombre = document.getElementById('nombre')
codigo = document.getElementById('codigo')
ruta = document.getElementById('imagen')

// script.js
function animateLabel(nombre) {
    const input = document.getElementById('nombre')
    const label = input.nextElementSibling; // Obtener la etiqueta (el elemento hermano anterior)

    label.style.transform = 'translateY(-150%)'; // Mueve la etiqueta hacia arriba
    label.style.fontSize = '12px'; // Cambia el tamaño de la fuente de la etiqueta

    // Opcionalmente, puedes cambiar otros estilos de la etiqueta aquí según tus preferencias

    // También puedes agregar una transición para que la animación sea suave
    label.style.transition = 'transform 0.3s ease, font-size 0.3s ease';
}

function animateLabel1(codigo) {
    const input = document.getElementById('codigo')
    const label = input.nextElementSibling; // Obtener la etiqueta (el elemento hermano anterior)

    label.style.transform = 'translateY(-150%)'; // Mueve la etiqueta hacia arriba
    label.style.fontSize = '12px'; // Cambia el tamaño de la fuente de la etiqueta

    // Opcionalmente, puedes cambiar otros estilos de la etiqueta aquí según tus preferencias

    // También puedes agregar una transición para que la animación sea suave
    label.style.transition = 'transform 0.3s ease, font-size 0.3s ease';
}

function animateLabel2(imagen) {
    const input = document.getElementById('imagen')
    const label = input.nextElementSibling; // Obtener la etiqueta (el elemento hermano anterior)

    label.style.transform = 'translateY(-150%)'; // Mueve la etiqueta hacia arriba
    label.style.fontSize = '12px'; // Cambia el tamaño de la fuente de la etiqueta

    // Opcionalmente, puedes cambiar otros estilos de la etiqueta aquí según tus preferencias

    // También puedes agregar una transición para que la animación sea suave
    label.style.transition = 'transform 0.3s ease, font-size 0.3s ease';
}

function restoreLabel(nombre) {
   
    const input = document.getElementById('nombre');
    const label = input.nextElementSibling;
    if(input.value.length <= 1){
      
        label.style.transform = 'translateY(100%)';
       
    
    }
    }
    

    function restoreLabel1(codigo) {
  
        const input = document.getElementById('codigo');
        const label = input.nextElementSibling;
        if(input.value.length <= 1){
     
            label.style.transform = 'translateY(100%)';
           
        
        }
        }
        
        function restoreLabel2(imagen) {
     
            const input = document.getElementById('imagen');
            const label = input.nextElementSibling;
            if(input.value.length <= 1){
              
                label.style.transform = 'translateY(100%)';
               
            
            }
            }
 //**********************  backbone  ****************************************