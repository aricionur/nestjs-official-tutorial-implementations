import { Module, Global } from '@nestjs/common';

import { CatsController } from './cats.contoller';
import { CatsService } from './cats.service';
import { CatsResolver } from './graphql/cats.resolver';

@Global()
@Module({
  controllers: [CatsController],
  providers: [CatsService, CatsResolver],
  exports: [CatsService],
})
export class CatsModule {}
