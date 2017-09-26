import { Component} from '@angular/core';
//import
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  forma:FormGroup;

  constructor() {

    this.forma = new FormGroup({
      'nombre' : new FormControl('', Validators.required ), //Regla Validacion, Regla Validacion Asincrona
      'apellido' : new FormControl('', Validators.required ),
      'correo' : new FormControl('', [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
      ]),
    })
  }

  guardarCambios(){
    console.log( this.forma.value );
    console.log( this.forma );
  }


}
