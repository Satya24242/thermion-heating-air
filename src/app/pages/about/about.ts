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
    { value: '2026', label: 'Founded' },
    { value: '24/7', label: 'Emergency service' },
    { value: '100%', label: 'Satisfaction guarantee' },
    { value: 'Same-day', label: 'Response time' },
  ];

  protected readonly values: Value[] = [
    { icon: 'schedule', title: 'Fast response', description: 'Real technicians answer the phone, and most calls are resolved same-day.' },
    { icon: 'receipt_long', title: 'Upfront pricing', description: "You'll know the exact cost before any work begins — no surprise fees." },
    { icon: 'verified', title: 'Certified technicians', description: 'Every technician is certified, licensed, and background-checked.' },
    { icon: 'thumb_up', title: 'Satisfaction guaranteed', description: "If you're not happy with the work, we'll make it right." },
  ];

  protected readonly team: TeamMember[] = [
    { name: 'Satya Reddy', role: 'Founder', initials: 'SR' },
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
