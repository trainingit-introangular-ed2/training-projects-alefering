import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter-projects-form',
  templateUrl: './filter-projects-form.component.html',
  styles: []
})
export class FilterProjectsFormComponent implements OnInit {
  public filterForm: FormGroup;

  @Output() public filterName: string;

  @Output() public filter = new EventEmitter<string>();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.filterName = '';
    this.buildForm();
  }

  private buildForm() {
    this.filterForm = this.formBuilder.group({
      filterName: ''
    });
  }
}
