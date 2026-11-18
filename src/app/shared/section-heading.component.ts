import { Component, input } from '@angular/core';

@Component({
  selector: 'ui-section-heading',
  host: { class: 'section-line' },
  template: `
    <i aria-hidden="true"></i>
    <h2 [id]="headingId()"><ng-content /></h2>
    <span aria-hidden="true"></span>
  `,
})
export class SectionHeading {
  readonly headingId = input.required<string>();
}
