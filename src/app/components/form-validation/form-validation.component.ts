import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styles: []
})
export class FormValidationComponent implements OnInit {

  formValidation: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formValidation = this.formBuilder.group({
      code: this.formBuilder.control('', [
        Validators.required
      ])
    }
      // { validator: this.customValidator }
    )
  }

  // static customValidator(group: AbstractControl): Promise<{ [key: string]: boolean }> {
  //   const code = group.get('code');

  //   return new Promise((resolve, reject) => {
  //     this.validatorCodeForm(code.value).then(result => {
  //       console.log("result: ", result);

  //       if (result) {
  //         resolve(undefined);
  //       } else {
  //         resolve({ codeNotFound: true });
  //       }
  //     });
  //   })
  // }

  validatorCodeForm(code: string): Promise<boolean> {

    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (code == "71939360") {
          resolve(true);
        } else {
          resolve(false);
        }
      }, 3000);
    });
  }

  validar() {

  }
}