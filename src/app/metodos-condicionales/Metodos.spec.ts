import { MetodosCondicionales } from './Metodos-etc'

describe('Probando metodos con condicionales', () => {
    const condicionales = new MetodosCondicionales()

    it('debe estar en el rago menor a 5 y mayor a 2', () => {
        expect(condicionales.rango(4)).toBe('esta en el rango')
    })

    it('debe retorna No esta en el rango al mandarle un numero igual o mayor 5', () => {
        expect(condicionales.rango(7)).toBe('No esta en el rango')
    })

    it('debe devolver fizzbuzz si el arg es divisible entre 3 y 5', () => {
        expect(condicionales.fizzBizz(15)).toBe('fizzbuzz')
    })

    it('debe devolver buzz si el arg es divisible entre 5', () => {
        expect(condicionales.fizzBizz(10)).toBe('buzz')
    })

    it('debe devolver buzz si el arg es divisible entre 3', () => {
        expect(condicionales.fizzBizz(9)).toBe('fizz')
    })

    it('debe devolver el numero si el arg es no es divisibles entre 3 o 5', () => {
        expect(condicionales.fizzBizz(4)).toBe(4)
    })

})