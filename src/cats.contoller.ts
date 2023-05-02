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
} from '@nestjs/common';
import { Request } from 'express';

import { CreateCatDto, UpdateCatDto } from './create-cat.dto';

@Controller('cats')
export class CatsController {
  @Post()
  @Header('Cache-Control', 'none')
  create(@Body() body: CreateCatDto): Promise<CreateCatDto> {
    console.log('Request body:', body);

    return Promise.resolve(body);
  }

  @Get()
  findAll(@Req() request: Request): { name: string; age?: number }[] {
    console.log('Request body:', request);

    return [
      { name: 'cat-1' },
      { name: 'cat-2', age: 12 },
      { name: 'cat-2', age: 23 },
    ];
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
}
