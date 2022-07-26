import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent {
  constructor() {}

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>

  buscar() {
    console.log(this.txtBuscar);
    const value = this.txtBuscar.nativeElement.value
    this.txtBuscar.nativeElement.value = ''

    console.log(value)
  }
}
