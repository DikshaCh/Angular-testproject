import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tempate-forms',
  templateUrl: './tempate-forms.component.html',
  styleUrls: ['./tempate-forms.component.css']
})
export class TempateFormsComponent implements OnInit {
  model: any = {};

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.model)
  }

}
