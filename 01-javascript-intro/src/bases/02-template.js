
const nombre = 'Sergio'
const apellido = 'Escudero'

// Template mejor que utilizar operaciones tipicas se pone entre llaves y se pone una expresion
const nombreCompleto = `${nombre} ${apellido}`

console.log(nombreCompleto)

function getSaludo(nombre) {
    return 'Hola ' + nombre
}

console.log(`Este es el resultado: ${getSaludo(nombre)}`)