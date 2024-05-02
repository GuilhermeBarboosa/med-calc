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
  horasFormatada = '';
  total = '';

  constructor(
    public dialogRef: MatDialogRef<DialogGotasComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private utilsService: UtilsService
  ) {
    this.volume = data.volume;
    this.horasFormatada = data.horasFormatada;
    this.total = data.total;
  }
  ngOnInit(): void {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
