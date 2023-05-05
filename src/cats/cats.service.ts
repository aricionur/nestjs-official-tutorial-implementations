import { Injectable } from '@nestjs/common';

// import { Cat } from './interfaces/cat.interface';
import { Cat } from 'src/graphql.schema';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = [];

  create(cat: Cat): Cat {
    cat.id = this.cats.length + 1;
    this.cats.push(cat);

    return cat;
  }

  findAll(): Cat[] {
    return this.cats;
  }

  findOneById(id: number): Cat | undefined {
    return this.cats.find((cat) => cat.id === id);
  }
}
