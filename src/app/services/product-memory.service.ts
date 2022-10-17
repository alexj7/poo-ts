import { faker } from '@faker-js/faker';

import { Product } from '../models/product.model';
import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';
import { ProductService } from '../models/product-service.model';

export class ProductMemoryService implements ProductService {
  private products: Product[] = [];

  getAll(): Product[] {
    return this.products;
  }

  create(data: CreateProductDto): Product {
    const newProduct = {
      ...data,
      id: faker.datatype.number(),
      createdAt: faker.date.recent(),
      updatedAt: faker.date.recent(),
      category: {
        id: data.categoryId,
        name: faker.commerce.department(),
        image: faker.image.imageUrl(),
      },
    };

    return this.add(newProduct);
  }

  add(product: Product): Product {
    this.products.push(product);
    return product;
  }

  update(id: Product['id'], changes: UpdateProductDto) {
    const index = this.products.findIndex((item) => item.id === id);
    const prevData = this.products[index];

    this.products[index] = {
      ...prevData,
      ...changes,
    };

    return this.products[index];
  }

  findOne(id: Product['id']) {
    return this.products.find((item: Product) => item.id === id);
  }
}
