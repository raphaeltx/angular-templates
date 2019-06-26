import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-froala-validation',
  templateUrl: './froala-validation.component.html',
  styles: []
})
export class FroalaValidationComponent implements OnInit {

  froalaForm: FormGroup;
  editor: any;
  editorOptions = {
    events: {
      'froalaEditor.initialized': (e, editor) => {
        this.editor = editor;
      }
    }
  };

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.froalaForm = this.formBuilder.group({
      descricao: this.formBuilder.control('', [
        Validators.required
      ]),
      idade: this.formBuilder.control('', [
        Validators.required
      ])
    });
  }

  validar() {
    console.log("formData: ", this.froalaForm.value);
  }
}