
// Creacion de un objeto de manera estatica
Let mi carro = {
    marca: 'Mazda',
    modelo: 'MZX-2000'
    anio: 2024,
    detalle_auto: function (){
        console.log( `Auto: ${this.marca}-${this.modelo}. Año: $(this.anio).` )
    }
}

console.log( mi_carro.marca )
console.log( mi_carro.detalle_auto() )

// Creacion de un objeto de manera dinamica

