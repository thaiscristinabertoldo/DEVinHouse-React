import { useEffect, useState } from 'react'

export const ComponentUseEffect = () => {
  const [filter, setFilter] = useState('')
  const [inputValue, setInputValue] = useState('')

  const onResize = () => {
    console.log('chamou onResize')
  }

  useEffect(() => {
    console.log('chamada api -> filter:', filter)
  }, [filter])

  useEffect(() => {
    window.addEventListener('resize', onResize)

    return () => {
      console.log('chamou unmount')
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <>
      <h1>useEffect</h1>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button onClick={() => setFilter(inputValue)}>Filtrar</button>
    </>
  )
}
