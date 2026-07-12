import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

interface ServiceDetail {
  icon: string;
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
      title: 'AC repair & installation',
      description: 'Fast, accurate diagnostics and new system installs backed by manufacturer warranties.',
      features: ['Same-day AC repair', 'New system installation', 'Central air & ductless mini-splits', 'Free installation estimates'],
    },
    {
      icon: 'local_fire_department',
      title: 'Heating repair & installation',
      description: 'Keep your home warm with expert furnace, heat pump, and boiler service.',
      features: ['Furnace repair & replacement', 'Heat pump installation', 'Boiler service', 'No-heat emergency response'],
    },
    {
      icon: 'air',
      title: 'Duct cleaning',
      description: 'Improve airflow and system efficiency with a full duct inspection and cleaning.',
      features: ['Full duct inspection', 'Debris & allergen removal', 'Sealing & insulation check', 'Improved energy efficiency'],
    },
    {
      icon: 'water_drop',
      title: 'Indoor air quality',
      description: 'Breathe easier with purification, humidity control, and filtration systems.',
      features: ['Whole-home air purifiers', 'Humidifiers & dehumidifiers', 'High-efficiency filtration', 'Allergen & odor control'],
    },
    {
      icon: 'event_available',
      title: 'Maintenance plans',
      description: 'Seasonal tune-ups that catch problems early and keep warranties valid.',
      features: ['Bi-annual tune-ups', 'Priority scheduling', 'Discounted repairs', 'No breakdown surprises'],
    },
    {
      icon: 'warning',
      title: 'Emergency service',
      description: '24/7 dispatch when your heating or cooling fails, with no overtime fees.',
      features: ['24/7/365 availability', 'No overtime charges', 'Rapid response times', 'Fully stocked service trucks'],
    },
  ];
}
