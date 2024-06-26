function cargar_elemento() {
    var content = document.getElementById("Opcion_01")
    var texto = document.getElementById("Opcion_02")
    
    if(opcion == 1) {
        opcion_1.style.zIndex = 2
        opcion_2.style.zIndex = 1
       } else if (opcion == 2) {
            opcion_1.style.zIndex = 1
            opcion_1.style.zIndex = 2
    }
}