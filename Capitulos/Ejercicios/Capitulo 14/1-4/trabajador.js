addEventListener('message', recibido, false);

function recibido(e){ 
    if(e.data=='cerrar2'){
        postMessage('Trabajador Detenido');
        close();
      }else{
        var respuesta='Su nombre es '+e.data;
        postMessage(respuesta);
      }
    }