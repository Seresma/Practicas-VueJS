import { shallowMount } from "@vue/test-utils"
import Indecision from "@/components/Indecision"

describe("Indecision Component", () => {

    let wrapper
    let clgSpy
    let getAnswerSpy

    // Mockeamos fetch ya que solo existe en el navegador
    // Ejemplo de respuesta de la API
    global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve({
            answer: "yes",
            forced: false,
            image: "https://yesno.wtf/assets/yes/2.gif"
        })
    }))

    beforeEach(() => {
        wrapper = shallowMount(Indecision)
        clgSpy = jest.spyOn(console, "log")
        // vm es la instancia de vue
        getAnswerSpy = jest.spyOn(wrapper.vm, "getAnswer")

        jest.clearAllMocks()
    })

    // SIEMPRE QUE SE HAGAN MODIFICACIONES REACTIVAS (DOM) PONER ASYNC/AWAIT
    test("debe de hacer match con el snapshot", () => {
        expect(wrapper.html()).toMatchSnapshot()
    })

    test("escribir en el input no debe de dispara nada (console.log)", async () => {

        const input = wrapper.find("input")
        await input.setValue("Hola mundo")

        expect(clgSpy).toHaveBeenCalledTimes(1)
        expect(getAnswerSpy).not.toHaveBeenCalled()

    })

    test("escribir el simbolo '?' debe de dispara el getAnswer", async () => {

        const input = wrapper.find("input")
        await input.setValue("Hola mundo?")

        expect(clgSpy).toHaveBeenCalledTimes(1)
        expect(getAnswerSpy).toHaveBeenCalledTimes(1)
    })

    test("pruebas en getAnswer", async () => {
        await wrapper.vm.getAnswer()

        const img = wrapper.find("img")

        expect(img.exists()).toBeTruthy()
        expect(wrapper.vm.img).toBe("https://yesno.wtf/assets/yes/2.gif")
        expect(wrapper.vm.answer).toBe("Sí")

    })

    test("pruebas en getAnswer - fallo en la API", async () => {

        // Simulamos el fallo de la API
        fetch.mockImplementationOnce(() => Promise.reject("API is down"))
        
        await wrapper.vm.getAnswer()

        const img = wrapper.find("img")

        expect(img.exists()).toBeFalsy()
        expect(wrapper.vm.answer).toBe("No se pudo cargar de la API")
    })




})