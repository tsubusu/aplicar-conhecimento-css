import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-aula1',
  templateUrl: './aula1.component.html',
  styleUrls: ['./aula1.component.scss']
})
export class Aula1Component implements OnInit {
  @ViewChild('som_tecla_pom') techaPow: NodeList;
  
  constructor() { }

  ngOnInit(): void {
  }

  public teclaSom(som: string): void {
    //Javascript seria document.querySelector(‘#som_tecla_pom’).play();
    console.log(this.techaPow)
    let audio = new Audio();
    audio.src = "../../../assets/javascript-aula1/sounds/" + som + ".wav";
    audio.load();
    audio.play();
  }
}
