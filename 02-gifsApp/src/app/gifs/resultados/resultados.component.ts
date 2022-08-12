import { Component } from '@angular/core';
import { GifsService } from '../service/gifs-service.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
})
export class ResultadosComponent  {

  constructor( private gifsService: GifsService) { }

  get getResultados() {
    return this.gifsService.resultados
  }


}
