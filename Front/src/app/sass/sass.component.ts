import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sass',
  templateUrl: './sass.component.html',
  styleUrls: ['./sass.component.scss']
})
export class SassComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public irParaRota(rota: string){
    this.router.navigate([rota]);
  }
}
