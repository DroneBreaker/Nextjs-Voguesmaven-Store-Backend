import { IsNotEmpty, IsString } from "class-validator";

export class UpdateCategoriesDto {
    @IsString()
    @IsNotEmpty()
    name: string
}