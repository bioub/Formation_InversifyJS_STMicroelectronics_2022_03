import { HttpClient } from "./HttpClient";
import { User } from "./model";

export class UserService {
  constructor(private httpClient: HttpClient) {}
  async fetchUsers() {
    return await this.httpClient.get<User[]>('http://localhost:3000/users');
  }
}