import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  generateJWT(email: string): Promise<string> {
    return this.jwtService.signAsync({ id: email });
  }

  hashPassword(password: string): Promise<string> {
    return bcrypt.hash(password, 12);
  }

  comparePasswords(newPassword: string, passwordHash: string): Promise<any> {
    return bcrypt.compare(newPassword, passwordHash);
  }
}
