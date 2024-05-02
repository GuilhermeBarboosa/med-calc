import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-dialog-diluicao',
  templateUrl: './dialog-diluicao.component.html',
  styleUrls: ['./dialog-diluicao.component.css'],
})
export class DialogDiluicaoComponent {
  prescricao = ''
  totalCalc = ''
  volume = ''
  diluente = '';

  constructor(
    public dialogRef: MatDialogRef<DialogDiluicaoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private utilsService: UtilsService
  ) {
    this.prescricao = data.prescicao;
    this.totalCalc = data.totalCalc;
    this.volume = data.volume;
    this.diluente = data.diluente;
  }
  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
