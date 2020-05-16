import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MultNumbersModel } from '../models/multNumbers.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class NumberService {
  private url = 'https://angular-html-cfe81.firebaseio.com';

  constructor(private http: HttpClient) {}

  createMultiple(multiples: MultNumbersModel) {
    return this.http.post(`${this.url}/Multiples.json`, multiples).pipe(
      map((resp: any) => {
        multiples.id = resp.name;
        return multiples;
      })
    );
  }
}
