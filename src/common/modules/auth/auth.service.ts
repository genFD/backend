import { Injectable } from '@nestjs/common';
import { UserNotFoundException } from '~exceptions/userNotFound.exception';
import { IncorrectPasswordException } from '~exceptions/incorrectPassword.exception';
import { EmailAlreadyExistsException } from '~exceptions/emailAlreadyExists.exception';
import { validateHash, generateHash } from './utils/generate.validate.hash';
import { UserService } from '~modules/user/user.service';
import { SignInDto } from './dto/signin.dto';
import { SignUpDto } from './dto/signup.dto';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(user: SignInDto) {
    // JOB: retrieve a user and verify the password.
    // console.log('Inside login user');

    const foundUser = await this.userService.findByEmail(user.email);

    if (!foundUser) throw new UserNotFoundException();

    const isPasswordValid = await validateHash(user.password, foundUser.password);
    if (!isPasswordValid) throw new IncorrectPasswordException();
    const { password, ...userNoPass } = foundUser;

    return userNoPass;
  }

  async registerUser(user: SignUpDto) {
    //1- check if user exist, throw exception if true
    const existingUser = await this.userService.findByEmail(user.email);
    if (existingUser) throw new EmailAlreadyExistsException();

    //2-  Encrypt user's password
    const hashedPassword = generateHash(user.password);

    //3-  Store new user's record
    const newUserInput = { ...user, password: hashedPassword };
    const createdUser = await this.userService.create(newUserInput);
    const { password, ...userNoPass } = createdUser;

    return userNoPass;
  }
}
