# apple-serial

Search for Apple serial numbers

# Install
### Global

```shell script
npm install -g apple-serial
```

### Package

```shell script
npm install --save apple-serial
```

## Usage

### CLI

```shell script
apple-serial mac XXXXXXX
apple-serial ipad XXXXXXX
```

### Programmatically

```js
const appleSerialSearch = require('apple-serial');

appleSerialSearch('mac', 'XXXXXXX').then(console.log);
appleSerialSearch('ipad', 'XXXXXXX').then(console.log);
```

## TypeScript

Type definitions are included.

## License

MIT
