import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon.component';
import { SectionHeading } from '../../shared/section-heading.component';
import { highlights, profileLinks } from './portfolio-content';

@Component({
  selector: 'portfolio-overview',
  imports: [IconComponent, SectionHeading],
  template: `
    <div class="opening">
      <div class="wrap">
        <section class="hero" aria-labelledby="hero-heading">
          <div class="hero-copy">
            <div class="eyebrow"><i></i> Software &amp; R&amp;D Engineer</div>
            <h1 id="hero-heading">Jean Bienvenue<br><span>Dinaharison.</span></h1>
            <p class="intro">I turn scientific models into interactive software. My work brings together research, simulation, and web engineering.</p>
            <div class="hero-actions">
              <a class="button primary" href="#work">Explore my work <ui-icon name="arrow"/></a>
              <a class="button secondary" href="#contact">Get in touch <ui-icon name="diagonal"/></a>
            </div>
            <div class="location">
              <ui-icon name="pin"/> Biot, France <span></span>
              <a [href]="links.github" aria-label="GitHub profile"><ui-icon name="github"/></a>
              <a [href]="links.linkedin" aria-label="LinkedIn profile"><ui-icon name="linkedin"/></a>
            </div>
          </div>
          <div class="art" aria-hidden="true">
            <div class="space-dust"></div>
            <div class="orbit orbit-a"></div>
            <div class="orbit orbit-b"></div>
            <div class="orbit orbit-c"></div>
            <img class="sculpture" src="media/glass-knot.webp" width="950" height="950" alt="" fetchpriority="high">
            <b class="star s1">✧</b><b class="star s2">✦</b><b class="star s3">✦</b>
          </div>
        </section>
        <section class="glance" aria-labelledby="glance-heading">
          <ui-section-heading headingId="glance-heading">At a glance</ui-section-heading>
          <div class="glance-grid">
            @for (highlight of highlights; track highlight.label) {
              <a class="fact" [class]="highlight.color" [href]="'#' + highlight.section">
                <div class="fact-top">
                  <span class="icon-box"><ui-icon [name]="highlight.icon"/></span>
                  <ui-icon name="diagonal"/>
                </div>
                <span class="label">{{ highlight.label }}</span>
                <h3>{{ highlight.title }}</h3>
                <p>{{ highlight.detail }}</p>
              </a>
            }
          </div>
        </section>
      </div>
    </div>
  `,
})
export class PortfolioOverview {
  protected readonly highlights = highlights;
  protected readonly links = profileLinks;
}
