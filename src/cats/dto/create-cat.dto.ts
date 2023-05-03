import { IsString, IsInt } from 'class-validator';

export class CreateCatDto {
  @IsString()
  name: string;

  @IsInt()
  age: number;

  @IsString()
  breed: string;
}

export class UpdateCatDto {
  @IsInt()
  id: number;

  @IsString()
  name: string;

  @IsInt()
  age: number;

  @IsString()
  breed?: string;
}
