export const WriterInterface = Symbol('WriterInterface');
export interface WriterInterface {
  append(msg: string): Promise<void>;
}