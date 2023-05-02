import { Module, Global } from '@nestjs/common';

import { CatsController } from './cats.contoller';
import { CatsService } from './cats.service';

@Global()
@Module({
  controllers: [CatsController],
  providers: [CatsService],
  exports: [CatsService],
})
export class CatsModule {}
