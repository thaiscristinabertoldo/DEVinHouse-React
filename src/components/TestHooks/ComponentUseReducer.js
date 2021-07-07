import { useReducer } from 'react'

function reducer(state, action) {
  switch (action.type) {
    case 'remove':
      return { count: state.count - 1 }
    case 'add':
      return { count: state.count + 1 }
    default:
      return state.count
  }
}

export function ComponentUseReducer() {
  const initialState = { count: 0 }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <h1>useReducer</h1>
      <p>Count: {state.count}</p>
      <button disabled={state.count === 0} onClick={() => dispatch({ type: 'remove' })}>
        -
      </button>
      <button disabled={state.count === 10} onClick={() => dispatch({ type: 'add' })}>
        +
      </button>
      <hr />
    </>
  )
}
