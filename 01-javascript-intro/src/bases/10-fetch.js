
const apiKey = "DbteQHGmTJfAFyMjvRaT8uQUvhx8Kk3G"
// https://api.giphy.com/v1/gifs/random?api_key=DbteQHGmTJfAFyMjvRaT8uQUvhx8Kk3G

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
    .then(resp => resp.json())
    .then(({ data }) => {
        const { url } = data.images.original
        console.log(url);

        const img = document.createElement('img')
        img.src = url

        document.body.append(img)
    })
    .catch(err => console.log(err))