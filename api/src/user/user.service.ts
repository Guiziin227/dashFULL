import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import {PrismaService} from "../prisma/prisma.service";
import {hash} from "argon2";

@Injectable()
export class UserService {

  constructor(private readonly prismaService: PrismaService) {
  }

  async create(createUserDto: CreateUserDto) {

    const {password, ...userData} = createUserDto;

    const hashedPassword = await hash(password);

    return this.prismaService.user.create({
      data: {
        ...userData,
        password: hashedPassword
      }
    });

  }

  async findByEmail(email: string) {
    return this.prismaService.user.findUnique({
      where: { email },
    });
  }
}
