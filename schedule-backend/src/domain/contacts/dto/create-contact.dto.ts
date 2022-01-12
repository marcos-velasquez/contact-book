import { IsNotEmpty, Matches } from 'class-validator';

const onlyNumber = new RegExp(/^[0-9+]+$/);

export class CreateContactDto {
  @IsNotEmpty({ message: 'El nombre es requerido' })
  name: string;

  @Matches(onlyNumber, { message: 'El teléfono es inválido' })
  @IsNotEmpty({ message: 'El telefono es requerido' })
  phone: string;
}
