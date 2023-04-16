import { Injectable } from '@nestjs/common';
import { PassportSerializer } from '@nestjs/passport';
import { UserService } from '~user/user.service';
import { User } from '~user/entities/user.entity';

@Injectable()
export class AuthSerializer extends PassportSerializer {
  constructor(private userService: UserService) {
    super();
  }

  serializeUser(user: User, done: (err: Error, id: string) => void) {
    done(null, user.id);
  }

  async deserializeUser(id: string, done: (err: Error, user: Omit<User, 'password'>) => void) {
    const foundUser = await this.userService.findOne(id);
    const { password, ...userNoPass } = foundUser;
    done(null, userNoPass);
  }
}
