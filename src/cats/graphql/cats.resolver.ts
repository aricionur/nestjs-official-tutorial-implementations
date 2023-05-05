import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';

import { CatsGuard } from './cats.guard';
// import { CatsService } from './cats.service';
import { CatsService } from '../cats.service';
import { CreateCatDto } from '../dto/create-cat.dto';
import { Cat } from 'src/graphql.schema';

@Resolver('Cat')
export class CatsResolver {
  constructor(private readonly catsService: CatsService) {
    //
  }

  @Query()
  @UseGuards(CatsGuard)
  async cats() {
    return this.catsService.findAll();
  }

  @Mutation('createCat')
  @UseGuards(CatsGuard)
  createCat(@Args('createCatInput') args: CreateCatDto): Cat {
    const createdCat = this.catsService.create(args);
    console.log(createdCat);
    return createdCat;
  }
}
