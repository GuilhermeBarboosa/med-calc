import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogGotasComponent } from 'src/app/components/dialog-gotas/dialog-gotas.component';
import { NotifierService } from 'src/app/services/notifier.service';

@Component({
  selector: 'app-microgota',
  templateUrl: './microgota.component.html',
  styleUrls: ['./microgota.component.css'],
})
export class MicrogotaComponent implements OnInit {
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
      tipoTempo: ['', [Validators.required]],
      tempo: ['', [Validators.required]],
    });
  }

  calcular() {
    if (this.formulario.valid) {
      const volume = this.formulario.get('volume')?.value;
      const tipoTempo = this.formulario.get('tipoTempo')?.value;
      const tempo = this.formulario.get('tempo')?.value;

      let total = this.calcularMicrogota(volume, tipoTempo, tempo);

     this.dialog.open(DialogGotasComponent, {
        width: '800px',
        data: { volume: volume, tipo: tipoTempo, tempo: tempo, total: total },
      });
    } else {
      this.notifier.showInfo('Preencha todos os campos');
    }
  }
  calcularMicrogota(volume: any, tipoTempo: any, tempo: any) {
    if (tipoTempo === 'horas') {
      return Math.ceil(volume / tempo);
    } else {
      return Math.ceil((volume * 20) / tempo) * 3;
    }
  }
}
