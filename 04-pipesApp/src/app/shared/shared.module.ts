import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrimeNGModule } from '../prime-ng/prime-ng.module';

import { MenuComponent } from './menu/menu.component';

@NgModule({
  declarations: [MenuComponent],
  exports: [MenuComponent],
  imports: [CommonModule, PrimeNGModule],
})
export class SharedModule {}
