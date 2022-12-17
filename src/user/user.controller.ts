import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post, Req } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { UserService } from "./user.service";

@Controller()
export class UserController{
    constructor(private readonly userService: UserService) {}

    @Get('/users')
    allUsers() {
        return this.userService.getUsers()
    }

    @Post('/users')
    createUser(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto)
    }

    @Patch('/users/:userId') 
    updateUser(@Body() updateUserDto: UpdateUserDto, @Param( 'userId', ParseIntPipe) userId: number ) {
        return this.userService.update(updateUserDto, userId)
    }

    @Get('/users/:userId') 
    getUser(@Param('userId', ParseIntPipe) userId: number ) {
        return this.userService.getUser(userId)
    }

    @Delete('/users/:userId') 
    deleteUser(@Param('userId', ParseIntPipe) userId: number ) {
        return this.userService.delete(userId)
    }
}

