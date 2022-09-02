import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
})
export class PaisInputComponent implements OnInit {
  @Input() placeholder: string = "";
  @Output() onEnterInput: EventEmitter<string> = new EventEmitter();
  @Output() onDebaunce: EventEmitter<string> = new EventEmitter();

  debauncer: Subject<string> = new Subject();

  termino: string = '';

  ngOnInit() {
    this.debauncer.pipe(debounceTime(300)).subscribe((valor) => {
      this.onDebaunce.emit(valor);
    });
  }

  buscar() {
    this.onEnterInput.emit(this.termino);
  }

  teclaPress() {
    this.debauncer.next(this.termino);
  }
}
