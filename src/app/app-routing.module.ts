import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ColaboratorsComponent } from './components/colaborators/colaborators.component';
import { IndexPageComponent } from './components/index-page/index-page.component';
import { RegisterColaboratorComponent } from './components/register-colaborator/register-colaborator.component';
import { EditVerificationComponent } from './components/edit-verification/edit-verification.component';

const routes: Routes = [
  { path: '', component: IndexPageComponent },
  { path: 'registros', component: ColaboratorsComponent },
  { path: ':name/registrar', component: RegisterColaboratorComponent },
  { path: ':name/validar/:id', component: RegisterColaboratorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
