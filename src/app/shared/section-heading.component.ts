import { Component, input } from '@angular/core';

@Component({
  selector: 'ui-section-heading',
  template: `
    <i aria-hidden="true"></i>
    <h2 [id]="headingId()"><ng-content /></h2>
    <span aria-hidden="true"></span>
  `,
  styles: `
    h2 {
      font-family: "DM Sans", sans-serif;
      font-weight: 650;
      text-transform: uppercase;
      margin: 0;
      color: #c2c5d6;
      font-size: 11px;
      letter-spacing: 2.2px;
    }
    :host {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      gap: 12px;
    }
    i {
      display: block;
      height: 2px;
      background: linear-gradient(90deg, #ad8bf4, #8adad9);
      border-radius: 2px;
      width: 19px;
    }
    span {
      flex: 1;
      height: 1px;
      background: linear-gradient(90deg, #bfc2ef2e, #bfc2ef05);
      margin-left: 5px;
    }
    @media (max-width: 700px) {
      :host {
        margin-bottom: 15px;
      }
    }
  `,
})
export class SectionHeading {
  readonly headingId = input.required<string>();
}
