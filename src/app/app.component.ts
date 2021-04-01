import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'Dados';
  dadoLeft = '../assets/img/dice1.png';
  dadoRight = '../assets/img/dice3.png';
  num1: number = 1;
  num2: number = 2;
  tiros: number = 0;

  tirarDados(){
    this.tiros ++;
    this.num1 = Math.round(Math.random() * 5) + 1;
    this.num2 = Math.round(Math.random() * 5) + 1;
    // console.log(this.num1);
    // console.log(this.num2);

    this.dadoLeft = `../assets/img/dice${this.num1}.png`;
    this.dadoRight = `../assets/img/dice${this.num2}.png`;
  }

  reStart(){
    this.dadoLeft = '../assets/img/dice4.png';
    this.dadoRight = '../assets/img/dice2.png';
    this.num1 = 3;
    this.num2 = 5;
    this.tiros = 0;
  }


}
