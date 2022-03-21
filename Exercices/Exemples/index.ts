import { container } from "./container";
import { Logger } from "./Logger";

async function main() {
  console.log('main call');

  const logger1 = container.get(Logger);
  const logger2 = container.get(Logger);

  // Http
  //  |
  //  B  Http        Http
  //   \ /            |
  //    A             C

  console.log(logger1 === logger2); // false (une nouvelle instance à chaque get)
  
  await logger1.log('Mon message');
}

main();