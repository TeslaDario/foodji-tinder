import { Location } from '@angular/common';
import { Directive, HostListener } from '@angular/core';

@Directive({ selector: '[goBack]' })
export class GoBackDirective {
  constructor(private location: Location) {}

  @HostListener('click', ['$event'])
  onClick(event: Event) {
    this.location.back();
  }
}
