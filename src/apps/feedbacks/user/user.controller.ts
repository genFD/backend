// import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
// import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';

// import { UserService } from './user.service';
// // import { CreateUserDto } from './dto/create-user.dto';
// import { CreateUserDto } from '~user/dto/create-user.dto';
// import { UpdateUserDto } from '~user/dto/update-user.dto';
// // import { UpdateUserDto } from './dto/update-user.dto';
// import { UserDto } from './dto/user.dto';
// // import { User } from './entities/user.entity';
// import { User } from '~user/entities/user.entity';
// import { Serialize } from '~interceptors/custom.interceptor';

// @Controller('feedbacks/users')
// @Serialize(UserDto)
// @ApiTags('Feedbacks - Users')
// export class UserController {
//   constructor(private readonly userService: UserService) {}

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

//   @Get('/search/email')
//   @ApiOkResponse({ type: User })
//   findByEmail(@Query('email') email: string) {
//     return this.userService.findByEmail(email);
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
