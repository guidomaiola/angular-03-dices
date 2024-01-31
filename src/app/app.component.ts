import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  leftDice = '../assets/img/dice1.png';
  rightDice = '../assets/img/dice1.png';

  num1 = 1;
  num2 = 1;
  win = false;

  rollDices(): void {

    this.num1 = Math.round((Math.random() * 5) + 1);
    this.num2 = Math.round((Math.random() * 5) + 1);

    this.leftDice = '../assets/img/dice' + this.num1 + '.png';
    this.rightDice = '../assets/img/dice' + this.num2 + '.png';

    this.win = this.num1 === this.num2;

    console.log(this.win);
  }

}
