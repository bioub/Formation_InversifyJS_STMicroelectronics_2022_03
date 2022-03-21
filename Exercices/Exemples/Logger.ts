import { inject, injectable } from "inversify";
import { FileWriter } from "./FileWriter";
import { WriterInterface } from "./WriteInterface";

@injectable()
export class Logger {
  // @inject(FileWriter) private writer!: FileWriter;
  constructor(
    @inject(WriterInterface) private writer: WriterInterface
  ) {}
  async log(msg: string) {
    const formatted = `${(new Date).toISOString()} - ${msg}\n`;
    await this.writer.append(formatted);
  }
}