// import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
// import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
// // import { UserService } from './user.service';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
// import { User } from './entities/user.entity';

// @Controller('hellocar/users')
// @ApiTags('Hellocar - Users')
// export class UserController {
//   // constructor(private readonly userService: UserService) {}

//   @Post()
//   @ApiCreatedResponse({
//     description: 'A user has been successfully created.',
//   })
//   create(@Body() user: CreateUserDto) {
//     return this.userService.create(user);
//   }
//   @Get()
//   @ApiOkResponse({ type: [User] })
//   findAll() {
//     return this.userService.findAll();
//   }

//   @Get(':id')
//   @ApiOkResponse({ type: User })
//   findOne(@Param('id') id: string) {
//     return this.userService.findOne(id);
//   }

//   @Patch(':id')
//   @ApiOkResponse({ type: User })
//   update(@Param('id') id: string, @Body() data: UpdateUserDto) {
//     return this.userService.update(id, data);
//   }

//   @Delete(':id')
//   @ApiOkResponse({ type: User })
//   remove(@Param('id') id: string) {
//     return this.userService.remove(id);
//   }
// }
