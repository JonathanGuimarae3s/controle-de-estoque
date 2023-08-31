import { Component, OnInit, } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // possibilita resgatar algum parametro da url
import { Produto } from 'src/app/model/interface/produto';
import { ProdutoService } from 'src/app/model/service/produto.service';
import { FormBuilder, FormGroup, NgForm, Validator, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  productForm!: FormGroup;

  dados: Produto = {
    id: '',
    nome: '',
    quantidade: '',
  }
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: ProdutoService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {

    this.inicializarForm();
    const id = this.route.snapshot.paramMap.get('id');


    if (id) {
      this.service.getProductById(id).subscribe(
        (response: Produto) => {
          this.dados = response;
        }
      )
    }


  }
  inicializarForm() {
    //pegar todos dados do formulario

    this.productForm = this.formBuilder.group({

      nome: ['', Validators.required],
      quantidae: ['', Validators.required],

    })

  }

  atualizar(form: NgForm) {


    this.service.update(this.dados, this.dados.id).subscribe(

      (reponse: any) => {
        console.log('dados atuaçizado com sucesso');
        alert("produto atualizado");
        this.router.navigate(["/"]);
      }
    ), (error: any) => {
      console.log('error ao atualizar ', error);

    }
  }



}
