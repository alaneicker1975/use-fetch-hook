import { useEffect, useRef, useReducer } from 'react';

export const useFetch = (url) => {
  const cache = useRef({});

  const initialState = {
    data: [],
    isLoading: false,
    error: null,
  };

  const [state, dispatch] = useReducer((state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_START':
        return { ...state, isLoading: true };
      case 'FETCH_COMPLETE':
        return { ...state, isLoading: false, data: action.payload };
      case 'FETCH_ERROR':
        return { ...state, isLoading: false, error: action.payload };
      default:
        return state;
    }
  }, initialState);

  useEffect(() => {
    let cancelFetch = false;
    if (!url) return;

    const fetchData = async () => {
      dispatch({ type: 'FETCH_START' });

      if (cache.current[url]) {
        dispatch({ type: 'FETCH_COMPLETE', payload: cache.current[url] });
      } else {
        try {
          const response = await fetch(url);
          const data = await response.json();
          cache.current[url] = data;
          if (cancelFetch) return;
          dispatch({ type: 'FETCH_COMPLETE', payload: data });
        } catch (error) {
          if (cancelFetch) return;
          dispatch({ type: 'FETCH_ERROR', payload: error });
        }
      }
    };

    fetchData();

    return () => (cancelFetch = true);
  }, [url]);

  return state;
};
