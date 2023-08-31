import { Component } from '@angular/core';
import { ProdutoService } from 'src/app/model/service/produto.service';
import { Produto } from 'src/app/model/interface/produto';
import { NgForm } from '@angular/forms';//agrupar todos os dados vindo do form
import { Router } from '@angular/router';//utilizar rotas dentro do component
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {
  dados: Produto = {
    id: '',
    nome: '',
    quantidade: '',
  }
  constructor(private service: ProdutoService, private router: Router){}
  submit(form: NgForm): void {
    const produto = form.value;
    this.service.addProduct(produto).subscribe(
      (response) => {
        console.log('produto cadastrado com sucesso', response);
        alert("nova produto cadastrada");
        this.router.navigate(['/']);
      },
      (error: any) => {

        console.log('error ao inserir', error)
      }
    )



  }

}
