import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from '../shared.module';
import { MacrogotaRoutes } from './macrogota.routing';
import { MacrogotaComponent } from 'src/app/features/home/macrogota/macrogota.component';
@NgModule({
  declarations: [
   MacrogotaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(MacrogotaRoutes),
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false
    }),
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,
    ToastrModule.forRoot(),
  ],
})
export class MacrogotaModule {}
