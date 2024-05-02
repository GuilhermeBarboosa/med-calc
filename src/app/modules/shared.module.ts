import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonPrimaryComponent } from '../components/button-primary/button-primary.component';
import { ButtonSecundaryComponent } from '../components/button-secundary/button-secundary.component';
import { DialogDiluicaoComponent } from '../components/dialog-diluicao/dialog-diluicao.component';
import { DialogGotasComponent } from '../components/dialog-gotas/dialog-gotas.component';

import { MaterialModule } from './material.module';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, RouterModule, MaterialModule],
  exports: [
    ButtonPrimaryComponent,
    ButtonSecundaryComponent,
    DialogDiluicaoComponent,
    DialogGotasComponent,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
  ],
  declarations: [
    ButtonPrimaryComponent,
    ButtonSecundaryComponent,
    DialogGotasComponent,
    DialogDiluicaoComponent,
  ],
  providers: [],
})
export class SharedModule {}
