import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

interface Plan {
  name: string;
  rate: string;
  term: string;
  description: string;
  featured: boolean;
}

interface Faq {
  question: string;
  answer: string;
}

@Component({
  selector: 'app-financing',
  imports: [RouterLink, MatIconModule, MatButtonModule, MatExpansionModule],
  templateUrl: './financing.html',
  styleUrl: './financing.scss',
})
export class Financing {
  protected readonly plans: Plan[] = [
    {
      name: '0% for 12 months',
      rate: '0% APR',
      term: '12-month term',
      description: 'Best for smaller repairs and tune-ups. No interest if paid in full within 12 months.',
      featured: false,
    },
    {
      name: 'Comfort Plan',
      rate: '5.9% APR',
      term: '60-month term',
      description: 'Our most popular option for full system replacements. Fixed monthly payments.',
      featured: true,
    },
    {
      name: 'Extended Comfort',
      rate: '8.9% APR',
      term: '120-month term',
      description: 'Lowest monthly payment for premium high-efficiency systems.',
      featured: false,
    },
  ];

  protected readonly faqs: Faq[] = [
    {
      question: 'Do I need good credit to qualify?',
      answer:
        'Most homeowners qualify. We work with multiple lending partners to find an option that fits your credit profile, and pre-qualifying does not affect your credit score.',
    },
    {
      question: 'How long does approval take?',
      answer: 'Most applications are approved within minutes, and financing can be arranged the same day as your service appointment.',
    },
    {
      question: 'Can I pay off my financing early?',
      answer: 'Yes, all of our financing plans allow early payoff with no prepayment penalties.',
    },
    {
      question: 'What can financing be used for?',
      answer: 'Financing can cover new system installations, major repairs, duct work, and indoor air quality upgrades.',
    },
  ];
}
