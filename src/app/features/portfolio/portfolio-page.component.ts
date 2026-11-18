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
          <section id="contact" class="contact glass-panel">
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
  styles: `
    .skip {
      position: fixed;
      top: -8rem;
      left: 1rem;
      z-index: 20;
      background: #23273a;
      padding: 1rem;
    }
    .skip:focus {
      top: 1rem;
    }
    .email:hover,
    .social a:hover {
      color: white;
    }
    .lower > section {
      padding-top: 55px;
      scroll-margin-top: 12px;
    }
    .email,
    .social a,
    footer a {
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }
    .email {
      color: #bae0ed;
      font-size: 14px;
      font-weight: 550;
    }
    .lower > .contact {
      margin-top: 55px;
      padding: 32px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 24px;
      background:
        radial-gradient(ellipse at 10% 10%, #7256a62a, transparent 80%), #141a2a;
    }
    .contact h2 {
      font-size: 42px;
      letter-spacing: -2px;
      margin: 10px 0;
      font-weight: 550;
    }
    .social,
    .social a {
      display: flex;
      gap: 16px;
    }
    .social a {
      gap: 4px;
      font-size: 14px;
      color: var(--muted);
    }
    footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 12px;
      color: #a4acc4;
      padding: 26px 0 32px;
    }
    @media (max-width: 700px) {
      .lower > section {
        padding-top: 36px;
      }
      .lower > .contact {
        margin-top: 34px;
        padding: 22px;
        align-items: flex-start;
        flex-direction: column;
      }
      .contact h2 {
        font-size: 34px;
      }
      .social {
        gap: 18px;
      }
    }
  `,
})
export class PortfolioPage {
  protected readonly projects = projects;
  protected readonly experience = experience;
  protected readonly education = education;
  protected readonly links = profileLinks;
}
