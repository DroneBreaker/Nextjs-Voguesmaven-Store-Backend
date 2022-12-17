import { Controller, Get, UseGuards } from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";

@Controller()
export class ProfileController{
    @UseGuards(AuthGuard('jwt'))
    @Get('/profile')
    profile() {
        return 'I am protected route'
    }
}