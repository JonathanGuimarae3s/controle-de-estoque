import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadComponent } from './components/read/read.component';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';
import { AuthGuardService } from './model/service/auth-guard.service';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: ReadComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent },
  { path: 'adicionar', component: CreateComponent },
  { path: 'atualizar/:id', component: UpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
