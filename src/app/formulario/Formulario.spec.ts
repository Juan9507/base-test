import { FormBuilder } from '@angular/forms';
import { unFormulario } from './Formulario';

describe('Probando el formulario y validadores', () => {
    const componente = new unFormulario(new FormBuilder);

    it('debe devolver el nombre del input que sea email', () => {
        expect(componente.form.contains('email')).toBeTruthy();
    })

    it('El campo email no debe esta vacio', () => {
        const control = componente.form.get('email')
        control?.setValue('')
        expect(control?.valid).toBeFalsy();
    })

    it('El campo email debe ser un correo valido', () => {
        const control = componente.form.get('email')
        control?.setValue('juan@gmail.com')
        expect(control?.valid).toBeTruthy();
    }) 

    it('debe devolver el nombre del input que sea password', () =>{
        expect(componente.form.contains('password')).toBeTruthy();
    })
    it('el campo password no debe esta vacio', () =>{
        const control1 = componente.form.get("password")
        control1?.setValue('')
        expect(control1?.valid).toBeFalse();
    })
})