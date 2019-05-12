import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-project-form',
  templateUrl: './new-project-form.component.html',
  styles: []
})
export class NewProjectFormComponent implements OnInit {
  public newForm: FormGroup;

  @Output() public name: string;

  @Output() public creator = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    //this.buildForm();
    this.name = '';
  }

  private buildForm() {
    const minLength = 2;
    this.newForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(minLength)]]
    });
  }

  public getError(controlName: string): string {
    let error = '';
    const control = this.newForm.get(controlName);
    if (control.touched && control.errors != null) {
      error = JSON.stringify(control.errors);
    }
    return error;
  }
}
