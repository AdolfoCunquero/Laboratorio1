function iniciar(){
    trabajador=new SharedWorker('trabajador.js');
    trabajador.port.addEventListener('message', recibido, false);
    trabajador.port.start();
  }
  function recibido(e){
    var cajadatos=document.getElementById('cajadatos');
    cajadatos.innerHTML=e.data;
  }
  window.addEventListener('load', iniciar, false);