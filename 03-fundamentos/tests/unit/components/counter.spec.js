import { shallowMount } from "@vue/test-utils"
import Counter from "@/components/Counter"

describe("Counter Component", () => {

    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(Counter)
    })


    // test("Debe de hacer match con el snapshot", () => {

    //     const wrapper = shallowMount(Counter)

    //     expect(wrapper.html()).toMatchSnapshot()

    // })

    test("h2 debe de tener el valor por defecto 'Counter'", () => {

        expect(wrapper.find("h2").exists()).toBeTruthy()

        // Solo encuentra el primero, para varios findAll
        const h2Value = wrapper.find("h2").text()

        expect(h2Value).toBe("Counter")

    })

    test("el valor por defecto debe ser 5 en el p", () => {

        // Se utiliza el data-testid para pruebas en el html
        const pValue = wrapper.find('[data-testid="counter"]').text()

        expect(pValue).toBe("5")

    })

    test("debe incrementar en 1 el valor del contador", async () => {

        // Se utiliza el data-testid para pruebas en el html
        const increaseBtn = wrapper.find("button")

        await increaseBtn.trigger("click")

        const pValue = wrapper.find('[data-testid="counter"]').text()

        expect(pValue).toBe("6")

    })

    test("debe decrementar en 1 el valor del contador", async () => {

        // Se utiliza el data-testid para pruebas en el html
        const decreaseBtn = wrapper.findAll("button")[1]

        await decreaseBtn.trigger("click")

        const pValue = wrapper.find('[data-testid="counter"]').text()

        expect(pValue).toBe("4")

    })

    test("debe establecer por defecto el valor de la prop start", () => {

        const { start } = wrapper.props()

        const pValue = wrapper.find('[data-testid="counter"]').text()

        expect(Number(pValue)).toBe(start)

    })

    test("debe de mostrar la prop title establecida", () => {

        const title = "Hola mundo"
        
        // El segundo parametros es para montarlo con determinadas opciones como las props
        const wrapper = shallowMount(Counter, {
            props: {
                title: title
            }
        })

        expect(wrapper.find("h2").text()).toBe(title)

    })


})