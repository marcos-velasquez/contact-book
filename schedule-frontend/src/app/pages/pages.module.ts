import { NgModule } from '@angular/core';
import { ContactsModule } from './contacts/contacts.module';

const MODULES = [ContactsModule];

@NgModule({
  imports: MODULES,
  exports: MODULES,
})
export class PagesModule {}
