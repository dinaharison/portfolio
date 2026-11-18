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
  styles: `
    .date {
      font-family: "DM Sans", sans-serif;
      font-weight: 650;
      color: #adb2cc;
      letter-spacing: 1px;
      text-transform: none;
      padding: 4px 0;
      font-size: 12px;
    }
    .record p {
      font-size: 15px;
      line-height: 1.7;
      color: var(--muted);
      margin: 0.7rem 0 1rem;
      max-width: 710px;
      margin-bottom: 0;
    }
    .record {
      display: grid;
      grid-template-columns: 25% 1fr;
      padding: 23px 0;
      border-bottom: 1px solid var(--line);
    }
    .org {
      color: #beaee9;
      font-size: 14px;
      margin: 6px 0;
    }
    @media (max-width: 700px) {
      .record {
        display: block;
        padding: 18px 0;
      }
      .date {
        display: block;
        margin-bottom: 6px;
      }
      .record h3 {
        font-size: 19px;
      }
    }
  `,
})
export class PortfolioTimeline {
  readonly headingId = input.required<string>();
  readonly heading = input.required<string>();
  readonly entries = input.required<readonly TimelineEntry[]>();
}
