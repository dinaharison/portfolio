import type { IconName } from '../../shared/icon.component';

interface Highlight {
  readonly label: string;
  readonly title: string;
  readonly detail: string;
  readonly section: string;
  readonly color: 'violet' | 'aqua' | 'blue';
  readonly icon: IconName;
}

export interface Project {
  readonly label: string;
  readonly title: string;
  readonly description: string;
  readonly technologies: readonly string[];
  readonly link: { readonly url: string; readonly label: string };
}

export interface TimelineEntry {
  readonly dates: string;
  readonly title: string;
  readonly organization: string;
  readonly summary: string;
}

export const profileLinks = {
  github: 'https://github.com/dinaharison',
  linkedin: 'https://linkedin.com/in/dinaharison',
  orcid: 'https://orcid.org/0000-0002-9247-5307',
} as const;

export const highlights = [
  {
    label: 'Current role',
    title: 'Research Engineer',
    detail: 'INRAE · Sophia Antipolis',
    section: 'experience',
    color: 'violet',
    icon: 'case',
  },
  {
    label: 'Education',
    title: 'PhD in Computer Science',
    detail: 'Sorbonne University & University of Fianarantsoa',
    section: 'education',
    color: 'aqua',
    icon: 'cap',
  },
  {
    label: 'Research focus',
    title: 'Modeling & Simulation',
    detail: 'Agent-based models & scientific software',
    section: 'work',
    color: 'blue',
    icon: 'layers',
  },
] as const satisfies readonly Highlight[];

export const projects = [
  {
    label: 'Scientific web application · INRAE',
    title: 'DrosoSim',
    description: 'A web platform for simulating pest management in cherry orchards. Researchers can configure a Python model and explore its results through interactive visualizations.',
    technologies: ['Angular', 'FastAPI', 'D3.js'],
    link: { url: 'https://drososim.fr', label: 'Visit DrosoSim' },
  },
  {
    label: 'Doctoral research · IRD',
    title: 'Coupling simulation models',
    description: 'A GAMA extension for connecting spatial agent-based models. A multilevel simulation of soil processes puts the coupling approach into practice.',
    technologies: ['Java', 'GAMA', 'UML'],
    link: { url: profileLinks.orcid, label: 'Research profile' },
  },
] as const satisfies readonly Project[];

export const experience = [
  {
    dates: 'Mar 2025 — Present',
    title: 'Research Engineer in Computer Science',
    organization: 'INRAE · Sophia Antipolis, France',
    summary: 'Working with researchers to turn a differential-equation model of orchard pests into a web application for running simulations and exploring results.',
  },
  {
    dates: 'Jul 2023 — Nov 2024',
    title: 'Teaching & Research',
    organization: 'University of Fianarantsoa & Inclusiv Academy · Madagascar',
    summary: 'Coordinated training, mentored teams building web and desktop applications, and researched agent-based modeling across disciplines.',
  },
  {
    dates: 'Jan 2018 — Jun 2023',
    title: 'Doctoral Researcher in Computer Modeling',
    organization: 'Institut de Recherche pour le Développement · France & Madagascar',
    summary: 'Designed a spatial approach to coupling heterogeneous simulation models, developed a Java extension for GAMA, and applied it to soil ecosystem processes.',
  },
] as const satisfies readonly TimelineEntry[];

export const education = [
  {
    dates: '2018 — 2023',
    title: 'PhD in Computer Science',
    organization: 'Sorbonne University & University of Fianarantsoa',
    summary: 'Spatial agent-based coupling of mathematical and computational models, applied to soil ecosystem processes.',
  },
  {
    dates: '2015 — 2017',
    title: 'Research Master’s in Computer Science',
    organization: 'École Nationale d’Informatique',
    summary: 'Transformation of a Language Extended Lexicon into UML communication diagrams.',
  },
] as const satisfies readonly TimelineEntry[];
