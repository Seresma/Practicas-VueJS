import giphyApi from "./bases/11-axios";


const getImage = async () => {

    // Se hace un try catch porque el backend puede fallar
    try {

        // Entre parentesis para asociar
        const { data } = (await giphyApi.get("/random")).data
        const { url } = data.images.original
        console.log(url);

        const img = document.createElement('img')
        img.src = url

        document.body.append(img)

    } catch (error) {
        console.log(`Error en la peticion: ${error}`)
        throw error
    }




}




getImage()