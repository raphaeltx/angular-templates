import { Component, OnInit, Input, ContentChild } from '@angular/core';
import { NgModel, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styles: []
})
export class InputComponent implements OnInit {

  @Input() label: string;
  @Input() errorMessage: string;
  @ContentChild(NgModel) model: NgModel;
  @ContentChild(FormControlName) control: FormControlName;
  @Input() isHtmlEditor: boolean = false
  @Input() idElement: string;
  input: any;

  constructor() { }

  ngOnInit() { }


  ngAfterContentInit() {
    this.input = this.model || this.control;

    if (this.input === undefined) {
      throw new Error('Esse componente precisa ser usado com uma diretiva ngModel ou formControlName!')
    }
  }

  hasSuccess(): boolean {
    let hasSuccess = this.input.valid && (this.input.dirty || this.input.touched);

    if (hasSuccess) {
      this.markValidInput();
    }

    return hasSuccess;
  }

  markValidInput() {
    let classList = document.getElementById(this.idElement).children[0].classList;

    if (this.isHtmlEditor) {
      if (!classList.contains("is-froala-editor-valid")) {
        if (classList.contains("is-froala-editor-invalid")) {
          classList.remove("is-froala-editor-invalid");
        }

        classList.add("is-froala-editor-valid");
      }
    } else {
      if (!classList.contains("is-valid")) {
        if (classList.contains("is-invalid")) {
          classList.remove("is-invalid");
        }

        classList.add("is-valid");
      }
    }
  }

  markInvalidInput() {
    let classList = document.getElementById(this.idElement).children[0].classList;

    if (this.isHtmlEditor) {

      if (!classList.contains("is-froala-editor-invalid")) {
        if (classList.contains("is-froala-editor-valid")) {
          classList.remove("is-froala-editor-valid");
        }

        classList.add("is-froala-editor-invalid");
      }
    } else {
      // let classList = document.getElementById(this.idElement).classList;

      if (!classList.contains("is-invalid")) {
        if (classList.contains("is-valid")) {
          classList.remove("is-valid");
        }

        classList.add("is-invalid");
      }
    }
  }

  hasError(): boolean {
    let hasError = this.input.invalid && (this.input.dirty || this.input.touched);

    if (hasError) {
      this.markInvalidInput();
    }

    return hasError;
  }
}
