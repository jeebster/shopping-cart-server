# shopping-cart-server
API for consumption via [shopping-cart-client](https://github.com/jeebster/shopping-cart-client), authored in [Koa](https://github.com/koajs/koa)

## Instructions
This application depends on [Docker](https://www.docker.com/get-started) for building/running the server

### Docker

#### Build the Docker image

```docker build -t jeebster/shopping-cart-server .```

#### Run the Docker image

```docker run -p ${YOUR_PORT_OF_CHOICE}:8080 -d jeebster/shopping-cart-server```

The server should now be running at `http://localhost:${YOUR_PORT_OF_CHOICE}`

### Local
Edit the `REACT_APP_API_URL` environment variable in the `.env` file to match the URL of your [shopping-cart-server](https://github.com/jeebster/shopping-cart-server) local application

With NPM
```
npm install
npm start
```

With Yarn
```
yarn install
yarn start
```

## API Routes

### GET `/products`
Returns an array of products with the following schema

```
{
  id: integer,
  title: string,
  description: string,
  price: decimal,
  quantity: integer
}
```

## Tests
Invoke `yarn test` to run the test suite

**NOTE:** Due to time constraints, tests were not fully completed; not all tests will pass

## Notes