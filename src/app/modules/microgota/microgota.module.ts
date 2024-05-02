import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { NgxMaskModule } from 'ngx-mask';
import { ToastrModule } from 'ngx-toastr';
import { MicrogotaComponent } from 'src/app/features/home/microgota/microgota.component';
import { SharedModule } from '../shared.module';
import { MicrogotaRoutes } from './microgota.routing';
@NgModule({
  declarations: [
   MicrogotaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(MicrogotaRoutes),
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false
    }),
    HttpClientModule,
    MatPaginatorModule,
    MatTableModule,
    ToastrModule.forRoot(),
  ],
})
export class MicrogotaModule {}
