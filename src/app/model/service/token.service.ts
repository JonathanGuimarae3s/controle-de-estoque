import { Injectable } from '@angular/core';
import { Token } from '../interface/token';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  enviarToken(usuario: string): void {
    const token: Token = {
      usuario: usuario,
      token: this.gerarTokenAleatorio(),
      expiracao: new Date(Date.now() + 60 * 60 * 1000)

    };
    localStorage.setItem('token', token.token);
    localStorage.setItem('expiracao', token.expiracao.toISOString());

  }



  gerarTokenAleatorio(): string {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
    for (let i = 0; i < 32; i++) {
      const indice = Math.floor(Math.random() * caracteres.length);
      token += caracteres.charAt(indice);
    }
    return token;
  }
}
