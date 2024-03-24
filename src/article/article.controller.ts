import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ArticleService } from './article.service';
import { ArticleDto } from './dto/article.dto';

@Controller('articles')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Get()
  async getAll() {
    return this.articleService.getAll();
  }

  @Get(':id')
  async getOne(@Param('id') id: string) {
    return this.articleService.getOne(id);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post()
  async create(@Body() dto: ArticleDto) {
    return this.articleService.create(dto);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put(':id')
  async update(@Body() dto: ArticleDto, @Param('id') id: string) {
    return this.articleService.update(dto, id);
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.articleService.delete(id);
  }
}
