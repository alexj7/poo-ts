import { CreateProductDto, UpdateProductDto } from '../dtos/product.dto';
import { ProductService } from '../models/product-service.model';
import { Product } from '../models/product.model';
import axios from 'axios';

export class ProductHttpService implements ProductService {
  private url: string = 'https://api.escuelajs.co/api/v1/products';

  async getAll(): Promise<Product[]> {
    const { data } = await axios.get<Product[]>(this.url);
    return data;
  }

  async update(id: Product['id'], changes: UpdateProductDto): Promise<Product> {
    const { data } = await axios.put(`${this.url}/${id}`, changes);
    return data;
  }

  async create(dto: CreateProductDto): Promise<Product> {
    const { data } = await axios.put(this.url, dto);
    return data;
  }

  async findOne(id: Product['id']): Promise<Product | undefined> {
    const { data } = await axios.get(`${this.url}/${id}`);
    return data;
  }
}
