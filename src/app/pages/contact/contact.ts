import { Component, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface ContactChannel {
  icon: string;
  title: string;
  value: string;
  href: string;
}

@Component({
  selector: 'app-contact',
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  private readonly fb = new FormBuilder();

  protected readonly submitted = signal(false);

  protected readonly serviceOptions = [
    'AC repair or installation',
    'Heating repair or installation',
    'Duct cleaning',
    'Indoor air quality',
    'Maintenance plan',
    'Emergency service',
    'Not sure yet',
  ];

  protected readonly serviceAreas = ['Kondapur', 'Gachibowli', 'Madhapur', 'Hitec City', 'Kukatpally', 'Miyapur'];

  protected readonly channels: ContactChannel[] = [
    { icon: 'call', title: 'Call Us', value: '+91 96295 99253', href: 'tel:+919629599253' },
    { icon: 'mail', title: 'Email Us', value: 'satyareddy608@gmail.com', href: 'mailto:satyareddy608@gmail.com' },
    { icon: 'place', title: 'Service Area', value: 'Kondapur, Hyderabad & nearby areas', href: '#' },
  ];

  protected readonly form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    phone: ['', [Validators.required, Validators.minLength(7)]],
    email: ['', [Validators.required, Validators.email]],
    service: ['', Validators.required],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  onSubmit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitted.set(true);
    this.form.reset();
  }
}
