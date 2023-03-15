import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { DataTablesModule } from 'angular-datatables';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ColaboratorsComponent } from './components/colaborators/colaborators.component';
import { RegisterColaboratorComponent } from './components/register-colaborator/register-colaborator.component';
import { IndexPageComponent } from './components/index-page/index-page.component';
import { EditVerificationComponent } from './components/edit-verification/edit-verification.component';

@NgModule({
  declarations: [
    AppComponent,
    ColaboratorsComponent,
    NavbarComponent,
    RegisterColaboratorComponent,
    IndexPageComponent,
    EditVerificationComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    DataTablesModule,
    NgxMaskDirective, NgxMaskPipe
  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
