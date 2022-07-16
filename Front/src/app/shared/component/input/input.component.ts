import { Component, Input, OnInit, ContentChild, AfterContentInit } from '@angular/core';
import { NgModel } from '@angular/forms';


@Component({
  selector: 'app-input-container',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit, AfterContentInit {

  @Input() label: string;
  @Input() errorMessage: string;

  input: any;

  @ContentChild(NgModel) model: NgModel

  constructor() { }

  ngAfterContentInit(): void {
    this.input = this.model;
    if (this.input === undefined) {
      throw new Error('Esse componente precisa ser uusado com uma diretiva ngModel');
    }
    console.log(this.input)
  }

  ngOnInit(): void {
  }

}
