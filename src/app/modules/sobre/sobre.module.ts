import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from '../shared.module';
import { SobreComponent } from 'src/app/features/home/sobre/sobre.component';
import { SobreRoutes } from './sobre.routing';
@NgModule({
  declarations: [
   SobreComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(SobreRoutes),
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false
    }),
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,
    ToastrModule.forRoot(),
  ],
})
export class SobreModule {}
