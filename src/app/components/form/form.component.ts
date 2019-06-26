import { Component, OnInit, Input } from '@angular/core';
import { ItemForm } from './item-form.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styles: []
})
export class FormComponent implements OnInit {

  @Input() formItems: ItemForm[];
  formGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.prepareForm();
  }

  prepareForm() {
    let formGroupSettings = {};

    this.formItems.forEach(formItem => {
      formGroupSettings[formItem.name] = this.formBuilder.control('');
    });

    this.formGroup = this.formBuilder.group(formGroupSettings);
  }
}
