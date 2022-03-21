
import { container } from './container';
import { FakeHttpClient } from './FakeHttpClient';
import { HttpClientInterface } from './HttpClientInterface';
import { UserService } from './UserService';

describe('UserService', () => {
  beforeEach(() => {
    container.snapshot();
  })

  afterEach(() => {
    container.restore();
  });

  describe('fetchUsers method',() => {
    it('should resolves users with fake', async () => {
      const httpClient = new FakeHttpClient();
      httpClient.setFakeData([{name: 'Toto'}])
      
      container.unbind(HttpClientInterface);
      container.bind(HttpClientInterface).toConstantValue(httpClient);
    
      const userService = container.get(UserService);
      const users = await userService.fetchUsers();
      expect(users[0].name).toBe('Toto');
    });  
  
    it('should resolves users', async () => {
      const userService = container.get(UserService);
      const users = await userService.fetchUsers();
      expect(users[0].name).toBe('Leanne Graham');
    }); 
  }) 
})