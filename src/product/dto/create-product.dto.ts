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
    @ManyToOne(() => Product, (product) => product.category)
    category: Category

    @IsString()
    @IsNotEmpty()
    description: string

    @IsNumber()
    @IsNotEmpty()
    price: number
}