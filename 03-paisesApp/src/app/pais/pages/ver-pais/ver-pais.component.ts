import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
})
export class VerPaisComponent implements OnInit {
  constructor(
    private activaRoute: ActivatedRoute,
    private PaisService: PaisService
  ) {}

  ngOnInit(): void {
    this.activaRoute.params
      .pipe(switchMap(({ id }) => this.PaisService.getPaisPorAlpha(id)))
      .subscribe((resp) => {});
    // this.activaRoute.params.subscribe(({ id }) => {
    //   this.PaisService.getPaisPorAlpha(id).subscribe((pais) => {
    //     console.log(pais);
    //   });
    // });
  }
}
