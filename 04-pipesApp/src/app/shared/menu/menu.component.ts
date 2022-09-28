import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  // styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];

  constructor() {}

  ngOnInit() {
    this.items = [
      {
        label: 'Pipes de Angular',
        icon: 'pi pi-desktop',
        items: [
          {
            label: 'Texto y Fechas',
            icon: 'pi pi-align-left',
            routerLink: '/',
          },
          {
            label: 'Números',
            icon: 'pi pi-dollar',
            routerLink: 'numeros',
          },
          {
            label: 'No comumes',
            icon: 'pi pi-globe',
            routerLink: 'no-comunes',
          },
        ],
      },
      {
        label: 'Pipes personalizados',
        icon: 'pi pi-cog',
      },
    ];
  }
}
