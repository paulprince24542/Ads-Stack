import { Global, Module } from '@nestjs/common';
import { TxService } from './database/tx.service';

@Global()
@Module({
  providers: [TxService],
  exports: [TxService],
})
export class CommonModule {}
