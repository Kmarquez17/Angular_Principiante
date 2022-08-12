import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../service/gifs-service.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!:ElementRef<HTMLInputElement>

  constructor(private gifsService: GifsService ) {}

  buscar() {
    const value = this.txtBuscar.nativeElement.value
    if(value.trim().length === 0) return;

    this.txtBuscar.nativeElement.value = ''
    this.gifsService.buscarGifs(value)

  }
}
