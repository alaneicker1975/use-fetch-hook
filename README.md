# useFetch Custom Hook

The `useFectch` hook can be used to simplify fetch `GET` requests and data caching in your application.

### Usage

```javascript
import { useFetch } from './useFetch';
import Overlay from '@atomikui/core/dist/components/overlay';
import Spinner from '@atomikui/core/dist/components/spinner';
import Alert from '@atomikui/core/dist/components/alert';
import List from '@atomikui/core/dist/components/list';

const App = () => {
  const { isLoading, data, error } = useFetch(
    'https://jsonplaceholder.typicode.com/users',
  );

  if (isLoading)
    return (
      <Overlay isActive>
        <Spinner size="xlg" theme="white" themeVariant="light" />
      </Overlay>
    );

  if (error) return <Alert theme="error">{error}</Alert>;

  return (
    <List>
      {data.map(({ id, name }) => (
        <List.Item key={id}>{name}</List.Item>
      ))}
    </List>
  );
};

export default App;
```
