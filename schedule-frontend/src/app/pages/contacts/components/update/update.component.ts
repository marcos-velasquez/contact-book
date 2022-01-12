import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SnackbarService } from '@components/material/services/snackbar.service';
import { ContactsComponent } from '../../contacts.component';
import { ContactsService } from '../../contacts.service';
import { Contact } from '../../interfaces/contact.interface';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss'],
})
export class UpdateComponent implements OnInit {
  form: FormGroup;

  constructor(
    private dialogRef: MatDialogRef<ContactsComponent>,
    private fb: FormBuilder,
    private contactsService: ContactsService,
    private snackbarService: SnackbarService,
    @Inject(MAT_DIALOG_DATA) private data: Contact
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      phone: [
        this.data.phone,
        [Validators.required, Validators.pattern(/^[0-9+]+$/)],
      ],
      name: [this.data.name, [Validators.required]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.form.value.id = this.data.id;
      this.contactsService.update(this.form.value).subscribe(
        (contact) => {
          this.snackbarService.info('Contacto actualizado');
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
