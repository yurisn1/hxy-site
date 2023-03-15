import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ColaboratorComponent } from './colaborator/colaborator.component';
import { RegisterColaboratorComponent } from './register-colaborator/register-colaborator.component';

const routes: Routes = [

  { path: 'registros', component: ColaboratorComponent },
  { path: ':name/registrar', component: RegisterColaboratorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
