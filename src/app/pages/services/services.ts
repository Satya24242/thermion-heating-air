import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

interface ServiceDetail {
  icon: string;
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  features: string[];
}

@Component({
  selector: 'app-services',
  imports: [RouterLink, MatIconModule, MatButtonModule],
  templateUrl: './services.html',
  styleUrl: './services.scss',
})
export class Services {
  protected readonly services: ServiceDetail[] = [
    {
      icon: 'ac_unit',
      image: 'https://images.unsplash.com/photo-1642749776312-aa42ce20c9f5?w=800&q=80&auto=format&fit=crop',
      imageAlt: 'Technicians installing an air conditioning unit on a rooftop',
      title: 'AC repair & installation',
      description: 'Fast, accurate diagnostics and new system installs backed by manufacturer warranties.',
      features: ['Same-day AC repair', 'New system installation', 'Central air & ductless mini-splits', 'Free installation estimates'],
    },
    {
      icon: 'local_fire_department',
      image: 'https://images.unsplash.com/photo-1658758904121-ee49fc5e205c?w=800&q=80&auto=format&fit=crop',
      imageAlt: 'Close-up of a home heating furnace unit',
      title: 'Heating repair & installation',
      description: 'Keep your home warm with expert furnace, heat pump, and boiler service.',
      features: ['Furnace repair & replacement', 'Heat pump installation', 'Boiler service', 'No-heat emergency response'],
    },
    {
      icon: 'air',
      image: 'https://images.unsplash.com/photo-1708705261211-b2a244a811dc?w=800&q=80&auto=format&fit=crop',
      imageAlt: 'Overhead ductwork and ventilation piping',
      title: 'Duct cleaning',
      description: 'Improve airflow and system efficiency with a full duct inspection and cleaning.',
      features: ['Full duct inspection', 'Debris & allergen removal', 'Sealing & insulation check', 'Improved energy efficiency'],
    },
    {
      icon: 'water_drop',
      image: 'https://images.unsplash.com/photo-1436473849883-bb3464c23e93?w=800&q=80&auto=format&fit=crop',
      imageAlt: 'Air purification device for indoor air quality',
      title: 'Indoor air quality',
      description: 'Breathe easier with purification, humidity control, and filtration systems.',
      features: ['Whole-home air purifiers', 'Humidifiers & dehumidifiers', 'High-efficiency filtration', 'Allergen & odor control'],
    },
    {
      icon: 'event_available',
      image: 'https://images.unsplash.com/photo-1660330589827-da8ab7dd3c02?w=800&q=80&auto=format&fit=crop',
      imageAlt: 'Technician performing routine equipment maintenance',
      title: 'Maintenance plans',
      description: 'Seasonal tune-ups that catch problems early and keep warranties valid.',
      features: ['Bi-annual tune-ups', 'Priority scheduling', 'Discounted repairs', 'No breakdown surprises'],
    },
    {
      icon: 'warning',
      image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800&q=80&auto=format&fit=crop',
      imageAlt: 'Technician in hard hat responding to a service call',
      title: 'Emergency service',
      description: '24/7 dispatch when your heating or cooling fails, with no overtime fees.',
      features: ['24/7/365 availability', 'No overtime charges', 'Rapid response times', 'Fully stocked service trucks'],
    },
  ];
}
