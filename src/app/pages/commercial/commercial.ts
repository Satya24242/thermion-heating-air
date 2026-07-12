import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

interface CommercialService {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

interface Industry {
  icon: string;
  label: string;
}

@Component({
  selector: 'app-commercial',
  imports: [RouterLink, MatIconModule, MatButtonModule],
  templateUrl: './commercial.html',
  styleUrl: './commercial.scss',
})
export class Commercial {
  protected readonly industries: Industry[] = [
    { icon: 'science', label: 'Pharma & biotech' },
    { icon: 'memory', label: 'Semiconductor' },
    { icon: 'precision_manufacturing', label: 'Manufacturing' },
    { icon: 'dns', label: 'IT & data centers' },
    { icon: 'storefront', label: 'Retail & offices' },
    { icon: 'warehouse', label: 'Warehousing' },
  ];

  protected readonly services: CommercialService[] = [
    {
      icon: 'science',
      title: 'Cleanroom HVAC & construction',
      description:
        'End-to-end design, build, and maintenance of ISO-classified cleanrooms for pharma, semiconductor, biotech, and food processing facilities.',
      features: [
        'ISO 5–8 cleanroom design & build',
        'HEPA filtration & positive pressure control',
        'Validation & compliance documentation',
        'Ongoing cleanroom maintenance contracts',
      ],
    },
    {
      icon: 'precision_manufacturing',
      title: 'Industrial process cooling',
      description:
        'Dedicated cooling systems for heat-intensive industrial equipment and processes, including induction furnace areas and manufacturing lines.',
      features: [
        'Induction furnace & process area cooling',
        'Manufacturing line temperature control',
        'Server & data room cooling',
        'Chiller sizing, install & maintenance',
      ],
    },
    {
      icon: 'storefront',
      title: 'Commercial HVAC',
      description:
        'Central AC, VRF/VRV systems, and ventilation designed for offices, retail stores, and multi-tenant commercial buildings.',
      features: [
        'VRF/VRV system design & installation',
        'Central plant AC for offices & retail',
        'Zoned climate control',
        'Preventive maintenance contracts (AMC)',
      ],
    },
    {
      icon: 'warehouse',
      title: 'Ductwork & ventilation',
      description:
        'Large-scale ducting, exhaust, and ventilation systems engineered for factories, warehouses, and industrial facilities.',
      features: [
        'Factory & warehouse duct design',
        'Industrial exhaust systems',
        'Fresh air & ventilation upgrades',
        'Duct cleaning & efficiency audits',
      ],
    },
  ];
}
