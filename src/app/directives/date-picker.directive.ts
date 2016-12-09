import { Directive, ElementRef } from '@angular/core';
import * as $ from 'jquery';

@Directive({
  selector: '[appDatePicker]'
})
export class DatePickerDirective {

  constructor(private el: ElementRef) {}
  ngAfterViewInit() {
    $(this.el.nativeElement).daterangepicker();
  }
}
