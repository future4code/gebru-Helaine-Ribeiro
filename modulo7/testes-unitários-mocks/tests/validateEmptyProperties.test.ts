import { validateEmptyProperties } from "../src/validateEmptyProperties"

describe.skip("Testando validadeEmptyProperties", ()=>{
    test("Objeto com string vazia", ()=>{
        const input = {
            name: ""
        }

       const output = validateEmptyProperties(input)
        // output = { isValid: false, errors: [{key:"name", value: ""}]}

        // expect(output).toEqual({ isValid: false, errors: [{key:"name", value: ""}]})
        expect(output.isValid).toBe(false)
        expect(output.errors).toContainEqual({key:"name", value: ""})
    })

    test("Objeto com numero = 0", ()=> {
        const input = { age: 0}

        const output = validateEmptyProperties(input)

        expect(output.isValid).toBe(false)
        expect(output.errors).toContainEqual({key:"age", value: 0})
    })

    test("Objeto com name undifined", ()=> {
        const input = { name: undefined}

        const output = validateEmptyProperties(input)

        expect(output.isValid).toBe(false)
        expect(output.errors).toContainEqual({key:"name", value: undefined})
    })

    test("Objeto com name null", ()=> {
        const input = { name: null}

        const output = validateEmptyProperties(input)

        expect(output.isValid).toBe(false)
        expect(output.errors).toContainEqual({key:"name", value: null})
    })

    test("Objeto com 4 propriedades vazias ", ()=> {
        const input = { 
            name: null,
            age: 0,
            email: "",
            id: undefined,
            birthDate: "20/05/1989"
        }

        const output = validateEmptyProperties(input)

        expect(output.isValid).toBe(false)
        expect(output.errors.length).toBe(4)
        expect(output.errors[0]).toEqual({key:"name", value: null})
    })

    test("Objeto com todas as propriedades preenchidas ", ()=> {
        const input = { 
            name: "rodrigo",
            age: 33,
            email: "email",
            id: "undefined",
            birthDate: "20/05/1989"
        }

        const output = validateEmptyProperties(input)

        expect(output.isValid).toBe(true)
        expect(output.errors.length).toBe(0)
        expect(output.errors[0]).not.toBeDefined()
        expect(output.errors[0]).toBeUndefined()
    })
  
   
})


 