import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-dialog-gotas',
  templateUrl: './dialog-gotas.component.html',
  styleUrls: ['./dialog-gotas.component.css'],
})
export class DialogGotasComponent {
  volume = '';
  tipo = '';
  tempo = '';
  total = '';

  constructor(
    public dialogRef: MatDialogRef<DialogGotasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private utilsService: UtilsService
  ) {
    this.volume = data.volume;
    if (this.tipo === 'horas') {
      this.tempo = data.tempo + ' horas';
    } else {
      this.tempo = data.tempo + ' minutos';
    }
    this.tipo = this.utilsService.formatterString(data.tipo);
    this.total = data.total;
  }
  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
