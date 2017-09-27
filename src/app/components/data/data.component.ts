import { Component} from '@angular/core';
//import
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  forma:FormGroup;

  usuario:Object = {
    nombrecompleto : {
      nombre: "diego",
      apellido: "abanto"
    },
    correo: "dabanto21@gmail.com",
    //pasatiempos: ["Correr", "Dormir", "Comer"]
  }

  constructor() {

    console.log(this.usuario);

    this.forma = new FormGroup({

      'nombrecompleto': new FormGroup({
        'nombre' : new FormControl('', [
            Validators.required,
            Validators.minLength(3)
        ]), //Valor por defecto, Regla Validacion, Regla Validacion Asincrona

        'apellido' : new FormControl('', [
          Validators.required,
          this.noHerrera
        ]),
      }),

      'correo' : new FormControl('', [
          Validators.required,
          Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
      ]),

      'pasatiempos' : new FormArray([
          new FormControl('Dormir', Validators.required )
      ]),

      'password1' : new FormControl('', Validators.required ),

      'password2' : new FormControl()
    })

    //this.forma.setValue( this.usuario );

    this.forma.controls['password2'].setValidators([
      Validators.required,
      this.noIGual.bind( this.forma )
    ])

  }

  agregarPasatiempo(){
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('', Validators.required)
    )
  }

  //VALIDACIONES PERSONALIZADAS
  noHerrera( control:FormControl): { [s:string]:boolean } {

    if( control.value === "herrera" ){
      return{
        noherrera:true
      }
    }
    return null;
  }

  //VALIDACIONES PERSONALIDAZAS
  //COMPARAR PASSWORDS
  noIGual( control:FormControl): { [s:string]:boolean } {
    // console.log(this)
    // this dentro de esta funcion ya es this.forma
    
    //TRUCO
    let forma:any = this;

    //if( control.value !== this.forma.controls['password1'].value ){
    if( control.value !== forma.controls['password1'].value ){
      return{
        noiguales:true
      }
    }
    return null;
  }

  guardarCambios(){
    console.log( this.forma.value );
    console.log( this.forma );

    //Primera forma
    //this.forma.reset( this.usuario );

    //Segunda forma
    /*
    this.forma.reset({
      nombrecompleto:{
        nombre:"",
        apellido:""
      },
      correo:""
    });
    */
  }


}
