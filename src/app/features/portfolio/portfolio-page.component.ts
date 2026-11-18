import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon.component';
import { education, experience, profileLinks, projects } from './portfolio-content';
import { PortfolioNavigation } from './portfolio-navigation.component';
import { PortfolioOverview } from './portfolio-overview.component';
import { PortfolioTimeline } from './portfolio-timeline.component';
import { PortfolioWork } from './portfolio-work.component';

@Component({
  selector: 'portfolio-root',
  imports: [IconComponent, PortfolioNavigation, PortfolioOverview, PortfolioTimeline, PortfolioWork],
  template: `
    <a class="skip" href="#main">Skip to content</a>
    <div id="overview">
      <header portfolioNavigation class="wrap"></header>
      <main id="main">
        <portfolio-overview />
        <div class="wrap lower">
          <section portfolioWork id="work" [projects]="projects"></section>
          <section portfolioTimeline id="experience" headingId="experience-heading"
            heading="Experience" [entries]="experience"></section>
          <section portfolioTimeline id="education" headingId="education-heading"
            heading="Education" [entries]="education"></section>
          <section id="contact" class="contact">
            <div>
              <div class="eyebrow"><i></i> Contact</div>
              <h2>Get in touch.</h2>
              <a class="email" href="mailto:dinaharison.jb@gmail.com">
                dinaharison.jb&#64;gmail.com <ui-icon name="diagonal"/>
              </a>
            </div>
            <div class="social">
              <a [href]="links.github">GitHub <ui-icon name="diagonal"/></a>
              <a [href]="links.linkedin">LinkedIn <ui-icon name="diagonal"/></a>
              <a [href]="links.orcid">ORCID <ui-icon name="diagonal"/></a>
            </div>
          </section>
        </div>
      </main>
      <footer class="wrap">
        Jean Bienvenue Dinaharison <a href="#overview">Back to top <ui-icon name="north"/></a>
      </footer>
    </div>
  `,
})
export class PortfolioPage {
  protected readonly projects = projects;
  protected readonly experience = experience;
  protected readonly education = education;
  protected readonly links = profileLinks;
}
