import { Component, inject, signal } from '@angular/core';
import { DatePipe } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AdminService } from '../../services/admin.service';
import { RequestStatus, ServiceRequestResponse } from '../../services/contact.service';

@Component({
  selector: 'app-admin',
  imports: [
    DatePipe,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: './admin.html',
  styleUrl: './admin.scss',
})
export class Admin {
  private readonly fb = new FormBuilder();
  private readonly adminService = inject(AdminService);

  private username = '';
  private password = '';

  protected readonly authenticated = signal(false);
  protected readonly loading = signal(false);
  protected readonly loginError = signal<string | null>(null);
  protected readonly requests = signal<ServiceRequestResponse[]>([]);
  protected readonly updatingId = signal<number | null>(null);
  protected readonly statusError = signal<string | null>(null);

  protected readonly statusOptions: RequestStatus[] = ['NEW', 'CONTACTED', 'SCHEDULED', 'COMPLETED', 'CANCELLED'];

  protected readonly loginForm = this.fb.nonNullable.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  onLogin(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }

    const { username, password } = this.loginForm.getRawValue();
    this.loading.set(true);
    this.loginError.set(null);

    this.adminService.listRequests(username, password).subscribe({
      next: (requests) => {
        this.username = username;
        this.password = password;
        this.requests.set(requests);
        this.authenticated.set(true);
        this.loading.set(false);
      },
      error: (err) => {
        this.loading.set(false);
        this.loginError.set(
          err.status === 401 ? 'Incorrect username or password.' : 'Could not reach the server. Please try again.',
        );
      },
    });
  }

  refresh(): void {
    this.loading.set(true);
    this.adminService.listRequests(this.username, this.password).subscribe({
      next: (requests) => {
        this.requests.set(requests);
        this.loading.set(false);
      },
      error: () => {
        this.loading.set(false);
        this.logout();
      },
    });
  }

  onStatusChange(id: number, status: RequestStatus): void {
    this.updatingId.set(id);
    this.statusError.set(null);

    this.adminService.updateStatus(this.username, this.password, id, status).subscribe({
      next: (updated) => {
        this.requests.update((list) => list.map((r) => (r.id === id ? updated : r)));
        this.updatingId.set(null);
      },
      error: () => {
        this.updatingId.set(null);
        this.statusError.set('Could not update status. Please try again.');
      },
    });
  }

  logout(): void {
    this.username = '';
    this.password = '';
    this.authenticated.set(false);
    this.requests.set([]);
    this.loginForm.reset();
  }
}
