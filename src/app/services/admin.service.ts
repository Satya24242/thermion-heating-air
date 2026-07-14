import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BASE_URL } from '../core/api.config';
import { RequestStatus, ServiceRequestResponse } from './contact.service';

@Injectable({ providedIn: 'root' })
export class AdminService {
  private readonly http = inject(HttpClient);

  private authHeaders(username: string, password: string): HttpHeaders {
    return new HttpHeaders({
      Authorization: 'Basic ' + btoa(`${username}:${password}`),
    });
  }

  listRequests(username: string, password: string): Observable<ServiceRequestResponse[]> {
    return this.http.get<ServiceRequestResponse[]>(`${API_BASE_URL}/service-requests`, {
      headers: this.authHeaders(username, password),
    });
  }

  updateStatus(
    username: string,
    password: string,
    id: number,
    status: RequestStatus,
  ): Observable<ServiceRequestResponse> {
    return this.http.patch<ServiceRequestResponse>(
      `${API_BASE_URL}/service-requests/${id}/status`,
      { status },
      { headers: this.authHeaders(username, password) },
    );
  }
}
