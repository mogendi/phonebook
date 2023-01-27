import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  baseUrl = "/contacts/";

  constructor(private http: HttpClient) { }

  getContacts(params: {}) {
    return this.http.get<Contact[]>(
      `${environment.api_url}${this.baseUrl}`,
      { params: params }
    )
  }

  updateContacts(id: string, payload: {}) {
    return this.http.put<Contact> (
      `${environment.api_url}${this.baseUrl}${id}/`,
      payload
    )
  }

  deleteService(id: string) {
    return this.http.delete(
      `${environment.api_url}${this.baseUrl}${id}/`
    )
  }
}
