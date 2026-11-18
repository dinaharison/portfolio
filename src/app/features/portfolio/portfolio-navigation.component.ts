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
  styles: `
    :host {
      padding-top: 25px;
      position: relative;
      z-index: 5;
    }
    .nav-glass {
      min-height: 67px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      padding: 10px 20px;
      border: 1px solid var(--line);
      border-radius: 16px;
      background: linear-gradient(105deg, #23253a9c, #151b2c8c);
      box-shadow:
        inset 0 1px #ffffff05,
        0 8px 35px #00000016;
      backdrop-filter: blur(18px);
    }
    .brand {
      display: flex;
      align-items: center;
      gap: 11px;
      font-size: 19px;
      font-weight: 670;
      letter-spacing: -0.7px;
    }
    .brand-dot {
      color: #ab9af9;
    }
    .monogram {
      width: 36px;
      height: 36px;
      border: 1px solid #a695ec75;
      border-radius: 11px;
      background: linear-gradient(140deg, #43395877, #1e283d99);
      display: grid;
      place-content: center;
      grid-auto-flow: column;
      align-items: baseline;
      font-size: 25px;
      font-weight: 750;
      letter-spacing: -3px;
      color: #d9d4ff;
      padding-right: 3px;
    }
    .monogram span {
      color: #9ee4ea;
    }
    nav {
      display: flex;
      gap: 7px;
    }
    nav a,
    .cv-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      font-weight: 550;
    }
    nav a {
      font-size: 13px;
      padding: 9px 15px;
      border-radius: 8px;
      color: #b9bed0;
    }
    nav a:hover,
    nav a.active {
      background: #b3b4ed0e;
      color: #fff;
    }
    nav a.active {
      box-shadow: inset 0 0 0 1px #caf0ff13;
    }
    .cv-button {
      font-size: 13px;
      padding: 10px 14px;
      border: 1px solid #c2c5ee36;
      background: #e7e6ff07;
      border-radius: 9px;
    }
    .menu-button {
      display: none;
    }
    .cv-button:hover {
      transform: translateY(-2px);
    }
    @media (max-width: 960px) {
      nav {
        gap: 0;
      }
      nav a {
        padding: 9px 11px;
      }
    }
    @media (max-width: 700px) {
      :host {
        padding-top: 15px;
      }
      .nav-glass {
        min-height: 57px;
        padding: 8px 12px;
        gap: 10px;
        border-radius: 13px;
      }
      .brand {
        font-size: 16px;
        gap: 8px;
        margin-right: auto;
      }
      .monogram {
        width: 30px;
        height: 30px;
        border-radius: 8px;
        font-size: 22px;
      }
      .cv-button {
        font-size: 11px;
        padding: 8px 10px;
        gap: 6px;
      }
      .menu-button {
        display: grid;
        place-items: center;
        background: transparent;
        color: var(--text);
        border: 0;
        padding: 8px;
        font-size: 18px;
      }
      nav {
        display: none;
        position: absolute;
        top: calc(100% + 8px);
        right: 0;
        left: 0;
        z-index: 5;
        background: #191d31;
        border: 1px solid var(--line);
        padding: 8px;
        border-radius: 12px;
      }
      nav.open {
        display: grid;
      }
      nav a {
        justify-content: flex-start;
        padding: 10px 12px;
      }
    }
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
