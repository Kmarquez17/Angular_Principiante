import { NgModule } from '@angular/core';
//primeNG
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { FieldsetModule } from 'primeng/fieldset';

@NgModule({
  exports: [ButtonModule, CardModule, MenubarModule, FieldsetModule],
})
export class PrimeNGModule {}
