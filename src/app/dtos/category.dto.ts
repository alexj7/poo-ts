import {
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsUrl,
  Length,
  validateOrReject,
} from 'class-validator';

import { AccessType, Category } from '../models/category.model';

export interface ICreateCategoryDto extends Omit<Category, 'id'> {}
export class CreateCategoryDto implements ICreateCategoryDto {
  @IsNotEmpty()
  @Length(4, 20)
  name!: string;

  @IsUrl()
  @IsNotEmpty()
  image!: string;

  @IsOptional()
  @IsEnum(AccessType)
  accsess?: AccessType | undefined;
}

(async () => {
  try {
    const dto = new CreateCategoryDto();
    dto.name = 'Nombre de categoria';
    dto.image = 'https://api.escuelajs.co/api/v1/products';

    await validateOrReject(dto);
  } catch (error) {
    console.log(error);
  }
})();
