import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

interface ServiceSummary {
  icon: string;
  title: string;
  description: string;
}

interface Testimonial {
  quote: string;
  name: string;
  location: string;
}

interface HeroSlide {
  image: string;
  alt: string;
  label: string;
}

@Component({
  selector: 'app-home',
  imports: [RouterLink, MatIconModule, MatButtonModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit, OnDestroy {
  protected readonly serviceAreas = ['Kondapur', 'Gachibowli', 'Madhapur', 'Hitec City', 'Kukatpally', 'Miyapur'];

  protected readonly heroSlides: HeroSlide[] = [
    {
      image: 'https://images.unsplash.com/photo-1642749776312-aa42ce20c9f5?w=1200&q=80&auto=format&fit=crop',
      alt: 'Technicians installing an air conditioning unit on a rooftop',
      label: 'AC Installation',
    },
    {
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=1200&q=80&auto=format&fit=crop',
      alt: 'HVAC technician servicing heating and cooling equipment',
      label: 'Heating & Cooling Repair',
    },
    {
      image: 'https://images.unsplash.com/photo-1771902985060-6133bb4b2eb6?w=1200&q=80&auto=format&fit=crop',
      alt: 'Downtown highrise rooftop with commercial HVAC units',
      label: 'Commercial HVAC',
    },
    {
      image: 'https://images.unsplash.com/photo-1717386255773-1e3037c81788?w=1200&q=80&auto=format&fit=crop',
      alt: 'Industrial machinery and process cooling equipment',
      label: 'Industrial Process Cooling',
    },
    {
      image: 'https://images.unsplash.com/photo-1748000970909-845f4aa144d2?w=1200&q=80&auto=format&fit=crop',
      alt: 'Workers inside a controlled cleanroom facility',
      label: 'Cleanroom HVAC',
    },
    {
      image: 'https://images.unsplash.com/photo-1660330589827-da8ab7dd3c02?w=1200&q=80&auto=format&fit=crop',
      alt: 'Technician performing routine maintenance',
      label: 'Maintenance & Emergency Service',
    },
  ];

  protected readonly activeSlide = signal(0);

  private slideTimer?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.slideTimer = setInterval(() => {
      this.activeSlide.update((i) => (i + 1) % this.heroSlides.length);
    }, 4000);
  }

  ngOnDestroy(): void {
    if (this.slideTimer) {
      clearInterval(this.slideTimer);
    }
  }

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
