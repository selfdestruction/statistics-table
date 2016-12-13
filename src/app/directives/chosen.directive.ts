import {Directive, ElementRef, Output, EventEmitter} from '@angular/core';
import * as $ from 'jquery';
// import "bootstrap-chosen/dist/chosen.jquery-1.4.2/chosen.jquery.js"


@Directive({
  selector: '[appChosen]'
})
export class ChosenDirective {

  @Output() onChange = new EventEmitter();
  constructor(private el: ElementRef) {}
  ngAfterViewInit() {
    // $(this.el.nativeElement).css('color','red');
    let self = this;
    $(this.el.nativeElement).chosen().change(function(){
      self.onChange.emit({
        value: $(this).val()
      });
    });
  }
}
