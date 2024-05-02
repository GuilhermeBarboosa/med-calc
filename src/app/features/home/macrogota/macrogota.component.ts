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
      volume: ['500', [Validators.required]],
      tipoTempo: ['horas', [Validators.required]],
      tempo: ['6', [Validators.required]],
    });
  }

  calcular() {
    if (this.formulario.valid) {
      const volume = this.formulario.get('volume')?.value;
      const tipoTempo = this.formulario.get('tipoTempo')?.value;
      const tempo = this.formulario.get('tempo')?.value;

      let total = this.calcularMacrogota(volume, tipoTempo, tempo);

      let dialogRef = this.dialog.open(DialogGotasComponent, {
        width: '800px',
        data: { volume: volume, tipo: tipoTempo, tempo: tempo, total: total },
      });
    } else {
      this.notifier.showInfo('Preencha todos os campos');
    }
  }
  calcularMacrogota(volume: any, tipoTempo: any, tempo: any) {
    if (tipoTempo === 'horas') {
      return Math.ceil(volume / (tempo * 3));
    } else {
      return Math.ceil((volume * 20) / tempo);
    }
  }
}
