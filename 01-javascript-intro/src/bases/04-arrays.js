
// const array = new Array(100) menos comun
const array = [1, 2, 3, 4]

// push para añadir
array.push(5)

const array2 = [...array]

array2.push(69)

// map devuelve un array con una funcion que queremos aplicar a cada elemento
const array3 = array2.map(function (n) {
    return n * 2
})

console.log(array3)
console.log(array2)
console.log(array)