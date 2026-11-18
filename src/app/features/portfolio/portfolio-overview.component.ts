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
              <a class="fact glass-panel" [class]="highlight.color" [href]="'#' + highlight.section">
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
  styles: `
    :host {
      display: block;
    }
    .opening {
      position: relative;
      isolation: isolate;
      background:
        radial-gradient(ellipse at 75% 37%, #21204577, transparent 37%),
        radial-gradient(ellipse at 97% 62%, #11394558, transparent 37%),
        radial-gradient(ellipse at 19% 63%, #2a193d60, transparent 54%);
      overflow: clip;
    }
    .opening::before {
      content: "";
      position: absolute;
      z-index: -1;
      inset: 0;
      opacity: 0.46;
      background-image:
        radial-gradient(1px 1px at 8% 25%, #a4adb9 50%, transparent),
        radial-gradient(1px 1px at 87% 71%, #9f89e9 60%, transparent),
        radial-gradient(1px 1px at 60% 18%, #a6cdd1 50%, transparent);
      background-size:
        287px 243px,
        347px 301px,
        437px 313px;
      pointer-events: none;
    }
    .button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      font-weight: 550;
      padding: 12px 19px;
      font-size: 14px;
      min-height: 44px;
      border-radius: 9px;
      transition:
        transform 0.18s,
        background 0.18s;
    }
    .hero {
      position: relative;
      isolation: isolate;
      display: flex;
      align-items: center;
      min-height: clamp(455px, 37.5vw, 558px);
      padding: 54px 0 46px;
    }
    .hero-copy {
      width: 56%;
      position: relative;
      z-index: 2;
    }
    h1 {
      font-size: clamp(54px, 5.55vw, 84px);
      font-weight: 570;
      letter-spacing: -0.064em;
      line-height: 1.01;
      margin: 21px 0;
    }
    h1 span {
      color: #b8b0fa;
      background: linear-gradient(100deg, #c7a7ff 4%, #a2b4ff 51%, #88e3e2);
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    .intro {
      font-size: clamp(15px, 1.22vw, 18px);
      line-height: 1.65;
      color: var(--muted);
      max-width: 460px;
      margin: 0;
    }
    .hero-actions {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-top: 25px;
    }
    .button:hover {
      transform: translateY(-2px);
    }
    .primary {
      background: linear-gradient(110deg, #bda7fa, #a6b6f7 54%, #9adbdc);
      color: #141627;
      border: 1px solid #ffffff36;
      box-shadow: 0 4px 22px #9b82d91a;
    }
    .secondary {
      border: 1px solid #b4bcdf35;
      background: #d4c8ff08;
    }
    .location {
      display: flex;
      align-items: center;
      gap: 7px;
      margin-top: 23px;
      font-size: 12px;
      color: #a6adc3;
    }
    .location > ui-icon {
      color: #a9abc7;
    }
    .location > span {
      display: inline-block;
      height: 13px;
      width: 1px;
      background: #9da1ca48;
      margin: 0 7px;
    }
    .location a {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 25px;
      height: 25px;
      font-size: 15px;
    }
    .location a:hover {
      color: white;
    }
    .art {
      width: 50%;
      aspect-ratio: 1.26;
      position: absolute;
      z-index: 0;
      right: -1%;
      top: 50%;
      transform: translateY(-50%);
      pointer-events: none;
      display: grid;
      place-items: center;
      mix-blend-mode: screen;
    }
    .sculpture {
      width: 77%;
      height: auto;
      position: relative;
      mix-blend-mode: screen;
      mask-image: radial-gradient(ellipse, #000 57%, transparent 75%);
      filter: drop-shadow(0 0 12px #9072ff16);
    }
    .orbit {
      position: absolute;
      width: 96%;
      height: 56%;
      border: 1px solid #b2a4f92c;
      border-radius: 50%;
      transform: rotate(-21deg);
    }
    .orbit-b {
      width: 92%;
      height: 57%;
      transform: rotate(26deg);
      border-color: #9ecdd91f;
    }
    .orbit-c {
      width: 86%;
      height: 82%;
      transform: rotate(-46deg);
      border-style: dashed;
      border-color: #7298b320;
      opacity: 0.7;
    }
    .orbit-a::after,
    .orbit-b::after {
      content: "";
      position: absolute;
      left: 12%;
      top: 14.5%;
      width: 5px;
      height: 5px;
      background: #cab3f7;
      border-radius: 50%;
      box-shadow: 0 0 11px #cdb4ff;
    }
    .orbit-b::after {
      left: 90%;
      top: 79%;
      background: #93d7db;
    }
    .space-dust {
      position: absolute;
      inset: 0;
      background:
        radial-gradient(1px 1px at 23% 16%, #fff 50%, transparent),
        radial-gradient(1px 1px at 82% 25%, #8ec7f5 90%, transparent),
        radial-gradient(1.5px 1.5px at 89% 67%, #bac9f5 80%, transparent);
      background-size:
        113px 143px,
        159px 187px,
        209px 137px;
      opacity: 0.65;
    }
    .star {
      position: absolute;
      color: #c3bcf8;
      line-height: 1;
      font-weight: 400;
    }
    .s1 {
      top: 16%;
      right: 13%;
      font-size: 22px;
    }
    .s2 {
      left: 11%;
      top: 64%;
      font-size: 10px;
      color: #99d7e3;
    }
    .s3 {
      right: 19%;
      bottom: 12%;
      font-size: 8px;
    }
    .glance {
      padding: 8px 0 20px;
    }
    .glance-grid {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 16px;
    }
    .fact {
      --accent: #c6a8ff;
      --rgb: 175, 129, 243;
      display: block;
      padding: 20px 23px 21px;
      position: relative;
      overflow: hidden;
      background:
        radial-gradient(
          ellipse at top left,
          rgba(var(--rgb), 0.1),
          transparent 82%
        ),
        linear-gradient(120deg, #abb3dc0a, #aebae305);
      transition:
        border-color 0.2s,
        transform 0.2s;
    }
    .fact:hover {
      transform: translateY(-3px);
      border-color: rgba(var(--rgb), 0.45);
    }
    .aqua {
      --accent: #91dfd9;
      --rgb: 104, 210, 191;
    }
    .blue {
      --accent: #a0b9fa;
      --rgb: 144, 159, 243;
    }
    .fact-top {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      margin-bottom: 17px;
    }
    .fact-top > ui-icon {
      font-size: 11px;
      color: #868ba4;
    }
    .icon-box {
      display: grid;
      place-items: center;
      width: 36px;
      height: 36px;
      border-radius: 10px;
      color: var(--accent);
      background: rgba(var(--rgb), 0.1);
      border: 1px solid rgba(var(--rgb), 0.23);
      font-size: 17px;
    }
    .fact h3 {
      font-size: clamp(17px, 1.6vw, 23px);
      margin: 8px 0 5px;
    }
    .fact p {
      margin: 0;
      color: var(--muted);
      font-size: 12.5px;
      line-height: 1.55;
    }
    @media (min-width: 1600px) {
      .hero {
        min-height: 560px;
      }
    }
    @media (max-width: 960px) {
      .hero {
        min-height: 445px;
      }
      .hero-copy {
        width: 59%;
      }
      .intro {
        max-width: 405px;
      }
      .art {
        right: -4%;
        width: 49%;
      }
      .fact {
        padding: 18px;
      }
      .glance-grid {
        gap: 12px;
      }
    }
    @media (max-width: 700px) {
      .hero {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        padding: 38px 0 10px;
        min-height: auto;
      }
      .hero-copy {
        width: 100%;
      }
      h1 {
        font-size: clamp(49px, 10.5vw, 70px);
        margin: 16px 0;
      }
      .intro {
        font-size: 15px;
        max-width: 410px;
      }
      .hero-actions {
        margin-top: 19px;
      }
      .button {
        font-size: 13px;
        padding: 11px 16px;
      }
      .location {
        margin-top: 13px;
      }
      .art {
        position: relative;
        inset: auto;
        transform: none;
        width: min(100%, 390px);
        aspect-ratio: 1.55;
        align-self: center;
        margin: 1px 0 8px;
      }
      .sculpture {
        width: 68%;
      }
      .glance-grid {
        grid-template-columns: 1fr;
      }
      .fact {
        padding: 18px 18px 18px 74px;
        min-height: 102px;
      }
      .fact-top {
        display: contents;
      }
      .fact-top > ui-icon {
        position: absolute;
        right: 14px;
        top: 14px;
      }
      .icon-box {
        position: absolute;
        left: 19px;
        top: 19px;
      }
      .fact h3 {
        font-size: 20px;
      }
      .glance {
        padding: 0;
      }
    }
  `,
})
export class PortfolioOverview {
  protected readonly highlights = highlights;
  protected readonly links = profileLinks;
}
