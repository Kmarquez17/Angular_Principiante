import { Component } from '@angular/core';
import { GifsService } from '../../gifs/service/gifs-service.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  constructor(private gifsService: GifsService) {}

  get historial() {
    return this.gifsService.historial;
  }

  buscar(title: string) {
    this.gifsService.buscarGifs(title);
  }
}
