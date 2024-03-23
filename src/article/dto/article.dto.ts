import { IsString } from 'class-validator';

export class ArticleDto {
  @IsString()
  imageUrl: string;

  @IsString()
  title: string;

  @IsString()
  description: string;
}
