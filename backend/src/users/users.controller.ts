import { Controller, Body, Get, Delete, Post, UseGuards, Param } from "@nestjs/common"
import { UsersService } from "./users.service"
import { Users } from "./users.entity"

@Controller("users")
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    create(@Body() createQuiz: any): Promise<Users> {
        return this.usersService.create(createQuiz)
    }

    @Get()
    findAll(): Promise<Users[]> {
        return this.usersService.findAll()
    }

}