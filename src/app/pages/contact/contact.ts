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

  protected readonly serviceAreas = ['Denver', 'Aurora', 'Lakewood', 'Boulder', 'Littleton', 'Englewood'];

  protected readonly channels: ContactChannel[] = [
    { icon: 'call', title: 'Call Us', value: '(303) 555-0199', href: 'tel:+13035550199' },
    { icon: 'mail', title: 'Email Us', value: 'hello@emberfrosthvac.com', href: 'mailto:hello@emberfrosthvac.com' },
    { icon: 'place', title: 'Service Area', value: 'Denver, CO & surrounding areas', href: '#' },
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
