import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogDiluicaoComponent } from 'src/app/components/dialog-diluicao/dialog-diluicao.component';
import { DialogGotasComponent } from 'src/app/components/dialog-gotas/dialog-gotas.component';
import { NotifierService } from 'src/app/services/notifier.service';

@Component({
  selector: 'app-diluicao',
  templateUrl: './diluicao.component.html',
  styleUrls: ['./diluicao.component.css'],
})
export class DiluicaoComponent {
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
      prescricao: ['', [Validators.required]],
      concentracao: ['', [Validators.required]],
      proporcao: ['', [Validators.required]],
      volume: ['', [Validators.required]],
    });
  }

  calcular() {
    if (this.formulario.valid) {
      const prescricao = this.formulario.get('prescricao')?.value;
      const concentracao = this.formulario.get('concentracao')?.value;
      const proporcao = this.formulario.get('proporcao')?.value;
      const volume = this.formulario.get('volume')?.value;

      const totalMgFrasco = volume * concentracao;
      const calculo = (volume * prescricao) / totalMgFrasco;
      const calculoPor2 = (volume * prescricao) / (volume * (concentracao / 2));

      let proporcaoRefactor = '';
      if (proporcao === '1') {
        proporcaoRefactor = '1ml';
      } else {
        proporcaoRefactor = '2ml';
      }

      this.dialog.open(DialogDiluicaoComponent, {
        width: '800px',
        data: {
          prescricao: prescricao,
          concentracao: concentracao,
          volume: volume,
          totalMgFrasco: totalMgFrasco,
          calculo: proporcao === '1' ? calculo.toFixed(2) : calculoPor2.toFixed(2),
          proporcao: proporcaoRefactor,
        },
      });
    } else {
      this.notifier.showInfo('Preencha todos os campos');
    }
  }
  calcularDiluicao(volume: any, tipoTempo: any, tempo: any) {
    if (tipoTempo === 'horas') {
      return Math.ceil(volume / (tempo * 3));
    } else {
      return Math.ceil((volume * 20) / tempo);
    }
  }
}
