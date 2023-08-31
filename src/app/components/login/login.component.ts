import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/model/service/login.service';
import { TokenService } from 'src/app/model/service/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {



  email: string = '';
  senha: string = '';
  mensagem: string = '';

  constructor(private service: LoginService, private router: Router, private tokenService: TokenService) { }


  login() {
    if (this.email && this.senha) {
      this.service.login(this.email, this.senha).then(

        result => {
          console.log('Usuario logado', result.user);
          this.tokenService.enviarToken(this.email);
          this.router.navigate(['/']);


        }
      ).catch(
        error => {
          console.log('erro ao fazer login', error);
          this.mensagem = 'erro ao fazer login. verifique suas credenciais'
        }
      )
    } else {
      this.mensagem = 'preencha todos os campos';
    }
  }
}
