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
        <article class="project">
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
})
export class PortfolioWork {
  readonly projects = input.required<readonly Project[]>();
}
