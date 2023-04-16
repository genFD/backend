import { PartialType } from '@nestjs/mapped-types';
// import { CreateUserDto } from './create-user.dto';
import { CreateUserDto } from '~user/dto/create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {}
