import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"
import { Users } from "./users.entity"
import * as bcrypt from "bcryptjs"

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private usersRepository: Repository<Users>,
    ) {}

    async create(authRegister: any): Promise<Users> {
        try {
            const users = new Users()

            users.name = authRegister.name
            users.email = authRegister.email
            users.createdAt = new Date()
            users.isDeleted = false
            users.password = await bcrypt.hash(authRegister.password, 10)
            users.userHash = await bcrypt.hash(authRegister.name, 10)

            const response = await this.usersRepository.save(users)

            authRegister.password = null

            return response
        } catch (e) {
            return null
        }
    }

    findAll(): Promise<Users[]> {
        return this.usersRepository.find()
    }

}