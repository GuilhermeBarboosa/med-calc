import { Injectable } from '@angular/core';
import { FormGroup, ValidationErrors } from '@angular/forms';
import * as CryptoJS from 'crypto-js';
import * as saveAs from 'file-saver';
import { NotifierService } from './notifier.service';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor(private toast: NotifierService) {}

  formatarData(data: any) {
    const date = new Date(data);

    // Configura o fuso horário para o de Brasília
    const options = { timeZone: 'America/Sao_Paulo' };
    const dateBrasilia = new Date(date.toLocaleString('en-US', options));
    const day = dateBrasilia.getDate().toString().padStart(2, '0');
    const dayNext = dateBrasilia.getDate() + 1;
    const month = (dateBrasilia.getMonth() + 1).toString().padStart(2, '0');
    const year = dateBrasilia.getFullYear();
    const formatted = `${day}/${month}/${year}`;

    return formatted;
  }
  formatarDataToSQL(data: any) {
    data = data.split('/').reverse().join('/');
    data = new Date(data);
    return data;
  }

  formatterString(string: string) {
    string = string.toLowerCase();
    string = string.replace(/(^\w{1})|(\s+\w{1})/g, (letra) =>
      letra.toUpperCase()
    );

    return string;
  }

  decoteBase64(base64: string) {
    return atob(base64);
  }

  generateSHA256Hash(): string {
    const randomWord = this.generateRandomWord();
    return CryptoJS.MD5(randomWord).toString(CryptoJS.enc.Hex);
  }

  private generateRandomWord(): string {
    const randomWordLength = 10;
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomWord = '';
    for (let i = 0; i < randomWordLength; i++) {
      randomWord += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return randomWord;
  }

  getFormValidationErrors(form: FormGroup) {
    Object.keys(form.controls).forEach((key) => {
      const control = form.get(key);
      if (control) {
        const controlErrors: ValidationErrors | null = control.errors;
        if (controlErrors != null) {
          Object.keys(controlErrors).forEach((keyError) => {
            // console.log(
            //   'Key control: ' +
            //     key +
            //     ', keyError: ' +
            //     keyError +
            //     ', err value: ',
            //   controlErrors[keyError]
            // );

            this.toast.showError(`O campo ${key} está incorreto`);
          });
        }
      }
    });
  }
}
