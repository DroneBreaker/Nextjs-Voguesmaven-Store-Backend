import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { ShopModule } from './shop/shop.module';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './user/user.entity';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';
import { ProductModule } from './product/product.module';
import { Product } from './product/product.entity';
import { Category } from './categories/category.entity';
import { CategoryModule } from './categories/category.module';

@Module({
  imports: [UserModule, AuthModule, ProductModule, CategoryModule, ProfileModule, TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'thezombies',
    database: 'voguedb',
    entities: [User, Product, Category],
    synchronize: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
