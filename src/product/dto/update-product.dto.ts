import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";
import { Category } from "src/categories/category.entity";

export class UpdateProductDto {
    @MaxLength(50)
    @IsString()
    @IsNotEmpty()
    name: string

    // @IsString()
    // type: string

    @IsString()
    @IsNotEmpty()
    description: string

    @IsString()
    @IsNotEmpty()
    image: string

    @IsNumber()
    @IsNotEmpty()
    price: number
}