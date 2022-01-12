import { DisplayBuilder } from '@components/table/models/display-builder.model';

export const dataDisplay = new DisplayBuilder()
  .setLabels(['nombre de contacto', 'teléfono', 'opciones'])
  .setHeaders(['name', 'phone', 'options'])
  .setBreakpointsAll(['name', 'phone', 'options'])
  .build();
