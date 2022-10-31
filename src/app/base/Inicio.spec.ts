import { primeros } from './Inicio'
import { edad } from './Inicio'

describe('Probando inicio', () => {
    it('Debe retornar un string Hola que hace', () => {
        const result = primeros()
        expect(result).toEqual('Hola que hace')
    })

    it('Debe devolver es mayor de edad si el value es mayor o igual a 18', () => {
        const result = edad(18)
        expect(result).toBe('mayor de edad')
    })

    it('Debe devolver es menor de edad si el value es menor que 18', () =>{
        const result = edad(17)
        expect(result).toBe('menor de edad')
    })
})