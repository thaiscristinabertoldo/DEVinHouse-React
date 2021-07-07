import { useMemo, useState } from 'react'

const computeExpensiveValue = (a, b) => {
  let value = 0
  console.log('useMemo: computeExpensiveValue', a, b)
  for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
      value += (Math.random() * (30 - 1) + 1) * parseInt(a)
    } else {
      value += Math.random() * (200 - 1) + 1 + parseInt(b)
    }
  }

  return Math.floor(value)
}

export function ComponentUseMemo() {
  const [title, setTitle] = useState('')
  const [b, setB] = useState('20')
  const a = '10'

  const memoizedValue = useMemo(() => computeExpensiveValue(a, b || '0'), [a, b])
  // const nonMemoizedValue = computeExpensiveValue(a, b || '0')

  return (
    <>
      <h1>useMemo</h1>
      <label>Digite alguma coisa</label>
      <input value={title} onChange={(e) => setTitle(e.target.value)} />

      <p>{memoizedValue}</p>
      {/* <p>{nonMemoizedValue}</p> */}

      <label>Digite o valor</label>
      <input type="number" value={b} onChange={(e) => setB(e.target.value)} />
    </>
  )
}
