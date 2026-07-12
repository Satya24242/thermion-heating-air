import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

interface Stat {
  value: string;
  label: string;
}

interface Value {
  icon: string;
  title: string;
  description: string;
}

interface TeamMember {
  name: string;
  role: string;
  initials: string;
}

interface Testimonial {
  quote: string;
  name: string;
  location: string;
}

@Component({
  selector: 'app-about',
  imports: [RouterLink, MatIconModule, MatButtonModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {
  protected readonly stats: Stat[] = [
    { value: '2011', label: 'Founded' },
    { value: '18,000+', label: 'Jobs completed' },
    { value: '1,240+', label: '5-star reviews' },
    { value: '24/7', label: 'Emergency service' },
  ];

  protected readonly values: Value[] = [
    { icon: 'schedule', title: 'Fast response', description: 'Real technicians answer the phone, and most calls are resolved same-day.' },
    { icon: 'receipt_long', title: 'Upfront pricing', description: "You'll know the exact cost before any work begins — no surprise fees." },
    { icon: 'verified', title: 'Certified technicians', description: 'Every technician is NATE-certified, licensed, and background-checked.' },
    { icon: 'thumb_up', title: 'Satisfaction guaranteed', description: "If you're not happy with the work, we'll make it right." },
  ];

  protected readonly team: TeamMember[] = [
    { name: 'Robert Ellison', role: 'Founder & Master Technician', initials: 'RE' },
    { name: 'Denise Alvarado', role: 'Operations Manager', initials: 'DA' },
    { name: 'Marcus Fields', role: 'Lead Install Technician', initials: 'MF' },
    { name: 'Kim Tran', role: 'Customer Success Lead', initials: 'KT' },
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
