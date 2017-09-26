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

        'apellido' : new FormControl('', Validators.required ),
      }),

      'correo' : new FormControl('', [
          Validators.required,
          Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
      ]),
      'pasatiempos' : new FormArray([
          new FormControl('Dormir', Validators.required )
      ])
    })


    //this.forma.setValue( this.usuario );
  }

  agregarPasatiempo(){
    (<FormArray>this.forma.controls['pasatiempos']).push(
      new FormControl('', Validators.required)
    )
  }

  guardarCambios(){
    console.log( this.forma.value );
    console.log( this.forma );

    //Primera forma
    //this.forma.reset( this.usuario );

    //Segunda forma
    this.forma.reset({
      nombrecompleto:{
        nombre:"",
        apellido:""
      },
      correo:""
    });

  }


}
