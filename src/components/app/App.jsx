/* eslint-disable max-len */
import React, { useReducer } from 'react';
import { reducer, initialState } from '../reducers/useReducer';

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <button onClick={() => dispatch({ type: 'UNDO' })}>undo</button>
      <button onClick={() => dispatch({ type: 'REDO' })}>redo</button>
      <input data-testid="COLOR_CHANGE"
        type="color"
        value={state.current}
        onChange={({ target }) => dispatch({ type: 'current', payload: target.value })} />
      <div style={{
        backgroundColor: state.current,
        width: '10rem',
        height: '10rem'
      }}></div>
    </>
  );
}
