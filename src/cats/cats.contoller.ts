import {
  Controller,
  Get,
  Req,
  Post,
  Header,
  Param,
  Body,
  Put,
  Delete,
  Options,
} from '@nestjs/common';
import { UnauthorizedException, UseInterceptors } from '@nestjs/common';
import { Request } from 'express';

import { CreateCatDto, UpdateCatDto } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Cat } from './interfaces/cat.interface';
import { CacheInterceptor } from 'src/interceptors/cache.interceptor';

@Controller('cats')
export class CatsController {
  constructor(private catService: CatsService) {}

  // @Post()
  // @Header('Cache-Control', 'none')
  // create(@Body() body: CreateCatDto): Promise<CreateCatDto> {
  //   console.log('Request body:', body);
  //   return Promise.resolve(body);
  // }

  @Post()
  async create(@Body() body: CreateCatDto) {
    this.catService.create(body);
  }

  @UseInterceptors(CacheInterceptor)
  @Get()
  findAll(@Req() request: Request): Cat[] {
    // console.log('Request body:', request);
    return this.catService.findAll();
  }

  @Get(':id')
  find(@Param() params: any): { name: string; age?: number } {
    console.log('id:', params.id);
    return { name: 'cat-1' };
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    console.log('Request body:', updateCatDto);

    return `This action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes a #${id} cat`;
  }

  @Options()
  throwError() {
    // throw new Error('A random error'); // Nestjs default Error catch() runs and returns general 500 Internal Server Error.
    throw new UnauthorizedException('Ooops, your are not authorized...');
  }
}
