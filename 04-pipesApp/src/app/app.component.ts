import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'pipesApp';

  nombre: string = 'Kevin Marquez';
  valor: number = 1000;

  constructor(private primeNGConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primeNGConfig.ripple = true;
  }

  mostrarNombre() {
    console.log(this.nombre);
    console.log(this.valor);
  }
}
