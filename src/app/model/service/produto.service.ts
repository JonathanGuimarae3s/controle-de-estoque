import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../interface/produto';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {
  private baseUrl = "http://localhost:3000/produto";
  constructor(private http: HttpClient) {

  }
  getProducts(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.baseUrl);
  }
  excluir(id: number): Observable<any> {

    return this.http.delete(this.baseUrl + '/' + id);

  }
  addProduct(product: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.baseUrl, product);
  }
  update(product: Produto, id: any): Observable<any> {
    return this.http.put(this.baseUrl + '/' + id, product);
  }
  getProductById(id: String) {
    return this.http.get<Produto>(this.baseUrl + '/' + id);
  }
}
