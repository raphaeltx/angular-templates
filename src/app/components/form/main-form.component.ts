import { Component, OnInit } from '@angular/core';
import { ItemForm } from './item-form.model';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styles: []
})
export class MainFormComponent implements OnInit {

  formItems: ItemForm[] = [
    {
      name: 'name',
      label: 'Nome',
      placeHolder: 'Nome',
      xs: 12,
      ms: 6,
    },
    {
      name: 'age',
      label: 'Idade',
      placeHolder: 'Idade',
      xs: 12,
      ms: 6,
    },
    {
      name: 'email',
      label: 'E-mail',
      placeHolder: 'E-mail',
      xs: 12,
      ms: 6,
    },
    {
      name: 'phone',
      label: 'Telefone',
      placeHolder: 'Telefone',
      xs: 12,
      ms: 6,
    }
  ];

  constructor() { }

  ngOnInit() { }
}
