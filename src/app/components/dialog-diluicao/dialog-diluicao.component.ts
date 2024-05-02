import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-dialog-diluicao',
  templateUrl: './dialog-diluicao.component.html',
  styleUrls: ['./dialog-diluicao.component.css'],
})
export class DialogDiluicaoComponent {
  concentracao: any;
  volume: any;
  totalMgFrasco: any;
  calculo: any;
  proporcao: any;
  prescricao: any;

  constructor(
    public dialogRef: MatDialogRef<DialogDiluicaoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private utilsService: UtilsService
  ) {
    this.concentracao = data.concentracao;
    this.volume = data.volume;
    this.totalMgFrasco = data.totalMgFrasco;
    this.prescricao = data.prescricao;
    this.calculo = data.calculo;
    this.proporcao = data.proporcao;
  }
  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
