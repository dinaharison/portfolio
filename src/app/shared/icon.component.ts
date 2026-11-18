import { Component, input } from '@angular/core';

const paths = {
  download: 'M12 3v12m-5-5 5 5 5-5M4 16v4h16v-4',
  arrow: 'M5 12h14m-6-6 6 6-6 6',
  diagonal: 'M6 18 18 6M7 6h11v11',
  pin: 'M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0ZM14 10a2 2 0 1 1-4 0 2 2 0 1 1 4 0Z',
  layers: 'm2 8 10-5 10 5-10 5Zm1 5 9 4.5 9-4.5m-18 5 9 4 9-4',
  cap: 'm2 9 10-5 10 5-10 5Zm4 3v5q6 5 12 0v-5m4-3v7',
  case: 'M4 7h16q1 0 1 2v10q0 1-1 1H4q-1 0-1-1V9q0-2 1-2Zm4 0V5q0-1 1-1h6q1 0 1 1v2M3 12q9 4 18 0m-10 1h2',
  mail: 'M3 5h18v14H3ZM3 6l9 7 9-7',
  menu: 'M4 6h16M4 12h16M4 18h16',
  close: 'm5 5 14 14M19 5 5 19',
  code: 'm8 6-6 6 6 6m8-12 6 6-6 6m-3-15-3 18',
  linkedin: 'M4 9v12M4 3v1m5 17V9h4v2c2-4 8-4 8 3v7m-8 0v-7',
  github: 'M9 20c-4 1-4-2-6-2m12 4v-4c0-1-.4-2-1-2 4-.5 6-2 6-6 0-1-.4-2-1-3 .2-1 .3-2-.2-3-2 0-3 1-4 1a13 13 0 0 0-6 0c-1 0-2-1-4-1-.5 1-.4 2-.2 3-.7 1-1 2-1 3 0 4 2 5.5 6 6-.6.5-.7 1-.7 2v4',
  north: 'M12 20V4m-6 6 6-6 6 6'
} as const;

@Component({
  selector: 'ui-icon',
  template: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path [attr.d]="paths[name()]"/></svg>',
  styles: [':host{display:inline-flex;width:1.1em;height:1.1em;flex:none}svg{width:100%;height:100%}']
})
export class IconComponent {
  name = input.required<keyof typeof paths>();
  protected readonly paths = paths;
}
