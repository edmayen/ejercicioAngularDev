import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  formNumber: FormGroup;
  multiples: number[];
  multiplesData: any[];

  constructor() {}

  ngOnInit(): void {
    this.createFormNumber();
    this.formNumber.valueChanges.subscribe((data) => {
      console.log(data);
    });
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
    };
    data = {};
    this.multiples = [];
    this.multiplesData = [];
    for (let i = 1; i < num; i++) {
      console.log('Vuelta: ', i);
      if (i % 3 == 0) {
        data.num = i;
        data.mult3 = true;
        data.mult5 = false;
        data.mult7 = false;
        this.multiplesData.push(data);
        this.multiples.push(data.num);
      } else if (i % 5 == 0) {
        data.num = i;
        data.mult3 = false;
        data.mult5 = true;
        data.mult7 = false;
        this.multiplesData.push(data);
        this.multiples.push(data.num);
      } else if (i % 7 == 0) {
        data.num = i;
        data.mult3 = false;
        data.mult5 = false;
        data.mult7 = true;
        this.multiplesData.push(data);
        this.multiples.push(data.num);
      }
      console.log('Numero: ', i, 'con datos: ', data);
      console.log('Numero: ', i, 'con datos: ', this.multiplesData);
      console.log('Numero: ', i, 'con datos: ', this.multiples);
      data = {};
      console.log('data:', data);
    }
    console.log(this.multiplesData);

    console.log(this.multiples);
  }

  cancelar() {
    this.formNumber.reset();
    this.multiplesData = [];
    this.multiples = [];
  }
}
