import { Component} from '@angular/core';
//import
import { FormGroup, FormControl, Validator } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent {

  forma:FormGroup;

  constructor() {

    this.forma = new FormGroup({
      'nombre' : new FormControl('Fernando'), //Regla Validacion, Regla Validacion Asincrona
      'apellido' : new FormControl(),
      'correo' : new FormControl(),
    })
  }

  guardarCambios(){
    console.log( this.forma.value );
    console.log( this.forma );
  }


}
