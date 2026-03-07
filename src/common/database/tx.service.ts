import { Injectable } from '@nestjs/common';
import { DataSource, EntityManager } from 'typeorm';

@Injectable()
export class TxService {
  constructor(private readonly dataSource: DataSource) {}

  async run<T>(work: (manager: EntityManager) => Promise<T>): Promise<T> {
    const runner = this.dataSource.createQueryRunner();
    await runner.connect();
    await runner.startTransaction();

    try {
      const result = await work(runner.manager);
      await runner.commitTransaction();
      return result;
    } catch (error) {
      console.log(error)
      await runner.rollbackTransaction();
      throw error;
    } finally {
      await runner.release();
    }
  }
}
