import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogGotasComponent } from 'src/app/components/dialog-gotas/dialog-gotas.component';
import { NotifierService } from 'src/app/services/notifier.service';

@Component({
  selector: 'app-macrogota',
  templateUrl: './macrogota.component.html',
  styleUrls: ['./macrogota.component.css'],
})
export class MacrogotaComponent {
  formulario!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private notifier: NotifierService
  ) {}

  ngOnInit() {
    this.createTable();
  }

  async createTable() {
    this.formulario = this.formBuilder.group({
      volume: ['', [Validators.required]],
      hora: ['', [Validators.required]],
      minuto: ['', [Validators.required]],
    });
  }

  calcular() {
    if (this.formulario.valid) {
      const volume = this.formulario.get('volume')?.value;
      const hora = this.formulario.get('hora')?.value;
      const minuto = this.formulario.get('minuto')?.value;
      let total = 0;
      let horasFormatada = '';

      if (hora != 0) {
        let totalMinuto = hora * 60 + minuto;
        total = this.calcularMacrogota(volume, totalMinuto);
        horasFormatada = String(hora) + ':' + String(minuto);
      } else {
        total = this.calcularMacrogota(volume, minuto);
        horasFormatada = '00:' + String(minuto);
      }

      this.dialog.open(DialogGotasComponent, {
        width: '800px',
        data: { volume: volume, total: total.toFixed(2), horasFormatada: horasFormatada },
      });
    } else {
      this.notifier.showInfo('Preencha todos os campos');
    }
  }
  calcularMacrogota(volume: any, totalMinuto: any) {
    return  (volume * 20) / totalMinuto;
  }
}
