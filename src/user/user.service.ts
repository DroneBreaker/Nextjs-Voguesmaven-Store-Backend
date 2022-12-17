import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { User } from "./user.entity";

@Injectable()
export class UserService{
    constructor(@InjectRepository(User) private userRepository: Repository<User>) {}

    getUsers(): Promise<User[]> {
        return this.userRepository.find()
    }

    create(createUserDto: CreateUserDto) {
        return this.userRepository.save(createUserDto)
    }

    getUser(id: number ) {
        return this.userRepository.findOne({where: { id }})
    }

    getUserByEmail(email: string) {
        return this.userRepository.findOne({where: { email }})
    }

    update(updateUserDto: UpdateUserDto, userId: number) {
        return this.userRepository.update(userId, updateUserDto)
    }

    delete(userId: number) {
        return this.userRepository.delete(userId)
    }
}