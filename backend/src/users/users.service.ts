import { Injectable } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { Repository } from "typeorm"
import { Users } from "./users.entity"

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private usersRepository: Repository<Users>,
    ) {}

    async create(createUser: any): Promise<Users> {
        try {
            const users = new Users()

            users.name = createUser.name

            await this.usersRepository.save(users)
        } catch (e) {
            return null
        }
    }

    findAll(): Promise<Users[]> {
        return this.usersRepository.find()
    }

}