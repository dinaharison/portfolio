import { Component, HostListener, signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { IconComponent } from './icons';

@Component({
  selector: 'portfolio-root',
  imports: [IconComponent],
  templateUrl: './portfolio.html'
})
class Portfolio {
  readonly navigation = [
    {id: 'overview', label: 'Overview'}, {id: 'work', label: 'Work'},
    {id: 'experience', label: 'Experience'}, {id: 'contact', label: 'Contact'}
  ];
  readonly jobs = [
    { dates: 'Mar 2025 — Present', title: 'Research Engineer in Computer Science', org: 'INRAE', place: 'Sophia Antipolis, France', summary: 'Working with researchers to turn a differential-equation model of orchard pests into a web application for running simulations and exploring results.' },
    { dates: 'Jul 2023 — Nov 2024', title: 'Teaching & Research', org: 'University of Fianarantsoa & Inclusiv Academy', place: 'Madagascar', summary: 'Coordinated training, mentored teams building web and desktop applications, and researched agent-based modeling across disciplines.' },
    { dates: 'Jan 2018 — Jun 2023', title: 'Doctoral Researcher in Computer Modeling', org: 'Institut de Recherche pour le Développement', place: 'France & Madagascar', summary: 'Designed a spatial approach to coupling heterogeneous simulation models, developed a Java extension for GAMA, and applied it to soil ecosystem processes.' }
  ];
  readonly active = signal('overview');
  readonly menuOpen = signal(false);

  @HostListener('document:keydown.escape')
  closeMenu() {
    if (this.menuOpen()) {
      this.menuOpen.set(false);
      document.getElementById('menu-toggle')?.focus();
    }
  }

  @HostListener('window:scroll')
  updateActive() {
    const current = this.navigation.findLast(item => {
      const section = document.getElementById(item.id);
      return section && section.getBoundingClientRect().top <= 180;
    });
    const atEnd = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 3;
    this.active.set(atEnd ? 'contact' : current?.id ?? 'overview');
  }
}

bootstrapApplication(Portfolio).catch(error => console.error(error));
