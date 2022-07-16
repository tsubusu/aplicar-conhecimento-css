import { Component, OnInit } from '@angular/core';
import Swiper from 'swiper';

@Component({
  selector: 'app-aula3',
  templateUrl: './aula3.component.html',
  styleUrls: ['./aula3.component.scss']
})
export class Aula3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const swiper = new Swiper('.swiper', {
      spaceBetween: 10,
      slidesPerView: 3,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
    });
  }

}
