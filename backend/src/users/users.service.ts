import {Injectable, HttpStatus, HttpException, Catch} from '@nestjs/common';
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {Users} from './users.entity';
import {AuthService} from '../auth/auth.service';
import {json} from "express";
import {stringify} from "ts-jest/dist/utils/json";
import {reportCommentResults} from "tslint-to-eslint-config/src/converters/comments/reporting/reportCommentResults";
import {isUndefined} from "@nestjs/common/utils/shared.utils";

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private usersRepository: Repository<Users>,
        private authService: AuthService,
    ) {
    }

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

        let user = await this.findByMail(loginRegister.email);

        if (isUndefined(user)) {
            throw new HttpException('user not found', HttpStatus.NOT_FOUND);
        }

        const isPasswordMatched = await this.authService.comparePasswords(
            loginRegister.password,
            user.password,
        );

        if (isPasswordMatched) {
            const jwtoken = await this.authService.generateJWT(user.email);

            const obj = {
                token: jwtoken,
                userHash: user.userHash,
                userId: user.id,
            };

            return stringify(obj);
        }else{
            throw new HttpException('wrong data provided', HttpStatus.BAD_REQUEST);
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
