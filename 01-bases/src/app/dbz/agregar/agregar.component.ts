import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {
  initialState: Personaje = {
    nombre: '',
    poder: 0,
  };

  @Input() nuevo: Personaje = this.initialState;

  constructor(private dbzService: DbzService) {}

  // @Output() OnNuevoPerson: EventEmitter<Personaje> = new EventEmitter<Personaje>()

  agregar(): void {
    if (this.nuevo.nombre.trim().length === 0) return;

    // this.OnNuevoPerson.emit(this.nuevo)
    this.dbzService.agregarPerson(this.nuevo);

    this.nuevo = this.initialState;
  }
}
