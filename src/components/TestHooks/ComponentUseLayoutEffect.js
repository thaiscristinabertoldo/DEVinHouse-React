import { useEffect, useLayoutEffect, useState } from 'react'

export function ComponentUseLayoutEffect() {
  const [value, setValue] = useState(0)

  useLayoutEffect(() => {
    if (value === 0) {
      setValue(10 + Math.random() * 200)
    }
  }, [value])

  // useEffect(() => {
  //   if (value === 0) {
  //     setValue(10 + Math.random() * 200)
  //   }
  // }, [value])

  return (
    <>
      <h1>useLayoutEffect</h1>
      <div style={{ backgroundColor: '#000', color: '#fff', padding: '5px', marginBottom: '10px' }}>
        <p> {value}</p>
      </div>
      <button onClick={() => setValue(0)}>value</button>
    </>
  )
}
