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

  formatarDataEdital(data: any) {
    data = data.split('T')[0].split('-').reverse().join('/');
    return data;
  }

  formatterString(string: string) {
    string = string.toLowerCase();
    string = string.replace(/(^\w{1})|(\s+\w{1})/g, (letra) =>
      letra.toUpperCase()
    );

    return string;
  }

  validarCPF(cpf: string): boolean {
    cpf = cpf.replace(/[^\d]+/g, '');

    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
      return false;
    }

    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = 11 - (soma % 11);
    let digitoVerificador1 = resto === 10 || resto === 11 ? 0 : resto;

    if (digitoVerificador1 !== parseInt(cpf.charAt(9))) {
      return false;
    }

    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = 11 - (soma % 11);
    let digitoVerificador2 = resto === 10 || resto === 11 ? 0 : resto;

    if (digitoVerificador2 !== parseInt(cpf.charAt(10))) {
      return false;
    }

    return true;
  }

  decoteBase64(base64: string) {
    return atob(base64);
  }

  ordenarAlfabetico(array: any[]) {
    const compararEdital = (a: { edital: string }, b: { edital: string }) => {
      const editalA = a.edital.toLowerCase();
      const editalB = b.edital.toLowerCase();

      if (editalA < editalB) {
        return -1;
      }
      if (editalA > editalB) {
        return 1;
      }
      return 0;
    };

    return array.slice().sort(compararEdital);
  }

  saveArquivo(data: Blob) {
    const contentDispositionHeader: string | null = 'file';
    let hash = this.generateSHA256Hash();
    const filenameRegex: RegExp = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
    const matches: RegExpMatchArray | null = contentDispositionHeader
      ? contentDispositionHeader.match(filenameRegex)
      : null;
    const filename: string =
      matches && matches.length > 1 ? matches[1] : `${hash}.pdf`;

    saveAs(data, filename);
  }


  saveArquivoRar(data: Blob) {
    const contentDispositionHeader: string | null = 'file';
    let hash = this.generateSHA256Hash();
    const filenameRegex: RegExp = /filename[^;=\n]*=((['"]).*?\2|[^;\n]*)/;
    const matches: RegExpMatchArray | null = contentDispositionHeader
      ? contentDispositionHeader.match(filenameRegex)
      : null;
    const filename: string =
      matches && matches.length > 1 ? matches[1] : `${hash}.rar`;

    saveAs(data, filename);
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

  generateColors() {
    var o = Math.round,
      r = Math.random,
      s = 255;

    var blue = o(r() * s);
    var green = o(r() * 5);
    var red = o(r() * 5);

    return 'rgba(' + red + ',' + green + ',' + blue + ',' + 0.75 + ')';
  }

  generateColorsRandom() {
    var r = Math.floor(Math.random() * 256); // Valor de vermelho entre 0 e 255
    var g = Math.floor(Math.random() * 256); // Valor de verde entre 0 e 255
    var b = Math.floor(Math.random() * 256); // Valor de azul entre 0 e 255

    return 'rgba(' + r + ',' + g + ',' + b + ',' + 0.75 + ')';
  }
}
