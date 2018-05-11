# node-wolfram-alpha
An extremely tiny Wolfram Alpha API wrapper for Node.js

### Features
✓ Single dependency (axios) 

✓ Promise-based

✓ Full type definitions (response types extracted from Wolfram Docs)


## Usage
```typescript
import * as WolframClient from 'node-wolfram-alpha';

const client = new WolframClient('your api key');

// Query wolfram for 'population of France', but only return the first pod
const result = await client.query('population of France', { podindex: 1 });

// Or, do the same by passing in the whole, uri-encoded URL
const url = 'http://api.wolframalpha.com/v2/query?appid=YOUR_APP_ID&input=population%20of%20france&podindex=1';
const result = await client.getFromUrl(url);
```

All possible options that can be provided to the .query() method can be found at: 
https://products.wolframalpha.com/api/documentation/#parameter-reference

### Building
If you would like to build the library from source, you can do it as following:
```
yarn
yarn run build
```