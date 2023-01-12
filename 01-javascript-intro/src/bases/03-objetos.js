
// Esto es un objeto literal
// Los objetos se pasan por REFERENCIA
const persona = {
    nombre: 'Shinichi',
    apellido: 'Kudo',
    edad: 18,
    direccion: {
        ciudad: 'Tokio',
        zip: 30007,
        lat: 14.453245,
        lng: 234.3452345
    }
}

console.log(persona)

// Se pasa por REFERENCIA y se MODIFICAN AMBOS OBJETOS
// const persona2 = persona

// Para hacer una copia se utiliza el operador SPREAD(...) que pasa las propiedades del objeto
const persona2 = {...persona}

persona2.nombre = 'Conan'

console.log(persona2)
console.log(persona)