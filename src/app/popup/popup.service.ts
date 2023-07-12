import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PopupSevice {
  constructor(private http: HttpClient) {}
  getCategory(): Observable<string[]> {
    return this.http.get<string[]>(
      'https://fakestoreapi.com/products/categories'
    );
  }
}
