// Haciendo que la planta 1 de mi documento
// sea arrastable
dragElement(document.getElementById("plant1"));
// Implementadno la funcion drag elemnt
 function dragElement (terrariumElement){
    //Creando variables para el control de las posiciones 
    //Las posiciones iniales y finales
    let pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0
    // Registrar un evento
    terrariumElement.onpointerdown = pointerDrag
    
    function pointerDrag( event ){
        //Previene cualquier elemento  que tenga por defecto
        // el evento en cuestion en mi documento
        event.preventDefault();
        console.log("+ On pointer down");
    }
}