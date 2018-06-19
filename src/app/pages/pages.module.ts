import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { BoardComponent } from './board/board.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LoginComponent, BoardComponent]
})
export class PagesModule { }
