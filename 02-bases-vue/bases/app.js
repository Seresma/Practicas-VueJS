// Respresentacion declarativa entre 2 llaves para mayoria expresiones salvo if, for o while (utilizar operador ternario ?)

//  template: `
// <h1>Hola Mundo</h1>    
// <p>Desde app.js</p>
// `

const app = Vue.createApp({

    // OptionsAPI
    // Objetos reactivos que se utilizan en la app
    data() {
        return {
            quote: "I'm Batman",
            author: "Bruce Wayne"
        }
    },
    methods: {
        // Recibe un evento como parametro aunque se puede omitir
        // this hace refencia al mismo componente (app)
        changeQuote() {
            console.log("Hola Mundo")
            this.quote = "Tu puta madre"

            this.capitalize()
        },
        capitalize() {
            this.quote = this.quote.toUpperCase()
        }
    }
})

app.mount("#myApp")