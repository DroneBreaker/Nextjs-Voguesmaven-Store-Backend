import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";
import { UpdateProductDto } from "./dto/update-product.dto";
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

    @Get('/:productId')
    getProduct(@Param('productId', ParseIntPipe) productId: number) {
        return this.productService.getProduct(productId)
    }

    @Patch('/:productId')
    updateProduct(@Body() updateProductDto: UpdateProductDto, @Param('productId', ParseIntPipe) productId: number) {
        return this.productService.update(updateProductDto, productId)
    }

    @Delete('/:productId')
    deleteProduct(@Param('productId', ParseIntPipe) productId: number) {
        return this.productService.delete(productId)
    }
}