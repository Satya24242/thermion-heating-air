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
  protected readonly serviceAreas = ['Kondapur', 'Gachibowli', 'Madhapur', 'Hitec City', 'Kukatpally', 'Miyapur'];

  protected readonly services: ServiceSummary[] = [
    { icon: 'ac_unit', title: 'AC repair & install', description: 'Fast diagnostics and new system installs.' },
    { icon: 'local_fire_department', title: 'Heating repair & install', description: 'Furnaces, heat pumps, and boilers.' },
    { icon: 'air', title: 'Duct cleaning', description: 'Improve airflow and system efficiency.' },
    { icon: 'water_drop', title: 'Indoor air quality', description: 'Purifiers, humidifiers, and filtration.' },
    { icon: 'event_available', title: 'Maintenance plans', description: 'Seasonal tune-ups with priority booking.' },
    { icon: 'warning', title: 'Emergency service', description: '24/7 dispatch with no overtime fees.' },
    { icon: 'science', title: 'Cleanroom HVAC', description: 'ISO-classified cleanroom design, build & maintenance.' },
    { icon: 'precision_manufacturing', title: 'Industrial process cooling', description: 'Induction furnace areas, manufacturing lines, server rooms.' },
    { icon: 'storefront', title: 'Commercial HVAC', description: 'VRF/VRV systems for offices, retail & commercial spaces.' },
  ];

  protected readonly values: Value[] = [
    { icon: 'check_circle', text: 'Same-day appointments available' },
    { icon: 'check_circle', text: 'Upfront, flat-rate pricing' },
    { icon: 'check_circle', text: 'Certified, background-checked technicians' },
    { icon: 'check_circle', text: '100% satisfaction guarantee' },
  ];

  protected readonly testimonials: Testimonial[] = [
    {
      quote: 'Technician arrived within 2 hours and fixed our AC same day. Fair price, no upsell.',
      name: 'Anitha R.',
      location: 'Gachibowli',
    },
    {
      quote: 'Installed a new split AC before the summer heat hit. Clean work, clear pricing.',
      name: 'Vikram S.',
      location: 'Madhapur',
    },
    {
      quote: "Maintenance plan has paid for itself. They catch issues before they're expensive.",
      name: 'Priya N.',
      location: 'Kukatpally',
    },
  ];
}
