import { useCallback, useState } from 'react'

const uniqueValues = new Set()

export function ComponentUseCallback() {
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  // const increment1 = () => setCount1((old) => old + 1)
  // const increment2 = () => setCount2((old) => old + 1)
  // uniqueValues.add(increment1)
  // uniqueValues.add(increment2)

  const incrementMemoised1 = useCallback(() => setCount1((old) => old + 1), [])
  const incrementMemoised2 = useCallback(() => setCount2((old) => old + 1), [])
  uniqueValues.add(incrementMemoised1)
  uniqueValues.add(incrementMemoised2)

  console.log('useCallback - funções criadas:', uniqueValues)
  return (
    <>
      <h1>useCallback</h1>

      <p>{count1}</p>
      <CountButton text="CONTADOR 1" onClick={incrementMemoised1} />
      {/* <CountButton text="CONTADOR 1" onClick={increment1} /> */}

      <p>{count2}</p>
      <CountButton text="CONTADOR 2" onClick={incrementMemoised2} />
      {/* <CountButton text="CONTADOR 2" onClick={increment2} /> */}

      <p>Total de funções criadas: {uniqueValues.size}</p>
    </>
  )
}

const CountButton = ({ text, onClick }) => <button onClick={onClick}>{text}</button>
