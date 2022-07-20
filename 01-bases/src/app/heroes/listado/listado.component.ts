import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent  {

  heroes: string[] = ['Spiderman', 'Iroman', 'Hulk', 'Kevin Marquez', 'Marcelo Miegda']
  heroeDelete: string = '';

  borrarHeroe(): void {
    this.heroeDelete = this.heroes.shift() || '';
  }
}
