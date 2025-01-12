import { useReducer } from 'react';

type CounterState = {
  count: number;
};

type UpdateAction = {
  type: 'increment' | 'decrement';
  payload: number;
};

type ResetAction = {
  type: 'reset';
};

// type CounterAction = { type: 'increment' | 'decrement' | 'reset'; payload: number };
type CounterAction = UpdateAction | ResetAction;

const initialState = { count: 0 };

function counterReducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case 'decrement':
      return { ...state, count: state.count - action.payload };
    case 'increment':
      return { ...state, count: state.count + action.payload };
    case 'reset':
      return initialState;
    default:
      throw new Error('unknown action');
  }
}

function Counter() {
  const [{ count }, dispatch] = useReducer(counterReducer, initialState);
  return (
    <div>
      <h1>Welcome to my counter</h1>
      <p>Count: {count}</p>
      <button onClick={() => dispatch({ type: 'decrement', payload: 1 })}>&minus;</button>
      <button onClick={() => dispatch({ type: 'increment', payload: 1 })}>&plus;</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset♻️</button>
    </div>
  );
}

export default Counter;
