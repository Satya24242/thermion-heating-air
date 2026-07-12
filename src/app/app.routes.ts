import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Services } from './pages/services/services';
import { Commercial } from './pages/commercial/commercial';
import { Financing } from './pages/financing/financing';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  { path: '', component: Home, title: 'Thermion Heating & Air — Heating & Cooling Done Right' },
  { path: 'services', component: Services, title: 'Services — Thermion Heating & Air' },
  { path: 'commercial', component: Commercial, title: 'Commercial & Industrial — Thermion Heating & Air' },
  { path: 'financing', component: Financing, title: 'Financing — Thermion Heating & Air' },
  { path: 'about', component: About, title: 'About Us — Thermion Heating & Air' },
  { path: 'contact', component: Contact, title: 'Contact — Thermion Heating & Air' },
  { path: '**', component: NotFound, title: 'Page Not Found — Thermion Heating & Air' },
];
