import 'reflect-metadata'; // à garder en premier

import { Container } from "inversify";
import { Logger } from './Logger';
import { FileWriter } from './FileWriter';
import { WriterInterface } from './WriteInterface';

export const container = new Container({
  // autoBindInjectable: true
  defaultScope: 'Singleton'
});

container.bind(FileWriter).toSelf().inSingletonScope();
// container.bind(FileWriter).to(FileWriter);
// container.bind<FileWriter>('writer').to(FileWriter);
// container.bind<FileWriter>('writer').toDynamicValue(() => {
//   const writer = new FileWriter();
//   return writer;
// });
// const writer = new FileWriter();
// container.bind<FileWriter>('writer').toConstantValue(writer);

container.bind(Logger).toSelf().inSingletonScope();
// container.bind(Logger).to(Logger);
// container.bind<Logger>('logger').to(Logger);
// container.bind<Logger>('logger').toDynamicValue((context) => {
//   const logger = new Logger(context.container.get<FileWriter>('writer'));
//   return logger;
// });
// const logger = new Logger(container.get<FileWriter>('writer'));
// container.bind<Logger>('logger').toConstantValue(logger);

container.bind(WriterInterface).toService(FileWriter); // alias