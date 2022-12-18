import { IsNotEmpty, IsNumber, IsString, MaxLength } from "class-validator";
import { Category } from "src/categories/category.entity";
import { ManyToOne } from "typeorm";
import { Product } from "../product.entity";

export class CreateProductDto {
    @MaxLength(50)
    @IsString()
    @IsNotEmpty()
    name: string

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