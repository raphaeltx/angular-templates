import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { DivsBootstrapRowsComponent } from './components/divs-bootstrap-rows/divs-bootstrap-rows.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './components/input/input.component';
import { FroalaValidationComponent } from './components/froala-validation/froala-validation.component';
import { MainFormComponent } from './components/form/main-form.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { FormValidationComponent } from './components/form-validation/form-validation.component';
import { TestRestapiComponent } from './components/test-restapi/test-restapi.component';
import { HttpClientModule } from '@angular/common/http';
import { CardsComponent } from './components/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    DivsBootstrapRowsComponent,
    FormComponent,
    InputComponent,
    FroalaValidationComponent,
    MainFormComponent,
    FormValidationComponent,
    TestRestapiComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FroalaEditorModule,
    ReactiveFormsModule,
    FroalaViewModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
