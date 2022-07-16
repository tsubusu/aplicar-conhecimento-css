import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, Subject } from 'rxjs';
import { Transferencia } from '../model/transferencia.model';

@Injectable({
  providedIn: 'root' //
}) 
/*
 O que esse injectable está dizendo? É que na verdade o Angular trabalha muito 
 com o conceito de injeção de dependência, e o que esse injectable está dizendo
  é que posso invocar uma instância dessa classe através do construtor.
 */
export class TransferenciaService {
  private transferencias: Transferencia[];
  private url = 'http.....';
  private $testeSubject = new Subject<Transferencia>();

  constructor(private http: HttpClient) {
    this.transferencias = [];
  }

  public get listaTransferencias(): any[] {
    return this.transferencias;
  }

  public todas(): Observable<Transferencia[]>{
    // return this.http.get<Transferencia[]>(this.url);
    const servidor = [
      {
        valor: 1,
        destino: '2'
      } as Transferencia,
      {
        valor: 3,
        destino: '4'
      } as Transferencia,
    ];
    return of(
      servidor.concat(this.transferencias)
    );
  }

  public testeGet(): Subject<Transferencia> {
    this.reiniciarSubject();
    return this.$testeSubject;
  }

  public adicionar(transferencia: Transferencia): Observable<Transferencia> {
    //this.http.post<Transferencia>(this.url, transferencia);
    this.reiniciarSubject();
    this.hidratar(transferencia);
    this.transferencias.push(transferencia);
    this.$testeSubject.next(transferencia);
    return of(transferencia);
  }

  private hidratar(transferencia): void {
    transferencia.data = new Date();
  }

  private reiniciarSubject(): void {
    if (this.$testeSubject.closed) {
      this.$testeSubject = new Subject<Transferencia>();
    }
  }
}
