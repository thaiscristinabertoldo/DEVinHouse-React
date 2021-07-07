import { forwardRef, useRef } from 'react'

export function ComponentUseRef() {
  const inputRef = useRef()

  console.log('inputRef', inputRef)
  const focusInput = () => inputRef.current.focus()

  return (
    <>
      <h1> useRef - DOM</h1>
      <input ref={inputRef} />
      <button onClick={focusInput}>Focus</button>
    </>
  )
}

export const ComponentUseRefParent = () => {
  const inputRef = useRef()

  const handleValue = () => (inputRef.current.textContent = Math.random().toString(36).substring(2))

  return (
    <>
      <h1>useRef - Forward</h1>
      <Component2 ref={inputRef} />
      <button onClick={handleValue}>atualizar</button>
    </>
  )
}

export const Component2 = forwardRef((props, ref) => {
  return <p ref={ref}>{ref.current?.textContent || 'Text 123'}</p>
})
