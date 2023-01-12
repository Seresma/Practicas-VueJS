
/* function saludar(nombre) {
    return `Hola ${nombre}`
} */

// Definir una funcion como constante es mas seguro
const saludar = function saludar(nombre) {
    return `Hola ${nombre}`
}

// Mejor hacerla como expresion lambda
const saludarLambda = (nombre) => `Hola ${nombre}`


console.log(saludar('Manolito'))
console.log(saludarLambda('ManolitoLambda'))

// Para devolver un objeto se pone entre parentesis o con return y llaves
const getUser = () => ({
    uuid: '32434234',
    nombre: 'Sergio'
})

console.log(getUser())

const heroes = [{
    id: 1,
    nombre: 'Batman'
},
{
    id: 2,
    nombre: 'Superman'
}]

// some para saber si algo cumple una condicion, filter para filtrar varios y find para uno solo
const existeHeroe = (id) => heroes.some((h) => h.id === id)
const getHeroe = (id) => heroes.find((h) => h.id === id)

console.log(existeHeroe(1));
console.log(getHeroe(1).nombre);
