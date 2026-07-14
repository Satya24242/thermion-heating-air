import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../core/api.config';

export interface ServiceRequestPayload {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  website?: string;
}

export type RequestStatus = 'NEW' | 'CONTACTED' | 'SCHEDULED' | 'COMPLETED' | 'CANCELLED';

export interface ServiceRequestResponse {
  id: number;
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
  createdAt: string;
  status: RequestStatus;
}

@Injectable({ providedIn: 'root' })
export class ContactService {
  private readonly http = inject(HttpClient);

  submit(payload: ServiceRequestPayload): Observable<ServiceRequestResponse> {
    return this.http.post<ServiceRequestResponse>(`${API_BASE_URL}/service-requests`, payload);
  }
}
