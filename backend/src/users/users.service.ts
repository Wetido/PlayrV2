import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
    private authService: AuthService,
  ) {}

  async signUp(authRegister: any): Promise<Users> {
    try {
      const users = new Users();

      users.email = authRegister.email;
      users.createdAt = new Date();
      users.isDeleted = false;
      users.password = await this.authService.hashPassword(
        authRegister.password,
      );
      users.userHash = await this.authService.hashPassword(authRegister.email);

      const response = await this.usersRepository.save(users);

      authRegister.password = null;

      return response;
    } catch (e) {
      return null;
    }
  }

  async logIn(loginRegister: any): Promise<string> {
    try {
      const users = await this.findByMail(loginRegister.email);
      const isPasswordMatched = await this.authService.comparePasswords(
        loginRegister.password,
        users.password,
      );

      if (!isPasswordMatched) {
        throw new HttpException(
          'Wrong credentials provided',
          HttpStatus.BAD_REQUEST,
        );
      }

      const jwtoken = await this.authService.generateJWT(users.email);

      return jwtoken;
    } catch (e) {
      return null;
    }
  }

  findAll(): Promise<Users[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<Users> {
    return this.usersRepository.findOne(id);
  }

  findByMail(email: string): Promise<Users> {
    return this.usersRepository
      .createQueryBuilder('users')
      .where(`users.usr_email = '${email}'`)
      .getOne();
  }
}
