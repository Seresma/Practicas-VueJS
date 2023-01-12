
const characters = ['Goku', 'Vegeta', 'Trunks']

// Para desectructurar un array hay que hacer con las POSICIONES
const [goku, vegeta, trunks, goten = 'Goten'] = characters

console.log(goku, goten)

const returnArray = () => {
    return ['ABC', 123]
}

const [letters, numbers] = returnArray()

console.log(letters, numbers)