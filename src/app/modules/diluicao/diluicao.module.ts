import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from '../shared.module';
import { DiluicaoRoutes } from './diluicao.routing';
import { DiluicaoComponent } from 'src/app/features/home/diluicao/diluicao.component';
@NgModule({
  declarations: [
   DiluicaoComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(DiluicaoRoutes),
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false
    }),
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,
    ToastrModule.forRoot(),
  ],
})
export class DiluicaoModule {}
