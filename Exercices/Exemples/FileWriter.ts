import fs from 'fs';
import { injectable } from 'inversify';
import { WriterInterface } from './WriteInterface';

@injectable()
export class FileWriter implements WriterInterface {
  async append(msg: string) {
    await fs.promises.appendFile('app.log', msg);
  }
}