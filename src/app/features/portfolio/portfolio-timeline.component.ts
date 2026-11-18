import { Component, input } from '@angular/core';
import { SectionHeading } from '../../shared/section-heading.component';
import type { TimelineEntry } from './portfolio-content';

@Component({
  selector: 'section[portfolioTimeline]',
  imports: [SectionHeading],
  host: { '[attr.aria-labelledby]': 'headingId()' },
  template: `
    <ui-section-heading [headingId]="headingId()">{{ heading() }}</ui-section-heading>
    @for (entry of entries(); track entry.title) {
      <article class="record">
        <span class="date">{{ entry.dates }}</span>
        <div>
          <h3>{{ entry.title }}</h3>
          <div class="org">{{ entry.organization }}</div>
          <p>{{ entry.summary }}</p>
        </div>
      </article>
    }
  `,
})
export class PortfolioTimeline {
  readonly headingId = input.required<string>();
  readonly heading = input.required<string>();
  readonly entries = input.required<readonly TimelineEntry[]>();
}
