const quotes = [
    { quote: 'The night is darkest just before the dawn. And I promise you, the dawn is coming.', author: 'Harvey Dent, The Dark Knight' },
    { quote: 'I believe what doesn’t kill you simply makes you, stranger.', author: 'The Joker, The Dark Knight' },
    { quote: 'Your anger gives you great power. But if you let it, it will destroy you… As it almost did me', author: 'Henri Ducard, Batman Begins' },
    { quote: 'You either die a hero or live long enough to see yourself become the villain.', author: 'Harvey Dent, The Dark Knight' },
    { quote: 'If you’re good at something, never do it for free.', author: 'The Joker, The Dark Knight' },
    { quote: 'Yes, father. I shall become a bat.', author: 'Bruce Wayne/Batman, Batman: Year One' },
]

const app = Vue.createApp({

    data() {
        return {
            // Al llamarse igual se puede omitir el primer quotes
            quotes: quotes,
            newQuote: "Hola Mundo"
        }
    },
    methods: {
        // Analizando el evento podemos saber que tecla queremos en este caso el enter
        // Pero no es necesario ya que podemos modificar el evento
        addQuote() {
            // unshift para ponerlo al principio y push para el final
            this.quotes.unshift({
                quote: this.newQuote
            })
        }
    }
})

app.mount("#myApp")