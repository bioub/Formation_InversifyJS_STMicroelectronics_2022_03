import { injectable } from 'inversify';
import { HttpClientInterface } from './HttpClientInterface';

@injectable()
export class FakeHttpClient implements HttpClientInterface {
  private data!: any;
  async get(url: string) {
    return await this.data;
  }
  setFakeData(data: any) {
    this.data = data;
  }
}
