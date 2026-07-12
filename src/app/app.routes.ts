import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Services } from './pages/services/services';
import { Financing } from './pages/financing/financing';
import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { NotFound } from './pages/not-found/not-found';

export const routes: Routes = [
  { path: '', component: Home, title: 'Ember & Frost HVAC — Heating & Cooling Done Right' },
  { path: 'services', component: Services, title: 'Services — Ember & Frost HVAC' },
  { path: 'financing', component: Financing, title: 'Financing — Ember & Frost HVAC' },
  { path: 'about', component: About, title: 'About Us — Ember & Frost HVAC' },
  { path: 'contact', component: Contact, title: 'Contact — Ember & Frost HVAC' },
  { path: '**', component: NotFound, title: 'Page Not Found — Ember & Frost HVAC' },
];
