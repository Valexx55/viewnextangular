import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imc',
  templateUrl: './imc.component.html',
  styleUrls: ['./imc.component.css']
})
export class ImcComponent implements OnInit {

  peso!: number;
  estatura!: number;
  imc!: number;

  constructor() { }

  ngOnInit(): void {
  }

  calcularIMC():void {
    this.imc = this.peso / (this.estatura* this.estatura);
  }
}
