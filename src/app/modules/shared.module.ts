import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonPrimaryComponent } from '../components/button-primary/button-primary.component';
import { ButtonSecundaryComponent } from '../components/button-secundary/button-secundary.component';
import { DialogDiluicaoComponent } from '../components/dialog-diluicao/dialog-diluicao.component';
import { DialogGotasComponent } from '../components/dialog-gotas/dialog-gotas.component';
import { DialogComponent } from '../components/dialog/dialog.component';
import { FooterComponent } from '../components/footer/footer.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { SpinnerComponent } from '../components/spinner/spinner.component';
import { MaterialModule } from './material.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    SidebarComponent,
    DialogComponent,
    NavbarComponent,
    FooterComponent,
    ButtonPrimaryComponent,
    ButtonSecundaryComponent,
    DialogDiluicaoComponent,
    DialogGotasComponent,
    SpinnerComponent,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule
  ],
  declarations: [
    SidebarComponent,
    DialogComponent,
    NavbarComponent,
    SpinnerComponent,
    FooterComponent,
    ButtonPrimaryComponent,
    ButtonSecundaryComponent,
    DialogGotasComponent,
    DialogDiluicaoComponent
  ],
  providers: [],
})
export class SharedModule {}
