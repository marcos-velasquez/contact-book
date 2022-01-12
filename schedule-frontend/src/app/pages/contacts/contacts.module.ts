import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '@components/components.module';
import { ContactsComponent } from './contacts.component';
import { CreateComponent } from './components/create/create.component';
import { UpdateComponent } from './components/update/update.component';

@NgModule({
  declarations: [ContactsComponent, CreateComponent, UpdateComponent],
  imports: [CommonModule, ComponentsModule, ReactiveFormsModule],
  exports: [ContactsComponent],
})
export class ContactsModule {}
