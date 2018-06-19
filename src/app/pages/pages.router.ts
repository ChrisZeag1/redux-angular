// Angular
import { NgModule } from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';
// Pages
import { LoginComponent } from './login/login.component';
import { BoardComponent } from './board/board.component';

export const router: Routes = [
  {path: '' , component: BoardComponent, canActivate: [] },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule]
})

export class PageRouterModule{}

export const routerComponents = [
  LoginComponent,
  BoardComponent
];