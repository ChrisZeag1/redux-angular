import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import {PageRouterModule, routerComponents} from './pages.router';

@NgModule({
  imports: [
    PageRouterModule,
    FormsModule,
  ],
  declarations: [routerComponents],
  exports: [PageRouterModule]
})
export class PagesModule { }
