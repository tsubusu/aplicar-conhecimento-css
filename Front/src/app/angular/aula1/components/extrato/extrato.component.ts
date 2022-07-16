import { Component, OnDestroy, OnInit } from '@angular/core';
import { TransferenciaService } from '../../services/transferencia.service';
import { tap, take } from 'rxjs/operators';


@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  public transferencias: any[] = [];
  constructor(private service: TransferenciaService) { }

  ngOnInit(): void {
    this.service.todas()
    .pipe(
      take(1),
      tap(x => {
        console.log(x);
        this.transferencias = x
      })
    ).subscribe(); 

    console.log('criando novamente', this.service.testeGet())
    this.service.testeGet()
    .subscribe(x => {
      this.transferencias.push(x);
      console.log(this.transferencias);
    });

    //this.transferencias = this.service.listaTransferencias;
  }

}
