function iniciar() { 
   maximo=600; 
   medio=document.getElementById('medio'); 
   reproducir=document.getElementById('reproducir'); 
   barra=document.getElementById('barra');
   progreso=document.getElementById('progreso'); 
   reproducir.addEventListener('click', presionar, false); 
   barra.addEventListener('click', mover, false); 
}
