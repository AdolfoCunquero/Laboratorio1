function iniciar(){
    cajadatos=document.getElementById('cajadatos');
    var boton=document.getElementById('boton');
    boton.addEventListener('click', enviar, false);
  
    socket=new WebSocket("ws://www.dominio.com:12345/server.php");
    socket.addEventListener('message', recibido, false);
  }
  function recibido(e){
    var lista=cajadatos.innerHTML;
    cajadatos.innerHTML='Recibido: '+e.data+'<br>'+lista;
  }
  function enviar(){
    var comando=document.getElementById('comando').value;
    socket.send(comando);
  }
  window.addEventListener('load', iniciar, false);