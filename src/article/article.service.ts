import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { ArticleDto } from './dto/article.dto';

@Injectable()
export class ArticleService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return this.prisma.article.findMany({});
  }

  async getOne(id: string) {
    const article = await this.prisma.article.findUnique({ where: { id } });
    if (!article) {
      throw new NotFoundException('Статья не найдена');
    }
    return article;
  }

  async create(dto: ArticleDto) {
    return this.prisma.article.create({
      data: dto,
    });
  }

  async update(dto: Partial<ArticleDto>, id: string) {
    return this.prisma.article.update({ where: { id }, data: dto });
  }

  async delete(articleId: string) {
    return this.prisma.article.delete({ where: { id: articleId } });
  }
}
