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
  multNumber: MultNumbersModel = new MultNumbersModel();
  formNumber: FormGroup;
  multiples: number[];
  multiplesData: any[];
  twoMult35: any[] = [3, 5];
  twoMult37: any[] = [3, 7];
  twoMult57: any[] = [5, 7];
  allMult: any[] = [3, 5, 7];

  constructor(private _numberServie: NumberService) {}

  ngOnInit(): void {
    this.createFormNumber();
  }

  createFormNumber() {
    this.formNumber = new FormGroup({
      number: new FormControl('', [Validators.required]),
    });
  }

  calculateMultiples() {
    let num = this.formNumber.get('number').value;
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

  saveData() {
    this.multNumber.number = this.formNumber.get('number').value;
    this.multNumber.multiples = this.multiples;
    this._numberServie.createMultiple(this.multNumber).subscribe((resp) => {
      console.log(resp);
    });
  }

  cancelar() {
    this.formNumber.reset();
    this.multiplesData = [];
    this.multiples = [];
  }
}
