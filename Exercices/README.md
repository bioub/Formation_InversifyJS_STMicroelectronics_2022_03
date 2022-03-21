# Exercise 1

Split the `UserPage` class into 3 classes (each will contain only one method) :

- `UserPage` (`render` method)
- `UserService` (`fetchUsers` method)
- `HttpClient` (`get` method)

Each class should be defined in a separate file

Inject the dependencies :

`UserPage` -> `UserService` -> `HttpClient`

Launch the fake server with `npm run fake-server` then :

Rewrite the `index.ts` program (launch with `npm start`)

Rename the `UserPage.test.ts` to `UserService.test.ts` and rewrite the code (launch with `npm test`)

# Exercise 2

Create an `HttpClientInterface` that define the get method from `HttpClient`

This method should return `Promise<T>` (where `T` is the generic type)

Create a `FakeHttpClient` class that implement `HttpClientInterface`

This class should contain :

```
private data!: any;
async get(url: string) {
  return await this.data;
}
setFakeData(data: any) {
  this.data = data;
}
```

Replace the `HttpClient` with `FakeHttpClient` in `UserService.test.ts` and test the value you inject with `setFakeData` is the one you get in the `userService.fetchUsers()` method.