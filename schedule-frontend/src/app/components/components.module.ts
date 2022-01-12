import { NgModule } from '@angular/core';
import { TableModule } from './table/table.module';
import { MaterialModule } from './material/material.module';

const MODULES = [TableModule, MaterialModule];

@NgModule({
  imports: MODULES,
  exports: MODULES,
})
export class ComponentsModule {}
