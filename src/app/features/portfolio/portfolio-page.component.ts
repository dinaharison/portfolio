import { Component } from '@angular/core';
import { IconComponent } from '../../shared/icon.component';
import { PortfolioNavigation } from './portfolio-navigation.component';

@Component({
  selector: 'portfolio-root',
  imports: [IconComponent, PortfolioNavigation],
  templateUrl: './portfolio-page.html',
})
export class PortfolioPage {
  readonly jobs = [
    { dates: 'Mar 2025 — Present', title: 'Research Engineer in Computer Science', org: 'INRAE', place: 'Sophia Antipolis, France', summary: 'Working with researchers to turn a differential-equation model of orchard pests into a web application for running simulations and exploring results.' },
    { dates: 'Jul 2023 — Nov 2024', title: 'Teaching & Research', org: 'University of Fianarantsoa & Inclusiv Academy', place: 'Madagascar', summary: 'Coordinated training, mentored teams building web and desktop applications, and researched agent-based modeling across disciplines.' },
    { dates: 'Jan 2018 — Jun 2023', title: 'Doctoral Researcher in Computer Modeling', org: 'Institut de Recherche pour le Développement', place: 'France & Madagascar', summary: 'Designed a spatial approach to coupling heterogeneous simulation models, developed a Java extension for GAMA, and applied it to soil ecosystem processes.' }
  ];
}
