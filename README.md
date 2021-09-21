# useFetch Custom Hook

The `useFectch` hook can be used to simplify fetch `GET` requests and data caching in your application.

### Usage

```javascript
import { useFetch } from './useFetch';

const App = () => {
  const { isLoading, data, error } = useFetch('https://apidomain.com/endpoint');

  if (isLoading) return 'Loading...';
  if (error) return error;

  return <>{/* do something with `data` */}</>;
};

export default App;
```
