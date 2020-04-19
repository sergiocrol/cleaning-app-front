import { useReducer } from 'react';

const reducer = (state, { field, value }) => {
  return {
    ...state,
    [field]: value
  }
}

export const useInputChange = (initialState) => {
  const [state, setState] = useReducer(reducer, initialState);

  return [state, setState];
}