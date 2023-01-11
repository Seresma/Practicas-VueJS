import axios from "axios"

const apiKey = "DbteQHGmTJfAFyMjvRaT8uQUvhx8Kk3G"
// `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
const giphyApi = axios.create({
    baseURL: "https://api.giphy.com/v1/gifs",
    params: {
        api_key: apiKey
    }
})

// Lo bueno de axios es que podemos crear una instancia configurada para tener que poner la apikey muchas veces
/* giphyApi.get("/random")
    .then(resp => {
        const { data } = resp.data
        const { url } = data.images.original
        console.log(url);

        const img = document.createElement('img')
        img.src = url

        document.body.append(img)
    }) */

export default giphyApi

