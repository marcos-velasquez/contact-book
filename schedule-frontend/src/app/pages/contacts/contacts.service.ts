import { Injectable } from '@angular/core';
import { Contact } from './interfaces/contact.interface';
import { HttpClient } from '@angular/common/http';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  private API = environment.API;

  constructor(private readonly http: HttpClient) {}

  create(data: Contact): Observable<Contact> {
    return this.http.post<Contact>(this.API, data);
  }

  update(data: Contact): Observable<Contact> {
    return this.http.patch<Contact>(this.API, data);
  }

  getAll(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.API);
  }

  delete(id: string): Observable<Contact> {
    return this.http.delete<Contact>(this.API + id);
  }
}
