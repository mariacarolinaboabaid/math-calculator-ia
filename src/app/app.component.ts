import { Component } from '@angular/core';
import { MathService } from './services/math.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  mathExpression: string = '';
  result: string = '';
  disabledReset: boolean = true;

  constructor(private mathService: MathService) {}

  calculateExpression() {
    this.result = "Calculating..."
    this.mathService.solvematematicalExpression(this.mathExpression)
    .subscribe({
      next: (response) => {
        const resposta = response.candidates[0].content.parts[0].text;
        this.result = resposta.trim();
        this.disabledReset = false;
      },
      error: (error) => {
        console.error('Erro na chamada da API', error);
        this.result = error;
        this.disabledReset = false;
      }
    });
  }

  reset(){
    this.result = '';
    this.mathExpression = '';
    this.disabledReset = true;
  }

}
