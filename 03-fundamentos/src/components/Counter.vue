<template>
    <h2>{{ customTitle }}</h2>
    <p>{{ counter }} <sup>2</sup> = {{ counter * counter }}</p>
    <p>{{ counter }} <sup>2</sup> = {{ squareCounter }}</p>

    <div>
        <button @click="increase">+1</button>
        <button @click="decrease">-1</button>
    </div>
</template>

<script>

export default {
    // vue shortcut para crear el componente
    // @ shortcut para v:on y : para v-bind

    // Properties del componente, siempre al principio
    // CIUDADO ENTRE COMILLAS SIMPLES SIEMPRE
    props: {
        title: String,
        start: {
            type: Number,
            // required: true
            // valor por defecto y si no especificamos en el componente con : o v-bind 
            default: 5,
            // validador que coge la propiedad en value
            validator(value) {
                return value >= 0
            }
        }
    },
    // Info del componente
    data() {
        return {
            counter: this.start,
        }
    },
    // Métodos para llamarlo +1 vez cuando se renderice
    methods: {
        getSquareValue() {
            return this.counter * this.counter
        },
        increase() {
            this.counter++
        },
        decrease() {
            this.counter--
        }
    },
    // Propiedades computadas para solo llamarlo 1 vez cuando se renderice siempre returnan
    computed: {
        squareCounter() {
            return this.counter * this.counter
        },
        // Para computar el atributo por defecto
        customTitle() {
            return this.title || "Counter"
        }
    }
}
</script>

<style>
button {
    background-color: #64BBB7;
    border-radius: 5px;
    border: 1px solid white;
    color: white;
    cursor: pointer;
    margin: 0 5px;
    padding: 5px 15px;
    transition: 0.3s ease-in-out;
}

button:hover {
    background-color: #5AA67B;
    transition: 0.3s ease-in-out;
}
</style>
