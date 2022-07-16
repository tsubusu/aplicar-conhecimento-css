import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-aula1',
  templateUrl: './aula1.component.html',
  styleUrls: ['./aula1.component.scss']
})
export class Aula1Component implements OnInit {
  @ViewChild('menuLateral') menu: ElementRef;
  @ViewChild('container') container;
  constructor() { }

  ngOnInit(): void {
    document.addEventListener('click', this.fecharMenu.bind(this));
  }

  public onMenu(): void {
    //const menu = document.querySelector('.menu-lateral');
    this.menu.nativeElement.classList.toggle('menu-lateral--ativo');
  }

  private fecharMenu(event: any): void {
    if (!event.target.className.toString().includes('menu') &&
        !event.target.parentElement?.className.toString().includes('menu')) { // check click origin
      this.menu.nativeElement.classList.remove('menu-lateral--ativo');
    }
  }
}
