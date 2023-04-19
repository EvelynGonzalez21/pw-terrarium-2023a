//Tomado el control del objeto
let plant1 = document.getElementById("plant1")
//agregar
plant1.addEventListener("click", function(){
    let name = prompt("Hola, ¿Cual es tu nombre?");
    if(name !==""){
    alert(`${name} please, save the planet🌻`);
    }
});