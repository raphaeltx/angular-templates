import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private elementRef: ElementRef) {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'rgb(156, 156, 156)';
  }
}
