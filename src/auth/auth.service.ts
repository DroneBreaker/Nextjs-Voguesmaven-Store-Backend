import { Injectable } from "@nestjs/common"
import { UserService } from "src/user/user.service"
import { JwtService } from '@nestjs/jwt'
import { LoginDto } from "./dto/login.dto"

@Injectable()
export class AuthService{
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) {}

    async validateUser(email: string, password: string) {
        const user = await this.userService.getUserByEmail(email)

        if (user && user.password === password) {
            return user
        }
        
        return null
    }

    async login(loginDto: LoginDto, user: any) {
        const payload = {email: loginDto.email, sub:user.id}

        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}