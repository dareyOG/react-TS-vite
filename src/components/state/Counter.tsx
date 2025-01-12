import { useReducer } from 'react';

type CounterState = {
  count: number;
};

type CounterAction = { type: string; payload: number };

const initialState = { count: 0 };

function counterReducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case 'decrement':
      return { ...state, count: state.count - action.payload };
    case 'increment':
      return { ...state, count: state.count + action.payload };
    default:
      throw new Error('unknown action');
  }
}

function Counter() {
  const [state, dispatch] = useReducer(counterReducer, initialState);
  return (
    <div>
      <h1>Welcome to my counter</h1>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'decrement', payload: 1 })}>&minus;</button>
      <button onClick={() => dispatch({ type: 'increment', payload: 1 })}>&plus;</button>
    </div>
  );
}

export default Counter;
