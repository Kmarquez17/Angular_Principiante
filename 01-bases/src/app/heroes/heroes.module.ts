import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeroeComponent } from './heroe/heroes.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
  declarations: [HeroeComponent, ListadoComponent],
  exports: [HeroeComponent,ListadoComponent],//exports sirve para dar acceso a los componentes fuera de su modulo
  imports: [CommonModule],
})
export class HeroesModule {}
