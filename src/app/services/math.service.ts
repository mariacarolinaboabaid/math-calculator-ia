import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  private apiKey = environment.geminiApiKey;
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  solvematematicalExpression(expression: string): Observable<any> {
    const payload = {
      contents: [{
        parts: [{
          text: `Solve this expression mathematically: ${expression}. Return only the numeric result.`
        }]
      }],
      generationConfig: {
        temperature: 0.2,
        maxOutputTokens: 256
      }
    };

    const url = `${this.baseUrl}?key=${this.apiKey}`;
    return this.http.post(url, payload);
  }
}
