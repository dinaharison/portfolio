import { Component, input } from '@angular/core';
import { IconComponent } from '../../shared/icon.component';
import { SectionHeading } from '../../shared/section-heading.component';
import type { Project } from './portfolio-content';

@Component({
  selector: 'section[portfolioWork]',
  imports: [IconComponent, SectionHeading],
  host: { 'aria-labelledby': 'work-heading' },
  template: `
    <ui-section-heading headingId="work-heading">Selected work</ui-section-heading>
    <div class="project-grid">
      @for (project of projects(); track project.title) {
        <article class="project glass-panel">
          <div class="label">{{ project.label }}</div>
          <h3>{{ project.title }}</h3>
          <p>{{ project.description }}</p>
          <div class="tags">
            @for (technology of project.technologies; track technology) {
              <span>{{ technology }}</span>
            }
          </div>
          <a class="text-link" [href]="project.link.url">
            {{ project.link.label }} <ui-icon name="diagonal"/>
          </a>
        </article>
      }
    </div>
  `,
  styles: `
    .text-link:hover {
      color: white;
    }
    .project-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 18px;
    }
    .project {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 29px;
    }
    .project h3 {
      font-size: 26px;
      margin-top: 15px;
    }
    .project p {
      font-size: 15px;
      line-height: 1.7;
      color: var(--muted);
      margin: 0.7rem 0 1rem;
    }
    .tags {
      display: flex;
      gap: 7px;
      flex-wrap: wrap;
      margin: auto 0 24px;
    }
    .tags span {
      padding: 4px 9px;
      background: #a6bedb0b;
      border: 1px solid #b8bdef20;
      border-radius: 6px;
      font-size: 12px;
      color: #bec6da;
    }
    .text-link {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      color: #bae0ed;
      font-size: 14px;
      font-weight: 550;
    }
    @media (max-width: 700px) {
      .project-grid {
        grid-template-columns: 1fr;
      }
      .project {
        padding: 22px;
      }
    }
  `,
})
export class PortfolioWork {
  readonly projects = input.required<readonly Project[]>();
}
