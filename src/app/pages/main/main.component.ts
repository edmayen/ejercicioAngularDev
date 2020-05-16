import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NumberService } from '@app/services/number.service';
import { MultNumbersModel } from '@app/models/multNumbers.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  //variable utilizada para almacenar los datos en la base
  multNumber: MultNumbersModel = new MultNumbersModel();
  formNumber: FormGroup;
  //variable utilizada para la manipulación de los datos en el html
  multiplesData: any[];
  //variable utilizada para almacenar los multiplos
  multiples: number[];

  constructor(private _numberServie: NumberService) {}

  ngOnInit(): void {
    this.createFormNumber();
  }

  //función que crea el formulario
  createFormNumber() {
    this.formNumber = new FormGroup({
      number: new FormControl('', [Validators.required]),
    });
  }

  //funcion que calcula los multiplos
  calculateMultiples() {
    let num = this.formNumber.get('number').value;
    //creacion de objeto con banderas para la manipulacion del html
    let data: any = {
      num: Number,
      mult3: Boolean,
      mult5: Boolean,
      mult7: Boolean,
      mult35: Boolean,
      mult37: Boolean,
      mult57: Boolean,
      mult357: Boolean,
      isONe: Boolean,
      isTwo: Boolean,
      isThree: Boolean,
    };
    data = {};
    this.multiples = [];
    this.multiplesData = [];
    for (let i = 1; i < num; i++) {
      if (i % 3 == 0 && i % 5 == 0 && i % 7 == 0) {
        data.num = i;
        data.mult3 = true;
        data.mult5 = false;
        data.mult7 = false;
        data.mult35 = false;
        data.mult37 = false;
        data.mult57 = false;
        data.mult357 = true;
        data.isOne = false;
        data.isTwo = false;
        data.isThree = true;
        this.multiplesData.push(data);
        this.multiples.push(data.num);
      } else if (i % 3 == 0 && i % 5 == 0) {
        data.num = i;
        data.mult3 = true;
        data.mult5 = false;
        data.mult7 = false;
        data.mult35 = true;
        data.mult37 = false;
        data.mult57 = false;
        data.mult357 = false;
        data.isOne = false;
        data.isTwo = true;
        data.isThree = false;
        this.multiplesData.push(data);
        this.multiples.push(data.num);
      } else if (i % 3 == 0 && i % 7 == 0) {
        data.num = i;
        data.mult3 = true;
        data.mult5 = false;
        data.mult7 = false;
        data.mult35 = false;
        data.mult37 = true;
        data.mult57 = false;
        data.mult357 = false;
        data.isOne = false;
        data.isTwo = true;
        data.isThree = false;
        this.multiplesData.push(data);
        this.multiples.push(data.num);
      } else if (i % 5 == 0 && i % 7 == 0) {
        data.num = i;
        data.mult3 = false;
        data.mult5 = true;
        data.mult7 = false;
        data.mult35 = false;
        data.mult37 = false;
        data.mult57 = true;
        data.mult357 = false;
        data.isOne = false;
        data.isTwo = true;
        data.isThree = false;
        this.multiplesData.push(data);
        this.multiples.push(data.num);
      } else if (i % 3 == 0) {
        data.num = i;
        data.mult3 = true;
        data.mult5 = false;
        data.mult7 = false;
        data.isOne = true;
        data.isTwo = false;
        data.isThree = false;
        this.multiplesData.push(data);
        this.multiples.push(data.num);
      } else if (i % 5 == 0) {
        data.num = i;
        data.mult3 = false;
        data.mult5 = true;
        data.mult7 = false;
        data.isOne = true;
        data.isTwo = false;
        data.isThree = false;
        this.multiplesData.push(data);
        this.multiples.push(data.num);
      } else if (i % 7 == 0) {
        data.num = i;
        data.mult3 = false;
        data.mult5 = false;
        data.mult7 = true;
        data.isOne = true;
        data.isTwo = false;
        data.isThree = false;
        this.multiplesData.push(data);
        this.multiples.push(data.num);
      }
      data = {};
    }
    this.saveData();
  }

  //función que guarda los resultados en la base de datos
  saveData() {
    this.multNumber.number = this.formNumber.get('number').value;
    this.multNumber.multiples = this.multiples;
    this._numberServie.createMultiple(this.multNumber).subscribe((resp) => {
      console.log(resp);
    });
  }

  //función que limpia los campos para realizar
  //nueva busqueda
  cancelar() {
    this.formNumber.reset();
    this.multiplesData = [];
    this.multiples = [];
  }
}
