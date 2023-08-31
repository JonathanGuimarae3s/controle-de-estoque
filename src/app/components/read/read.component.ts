import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/model/interface/produto';
import { LoginService } from 'src/app/model/service/login.service';
import { ProdutoService } from 'src/app/model/service/produto.service';
@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  products: Produto[] = [];

  ngOnInit(): void {
    this.readProducts();
  }
  constructor(private service: ProdutoService, private fire: LoginService, private router: Router) { }
  readProducts(): void {
    this.service.getProducts().subscribe((products) => {
      this.products = products;

    })
  }
  deletar(id: any) {
    this.service.excluir(id).subscribe(
      () => {
        alert('produto removidad com sucesso')
      },
      (error) => {
        console.log('error ao excluir', error)
      }
    )
    this.readProducts();

  }
  sair() {
    this.fire.logout();
    this.router.navigate(['/login']);
  }



}
