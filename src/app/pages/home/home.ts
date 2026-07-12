import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

interface ServiceSummary {
  icon: string;
  title: string;
  description: string;
}

interface Value {
  icon: string;
  text: string;
}

interface Testimonial {
  quote: string;
  name: string;
  location: string;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink, MatIconModule, MatButtonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected readonly serviceAreas = ['Denver', 'Aurora', 'Lakewood', 'Boulder', 'Littleton', 'Englewood'];

  protected readonly services: ServiceSummary[] = [
    { icon: 'ac_unit', title: 'AC repair & install', description: 'Fast diagnostics and new system installs.' },
    { icon: 'local_fire_department', title: 'Heating repair & install', description: 'Furnaces, heat pumps, and boilers.' },
    { icon: 'air', title: 'Duct cleaning', description: 'Improve airflow and system efficiency.' },
    { icon: 'water_drop', title: 'Indoor air quality', description: 'Purifiers, humidifiers, and filtration.' },
    { icon: 'event_available', title: 'Maintenance plans', description: 'Seasonal tune-ups with priority booking.' },
    { icon: 'warning', title: 'Emergency service', description: '24/7 dispatch with no overtime fees.' },
  ];

  protected readonly values: Value[] = [
    { icon: 'check_circle', text: 'Same-day appointments available' },
    { icon: 'check_circle', text: 'Upfront, flat-rate pricing' },
    { icon: 'check_circle', text: 'NATE-certified technicians' },
    { icon: 'check_circle', text: '100% satisfaction guarantee' },
  ];

  protected readonly testimonials: Testimonial[] = [
    {
      quote: 'Tech arrived within 2 hours and fixed our AC same day. Fair price, no upsell.',
      name: 'Maria G.',
      location: 'Aurora',
    },
    {
      quote: 'Replaced our furnace before the cold snap hit. Clean install, clear pricing.',
      name: 'Devon K.',
      location: 'Littleton',
    },
    {
      quote: "Maintenance plan has paid for itself. They catch issues before they're expensive.",
      name: 'Priya S.',
      location: 'Boulder',
    },
  ];
}
