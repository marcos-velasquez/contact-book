import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';
import { dataDisplay } from './constants/table-data-display.constant';
import { ContactsService } from './contacts.service';
import { Contact } from './interfaces/contact.interface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent {
  contacts: Contact[];
  dataDisplay = dataDisplay;

  constructor(
    private dialog: MatDialog,
    private contactsService: ContactsService
  ) {}

  ngAfterViewInit() {
    this.contactsService.getAll().subscribe((contacts) => {
      this.contacts = contacts;
    });
  }

  create() {
    this.dialog
      .open(CreateComponent)
      .afterClosed()
      .subscribe((contact) => {
        if (Boolean(contact)) {
          this.contacts = [...this.contacts, contact];
        }
      });
  }

  update(contact: Contact) {
    this.dialog
      .open(UpdateComponent, { data: contact })
      .afterClosed()
      .subscribe((contact) => {
        if (Boolean(contact)) {
          const index = this.contacts.findIndex((_) => _.id === contact.id);
          this.contacts[index] = contact;
          this.contacts = [...this.contacts];
        }
      });
  }

  delete(contact: Contact) {
    Swal.fire({
      title: '¿Estás segur@?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.isConfirmed) {
        this.contactsService.delete(contact.id).subscribe((contact) => {
          if (Boolean(contact)) {
            this.contacts = this.contacts.filter((_) => _.id !== contact.id);
          }
        });
      }
    });
  }
}
