import { Directive, ElementRef } from '@angular/core';
import * as $ from 'jquery';

@Directive({
  selector: '[appChosen]'
})
export class ChosenDirective {

  constructor(private el: ElementRef) {}
  ngAfterViewInit() {
    $(this.el.nativeElement).chosen({ allow_single_deselect: true });
  }
}
