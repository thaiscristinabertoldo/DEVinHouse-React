import { ComponentUseCallback } from './ComponentUseCallback'
import { ComponentUseEffect } from './ComponentUseEffect'
import { ComponentUseLayoutEffect } from './ComponentUseLayoutEffect'
import { ComponentUseMemo } from './ComponentUseMemo'
import { ComponentUseReducer } from './ComponentUseReducer'
import { ComponentUseRef, ComponentUseRefParent } from './ComponentUseRef'
import { ComponentUseState } from './ComponentUseState'

export const ComponentHook = () => {
  return (
    <div>
      <h1>Hooks</h1>
      <hr />

      <ComponentUseState />
      <hr />

      <ComponentUseEffect />
      <hr />

      <ComponentUseRef />
      <hr />

      <ComponentUseRefParent />
      <hr />

      <ComponentUseReducer />
      <hr />

      <ComponentUseCallback />
      <hr />

      <ComponentUseMemo />
      <hr />

      <ComponentUseLayoutEffect />

      <hr />
    </div>
  )
}
