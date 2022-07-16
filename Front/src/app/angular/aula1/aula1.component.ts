import { Component, OnInit, OnDestroy } from '@angular/core';
import { TransferenciaService } from './services/transferencia.service';

@Component({
  selector: 'app-aula1',
  templateUrl: './aula1.component.html',
  styleUrls: ['./aula1.component.scss']
})
export class Aula1Component implements OnInit, OnDestroy {
  transferencias: any[] = [];
  constructor(private service: TransferenciaService) { }
  ngOnDestroy(): void {
    console.log('destruindo')
    this.service.testeGet().unsubscribe();
  }

  ngOnInit(): void {
  }

  public transferir(valor: any): void {
    console.log(valor);
    /*
      Através deste operador, que é o spread operator, eu estou desconstruindo esse objeto valor.
      Ou seja, se estão chegando duas propriedades, que são valor e destino, ao invés de pegar o
      objeto e passar para dentro de transferencia estou pegando apenas as propriedades internas 
      dele e passando para dentro do objeto transferencia.
       Além disso, vou dizer também que a data vai ser, por enquanto, só um new Date().
       Então, ao transferir vou passar tudo que veio desse $event e essa data lá para dentro
       de transferencia.

    const transferencia = {...valor, data: new Date()};
    this.transferencias.push(transferencia);
     */
    this.service.adicionar(valor);
  }
}
