import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { SnackbarService } from '@components/material/services/snackbar.service';
import { ContactsComponent } from '../../contacts.component';
import { ContactsService } from '../../contacts.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  form: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<ContactsComponent>,
    private fb: FormBuilder,
    private contactsService: ContactsService,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      phone: ['', [Validators.required, Validators.pattern(/^[0-9+]+$/)]],
      name: ['', [Validators.required]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.contactsService.create(this.form.value).subscribe(
        (contact) => {
          this.snackbarService.info('Contacto creado');
          this.dialogRef.close(contact);
        },
        (message: string) => {
          this.snackbarService.error(message);
        }
      );
    }
  }

  close(): void {
    this.dialogRef.close();
  }
}
