import {
  afterNextRender,
  Component,
  DOCUMENT,
  ElementRef,
  inject,
  signal,
  viewChild,
} from '@angular/core';
import { IconComponent } from '../../shared/icon.component';

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
] as const;

type SectionId = (typeof sections)[number]['id'];

@Component({
  selector: 'header[portfolioNavigation]',
  imports: [IconComponent],
  host: {
    '(window:scroll)': 'updateActiveSection()',
    '(document:keydown.escape)': 'dismissMenu()',
  },
  template: `
    <div class="nav-glass">
      <a class="brand" href="#overview" aria-label="Dinaharison, home">
        <span class="monogram" aria-hidden="true">D<span>.</span></span>
        <span>Dinaharison<span class="brand-dot">.</span></span>
      </a>
      <nav id="primary-nav" aria-label="Main navigation" [class.open]="menuOpen()">
        @for (section of sections; track section.id) {
          <a
            [href]="'#' + section.id"
            [class.active]="activeSection() === section.id"
            [attr.aria-current]="activeSection() === section.id ? 'location' : null"
            (click)="menuOpen.set(false)"
          >{{ section.label }}</a>
        }
      </nav>
      <a class="cv-button" href="Jean-Bienvenue-Dinaharison-CV-FR.pdf" download>
        <ui-icon name="download"/> Download CV
      </a>
      <button
        #menuToggle
        id="menu-toggle"
        class="menu-button"
        type="button"
        aria-label="Toggle navigation"
        aria-controls="primary-nav"
        [attr.aria-expanded]="menuOpen()"
        (click)="menuOpen.set(!menuOpen())"
      >
        <ui-icon [name]="menuOpen() ? 'close' : 'menu'"/>
      </button>
    </div>
  `,
})
export class PortfolioNavigation {
  private readonly document = inject(DOCUMENT);
  private readonly menuToggle = viewChild.required<ElementRef<HTMLButtonElement>>('menuToggle');
  protected readonly sections = sections;
  protected readonly activeSection = signal<SectionId>('overview');
  protected readonly menuOpen = signal(false);

  constructor() {
    afterNextRender(() => this.updateActiveSection());
  }

  protected dismissMenu() {
    if (this.menuOpen()) {
      this.menuOpen.set(false);
      this.menuToggle().nativeElement.focus();
    }
  }

  protected updateActiveSection() {
    const viewport = this.document.defaultView;
    if (!viewport) return;

    const atEnd = viewport.innerHeight + viewport.scrollY >= this.document.documentElement.scrollHeight - 3;
    const current = sections.findLast(({ id }) => {
      const section = this.document.getElementById(id);
      return section && section.getBoundingClientRect().top <= 180;
    });
    this.activeSection.set(atEnd ? 'contact' : current?.id ?? 'overview');
  }
}
