import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  registerForm: FormGroup;
  submitted = false;

  ngOnInit() {
   		this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
  }
  get f() { return this.registerForm.controls; }

	onSubmit() {
	    this.submitted = true;
	    if (this.registerForm.invalid) {
	        return;
	    }
	    console.log("successfully registered!!!");
	}
}
