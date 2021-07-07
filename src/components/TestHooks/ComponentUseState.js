import { useState } from 'react'

export const ComponentUseState = () => {
  const [counter, setCounter] = useState(2)

  const handleAdd = () => {
    setCounter((prev) => ++prev)
  }

  const handleRemove = () => {
    setCounter((prev) => --prev)
  }

  return (
    <>
      <h1>useState</h1>
      <p>{counter}</p>
      <button disabled={counter === 0} onClick={handleRemove}>
        -
      </button>
      <button disabled={counter === 5} onClick={handleAdd}>
        +
      </button>
    </>
  )
}
