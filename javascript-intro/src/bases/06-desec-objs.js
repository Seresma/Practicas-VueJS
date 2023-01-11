
const persona = {
    nombre: 'Clark Kent',
    edad: 38,
    apodo: 'Superman'
}

// Utilizamos desestructuracion para tener que evitar poner persona.nombre, persona.edad
// Tambien para poner propiedades que no estan en el objeto
const { nombre, edad, apodo, poder = 'No tiene ningun poder' } = persona


console.log(nombre)
console.log(edad)
console.log(apodo)
console.log(poder)

// Se pasa como argumento la persona pero solo se coge las propiedad que me interesan con la desectructuracion
// Se renombranl as propiedades con :
const createHero = ({ nombre, edad, apodo, poder = 'Superfuerza' }) => ({
    id: '2341231442',
    // Se puede obviar cuando la constante se llama igual que la propiedad
    nombre,
    edad,
    apodo,
    poder
})

console.log(createHero(persona))
