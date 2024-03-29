import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button {
        margin-right: 5px;
        margin-bottom: 5px;
      }
    `,
  ],
})
export class PorRegionComponent {
  paises: Country[] = [];
  regiones: string[] = [
    'EU',
    'EFTA',
    'CARICOM',
    'PA',
    'AU',
    'USAN',
    'EEU',
    'AL',
    'ASEAN',
    'CAIS',
    'CEFTA',
    'NAFTA',
    'SAARC',
  ];
  regionActivada: string = '';

  constructor(private paisService: PaisService) {}

  getClaseCSS(region: string): string {
    return region === this.regionActivada
      ? 'btn btn-primary'
      : 'btn btn-outline-primary';
  }

  activarRegion(region: string) {

    if (region === this.regionActivada) return;

    this.regionActivada = region;

    this.paisService.buscarRegion(region).subscribe(
      (paises) => {
        console.log(paises);
        this.paises = paises;
      },
      (err) => {}
    );
  }
}
