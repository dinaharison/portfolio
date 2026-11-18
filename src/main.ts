import { bootstrapApplication } from '@angular/platform-browser';
import { PortfolioPage } from './app/features/portfolio/portfolio-page.component';

bootstrapApplication(PortfolioPage).catch((error: unknown) => console.error(error));
