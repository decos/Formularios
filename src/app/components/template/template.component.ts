import { Component} from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent {

  constructor() { }

  ngOnInit() {
  }

  guardar(){
    console.log("Formulario posteado");
  }

}
