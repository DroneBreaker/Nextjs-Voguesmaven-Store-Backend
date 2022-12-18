import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from "@nestjs/common";
import { CategoryService } from "./category.service";
import { CreateCategoriesDto } from "./dto/create-categories.dto";
import { UpdateCategoriesDto } from "./dto/update-categories.dto";

@Controller()
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}

    @Get('/categories')
    getCategories() {
        return this.categoryService.allCategories()
    }

    @Post('/categories')
    createCategories(@Body() createCategoriesDto: CreateCategoriesDto) {
        return this.categoryService.create(createCategoriesDto)
    }

    @Get('/categories/:categoriesId') 
    getCategory(@Param('categoriesId', ParseIntPipe) categoriesId: number) {
        return this.categoryService.getCategoryById(categoriesId)
    }

    @Patch('/categories/:categoriesId')
    updateCategories(@Body() updateCategoriesDto: UpdateCategoriesDto, @Param('categoriesId', ParseIntPipe) categoriesId: number) {
        return this.categoryService.updateById(updateCategoriesDto, categoriesId)
    }

    @Delete('/categories/:categoriesId')
    deleteCategories(@Param('categoriesId', ParseIntPipe) categoriesId: number) {
        return this.categoryService.deleteById(categoriesId)
    }
}