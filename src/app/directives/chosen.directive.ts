import { Directive, ElementRef } from '@angular/core';
import * as $ from 'jquery';
// import "bootstrap-chosen/dist/chosen.jquery-1.4.2/chosen.jquery.js"


@Directive({
  selector: '[appChosen]'
})
export class ChosenDirective {

  constructor(private el: ElementRef) {}
  ngAfterViewInit() {
    $(this.el.nativeElement).css('color','red');
    $(this.el.nativeElement).chosen();
  }
}
