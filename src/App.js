import { useFetch } from './useFetch';

const App = () => {
  const { isLoading, data, error } = useFetch(
    'https://jsonplaceholder.typicode.com/users',
  );

  if (isLoading) return 'Loading...';
  if (error) return error;

  return <pre className="App">{JSON.stringify(data, null, 2)}</pre>;
};

export default App;
