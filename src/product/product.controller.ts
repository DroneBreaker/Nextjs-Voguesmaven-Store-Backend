import { Body, Controller, Get, Post } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { ProductService } from "./product.service";

@Controller('products')
export class ProductController{
    constructor(private readonly productService: ProductService) {}

    @Get()
    allProducts() {
        return this.productService.getProducts()
    }

    @Post()
    createProduct(@Body() createproductDto: CreateProductDto) {
        return this.productService.create(createproductDto)
    }
}