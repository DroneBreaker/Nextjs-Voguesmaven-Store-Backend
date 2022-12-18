import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Category } from "./category.entity";
import { CreateCategoriesDto } from "./dto/create-categories.dto";
import { UpdateCategoriesDto } from "./dto/update-categories.dto";

@Injectable()
export class CategoryService {
    constructor(@InjectRepository(Category) private categoryRepository: Repository<Category>) {}

    allCategories(): Promise<Category[]> {
        return this.categoryRepository.find()
    }

    create(createCategoriesDto: CreateCategoriesDto) {
        return this.categoryRepository.save(createCategoriesDto)
    }

    getCategoryById(categoriesId: number) {
        return this.categoryRepository.findOne({where: { id: categoriesId }})
    }

    updateById(updateCategoriesDto: UpdateCategoriesDto, categoriesId: number) {
        return this.categoryRepository.update(categoriesId, updateCategoriesDto)
    }

    deleteById(categoriesId: number) {
        return this.categoryRepository.delete(categoriesId)
    }
}