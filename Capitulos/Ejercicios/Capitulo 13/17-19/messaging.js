function iniciar(){
    var boton=document.getElementById('boton');
    boton.addEventListener('click', enviar, false);
  
    window.addEventListener('message', receptor, false);
  }
  function enviar(){
    var nombre=document.getElementById('nombre').value;
    var iframe=document.getElementById('iframe');
    iframe.contentWindow.postMessage(nombre, 'http://www.dominio2.com');
  }
  function receptor(e){
    if(e.origin=='http://www.dominio2.com'){
      document.getElementById('nombre').value=e.data;
    }
  }
  window.addEventListener('load', iniciar, false);