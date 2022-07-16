import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TransferenciaService } from '../../services/transferencia.service';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {
  valor: number;
  destino: string;
  @Output() aoTransferir = new EventEmitter<any>();

  constructor(private service: TransferenciaService) { }

  ngOnInit(): void {
  }

  public transferir(): void {
    console.log('Solicitada nova transferência');
    console.log('Valor: ', this.valor);
    console.log('Destino: ', this.destino);

    //this.aoTransferir.emit({valor: this.valor, destino: this.destino});
    this.service.adicionar({valor: this.valor, destino: this.destino})
    .pipe(
      take(1)
    )
    .subscribe(
      () => this.limparCampos(),
      error => console.log(error)
    );
  }

  private limparCampos(): void {
    this.valor = null;
    this.destino = null;
  }
}
