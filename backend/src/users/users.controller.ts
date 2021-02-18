import { Controller, Body, Get, Delete, Post, UseGuards, Param } from "@nestjs/common"
import { UsersService } from "./users.service"
import { Users } from "./users.entity"

@Controller("auth")
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Post()
    create(@Body() authRegister: any): Promise<Users> {
        return this.usersService.create(authRegister)
    }

    @Get()
    findAll(): Promise<Users[]> {
        return this.usersService.findAll()
    }

}