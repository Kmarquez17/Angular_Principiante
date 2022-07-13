import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroes.component.html',
})
export class HeroeComponent {
  nombre: string = 'Iroman';
  edad: number = 25;

  get nombreCapitalizado(): string {
    return this.nombre.toUpperCase();
  }

  obtenerNombre(): string {
    return `${this.nombre} - ${this.edad}`;
  }

  cambiarNombre(): void {
    this.nombre = 'Spiderman';
  }

  cambiarEdad(): void {
    this.edad = 24;
  }
}
