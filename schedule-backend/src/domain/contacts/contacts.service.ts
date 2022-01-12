import { Injectable } from '@nestjs/common';
import { PrismaService } from '@infrastructure/prisma/prisma.service';
import { CreateContactDto, UpdateContactDto } from './dto';

@Injectable()
export class ContactsService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createContactDto: CreateContactDto) {
    return this.prismaService.contact.create({ data: createContactDto });
  }

  findAll() {
    return this.prismaService.contact.findMany();
  }

  findOne(id: string) {
    return this.prismaService.contact.findUnique({ where: { id } });
  }

  update({ id, ...updateContactDto }: UpdateContactDto) {
    return this.prismaService.contact.update({
      where: { id },
      data: updateContactDto,
    });
  }

  delete(id: string) {
    return this.prismaService.contact.delete({ where: { id } });
  }
}
