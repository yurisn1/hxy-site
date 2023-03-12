import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ColaboratorComponent } from './colaborator/colaborator.component';

const routes: Routes = [
  { path: '', component: ColaboratorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
